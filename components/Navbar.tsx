// components/Navbar.tsx
'use client';

import { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // CAMBIO 1: Importar el hook
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// CAMBIO 2: El href de Home DEBE ser '/' para la navegación.
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About us' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#case-studies', label: 'Case Studies' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtener la ruta actual (ej: '/', '/blog')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // CAMBIO 3: Lógica de click inteligente
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si el menú móvil está abierto, lo cerramos en cualquier click
    if (isMenuOpen) {
      toggleMenu();
    }

    // Caso 1: El enlace es un ancla de scroll (empieza con #)
    if (href.startsWith('#')) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.2,
        scrollTo: href,
        ease: 'power2.inOut',
      });
      return;
    }

    // Caso 2: El enlace es a la Home ('/') Y YA ESTAMOS en la Home.
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      // Hacemos scroll a la parte superior de la página
      gsap.to(window, {
        duration: 1.2,
        scrollTo: 0, // 0 significa el inicio del documento
        ease: 'power2.inOut',
      });
      return;
    }

    // Caso 3: El enlace es a la Home ('/') pero estamos en OTRA PÁGINA.
    // No hacemos NADA aquí. Dejamos que el <Link> de Next.js haga su trabajo
    // de navegar a la página principal. No se llama a e.preventDefault().
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-blue/80 backdrop-blur-sm text-primary-text">
      <div className="max-w-[1440px] mx-auto px-20">
        <nav className="flex h-[90px] items-center justify-between">
          {/* CAMBIO 4: El logo usa la nueva lógica y su href es '/' */}
          <Link
            href="/"
            onClick={(e) => handleClick(e, '/')}
            className="text-2xl font-semibold font-sora"
          >
            BITZARDS
          </Link>

          <div className="hidden items-center space-x-8 md:flex font-sora">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#free-audit"
              onClick={(e) => handleClick(e, '#free-audit')}
              className="rounded-full border border-accent-green px-6 py-2 text-accent-green transition-all hover:bg-accent-green hover:text-light-blue font-sora"
            >
              Get My Free AI Audit
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-primary-text z-50 relative"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil (también usa la nueva lógica) */}
      <div
        className={`absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-dark-blue transition-transform duration-300 ease-in-out md:hidden z-40 font-sora ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-2xl hover:text-gray-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#free-audit"
          onClick={(e) => handleClick(e, '#free-audit')}
          className="mt-4 rounded-full border border-accent-green px-8 py-4 text-xl text-accent-green transition-all hover:bg-accent-green hover:text-light-blue"
        >
          Get My Free AI Audit
        </Link>
      </div>
    </header>
  );
};
