import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { inter, sora } from './fonts';

export const metadata: Metadata = {
  title: 'Bitzards | The Witzards of the Code',
  description: 'AI Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
