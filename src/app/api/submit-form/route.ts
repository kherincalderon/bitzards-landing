// app/api/submit-form/route.ts

import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

// Inicializa el cliente de Notion con la clave secreta
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, company, goal, industry, urgency, channels } =
      formData;

    // Obtenemos el ID de la base de datos desde las variables de entorno
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error(
        'El ID de la base de datos de Notion no está configurado.'
      );
    }

    // Construimos el contenido para el campo "Notas"
    const notesContent = `
Objetivo Principal: ${goal || 'No especificado'}
Industria: ${industry || 'No especificado'}
Urgencia: ${urgency || 'No especificado'}
Canales: ${channels.join(', ') || 'Ninguno'}
    `.trim();

    // Creamos la nueva página (fila) en la base de datos de Notion
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // IMPORTANTE: Los nombres aquí deben coincidir EXACTAMENTE con los de tu Notion
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
          select: { name: 'Lead' }, // Valor automático
        },
        Fuente: {
          type: 'select',
          select: { name: 'Web' }, // Valor automático
        },
        Notas: {
          type: 'rich_text',
          rich_text: [{ type: 'text', text: { content: notesContent } }],
        },
      },
    });

    // Devolvemos una respuesta exitosa
    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    // Devolvemos una respuesta de error
    return NextResponse.json(
      { success: false, error: 'Hubo un error al enviar el formulario.' },
      { status: 500 }
    );
  }
}
