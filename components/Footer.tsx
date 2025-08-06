import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

const menuLinks = {
  solutions: [
    { href: '/automation', label: 'AI & Automation' },
    { href: '/chatbots', label: 'Conversational Chatbots' },
    { href: '/gpts', label: 'Custom GPT Development' },
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
      {/* 1. Padding responsivo: Menos padding en móvil, más en desktop */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* 2. Grid principal ahora se apila en móvil y tiene espaciado vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
          {/* Columna Izquierda: Ahora centrada en móvil */}
          <div className="col-span-1 lg:col-span-5 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">BITZARDS</h2>
            <p className="text-gray-400 max-w-xs mx-auto lg:mx-0">
              Custom AI Solutions to Automate, Optimize & Outperform.
            </p>
            {/* 3. Iconos sociales centrados en móvil */}
            <div className="flex items-center space-x-4 mt-6 justify-center lg:justify-start">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-accent-green transition-colors"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* Columnas Derechas: Menú de Navegación */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-2 gap-8 text-center sm:text-left">
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {menuLinks.solutions.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-accent-green transition-colors"
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
                      className="text-gray-400 hover:text-accent-green transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Espacio reservado para una tercera columna de enlaces si la necesitas en el futuro */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        {/* La barra inferior ya era responsive, no necesita cambios */}
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
