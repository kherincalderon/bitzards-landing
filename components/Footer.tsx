// components/Footer.tsx

import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

const menuLinks = {
  solutions: [
    { href: '/solutions', label: 'AI & Automation' },
    { href: '/solutions', label: 'Conversational Chatbots' },
    { href: '/solutions', label: 'Custom GPT Development' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/case-studies', label: 'Case Studies' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Columna Izquierda: Marca y Redes Sociales */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-2xl font-bold mb-2">BITZARDS</h2>
            <p className="text-gray-400 max-w-xs">
              Custom AI Solutions to Automate, Optimize, and Outperform.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#38E5A6] transition-colors"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* Columnas Derechas: Menú de Navegación */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {menuLinks.solutions.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#38E5A6] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                {menuLinks.company.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#38E5A6] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria y barra inferior */}
        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Bitzards. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
