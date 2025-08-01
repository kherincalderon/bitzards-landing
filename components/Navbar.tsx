// components/Navbar.tsx
'use client';

import { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About us' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#case-studies', label: 'Case Studies' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (isMenuOpen) {
      toggleMenu();
    }
    gsap.to(window, {
      duration: 1.2,
      scrollTo: target,
      ease: 'power2.inOut',
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-blue/80 backdrop-blur-sm text-primary-text">
      <div className="max-w-[1440px] mx-auto px-20">
        <nav className="flex h-[90px] items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="text-2xl font-bold font-sora"
          >
            BITZARDS
          </Link>

          <div className="hidden items-center space-x-8 md:flex font-sora">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#free-audit"
              onClick={(e) => handleScroll(e, '#free-audit')}
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

      {/* --- LÓGICA DE VISIBILIDAD RESTAURADA AQUÍ --- */}
      <div
        className={`absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-dark-blue transition-transform duration-300 ease-in-out md:hidden z-40 font-sora ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-2xl hover:text-gray-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#free-audit"
          onClick={(e) => handleScroll(e, '#free-audit')}
          className="mt-4 rounded-full border border-accent-green px-8 py-4 text-xl text-accent-green transition-all hover:bg-accent-green hover:text-light-blue"
        >
          Get My Free AI Audit
        </Link>
      </div>
    </header>
  );
};
