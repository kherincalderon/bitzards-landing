// app/api/submit-form/route.ts

import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // --- CORRECCIÓN AQUÍ ---
    // En lugar de buscar un objeto 'formData', extraemos todas las variables
    // directamente del cuerpo (body) de la petición.
    const {
      name,
      email,
      company,
      goal,
      industry,
      urgency,
      channels,
      recaptchaToken,
    } = body;
    // --- FIN DE LA CORRECCIÓN ---

    // 1. VERIFICACIÓN DE reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      throw new Error('La clave secreta de reCAPTCHA no está configurada.');
    }

    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, error: 'Verificación de reCAPTCHA fallida.' },
        { status: 400 }
      );
    }

    // 2. VALIDACIÓN DE DATOS EN EL SERVIDOR
    if (!name || !email || !company || !goal || !industry) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Formato de email inválido.' },
        { status: 400 }
      );
    }
    if (!Array.isArray(channels) || channels.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Se debe seleccionar al menos un canal.' },
        { status: 400 }
      );
    }

    // 3. ENVÍO A NOTION
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error(
        'El ID de la base de datos de Notion no está configurado.'
      );
    }

    const notesContent = `
Objetivo Principal: ${goal}
Industria: ${industry}
Urgencia: ${urgency}
Canales: ${channels.join(', ')}
    `.trim();

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Nombre: {
          type: 'title',
          title: [{ type: 'text', text: { content: name } }],
        },
        Email: {
          type: 'email',
          email: email,
        },
        Empresa: {
          type: 'rich_text',
          rich_text: [{ type: 'text', text: { content: company } }],
        },
        Estado: {
          type: 'select',
          select: { name: 'Lead' },
        },
        Fuente: {
          type: 'select',
          select: { name: 'Web' },
        },
        Notas: {
          type: 'rich_text',
          rich_text: [{ type: 'text', text: { content: notesContent } }],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Hubo un error interno al enviar el formulario.',
      },
      { status: 500 }
    );
  }
}
