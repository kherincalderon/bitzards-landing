import { Inter, Sora } from 'next/font/google';

// Configuración para la fuente 'Inter' (párrafos)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Asignamos una variable CSS
});

// Configuración para la fuente 'Sora' (títulos)
export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'], // Pesos que podríamos necesitar
  variable: '--font-sora', // Asignamos una variable CSS
});
