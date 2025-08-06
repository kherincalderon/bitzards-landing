import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { inter, sora } from './fonts';

export const metadata: Metadata = {
  title: 'Bitzards | The Wizards of the Code',
  description: 'Custom AI Solutions to Automate, Optimize, and Outperform.',
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
