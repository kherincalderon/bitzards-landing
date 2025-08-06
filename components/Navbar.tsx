// components/Navbar.tsx
'use client';

import { useState, MouseEvent, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About us' },
  {
    label: 'Solutions',
    isDropdown: true,
    subLinks: [
      { href: '/automation', label: 'AI & Automation' },
      { href: '/chatbots', label: 'Conversational Chatbots' },
      { href: '/gpts', label: 'Custom GPTs' },
    ],
  },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#case-studies', label: 'Case Studies' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isMenuOpen) toggleMenu();
    if (href.startsWith('/#')) {
      e.preventDefault();
      if (pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: href.substring(1),
          ease: 'power2.inOut',
        });
      }
    } else if (href === '/' && pathname === '/') {
      e.preventDefault();
      gsap.to(window, { duration: 1.2, scrollTo: 0, ease: 'power2.inOut' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-blue/80 backdrop-blur-sm text-primary-text">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20">
        <nav className="flex h-[90px] items-center justify-between">
          <Link
            href="/"
            onClick={(e) => handleClick(e, '/')}
            className="text-2xl font-semibold font-sora hover-text-gradient transition-colors duration-300"
          >
            BITZARDS
          </Link>

          <div className="hidden items-center space-x-8 md:flex font-sora">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div
                  key={link.label}
                  className="relative group"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="flex items-center gap-1 transition-colors duration-300 hover-text-gradient"
                    aria-haspopup="true"
                    aria-expanded={isSolutionsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 group-hover:rotate-180 ${
                        isSolutionsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-dark-blue rounded-lg shadow-lg p-2 transition-all duration-300 origin-top
                                 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                                 ${
                                   isSolutionsOpen
                                     ? '!opacity-100 !scale-100 !visible'
                                     : ''
                                 }`}
                  >
                    <ul className="space-y-1">
                      {link.subLinks?.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-light-blue hover:text-primary-text rounded-md"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={(e) => handleClick(e, link.href!)}
                  className="transition-colors duration-300 hover-text-gradient"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link
              href="/demo"
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

      <div
        className={`absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-dark-blue transition-transform duration-300 ease-in-out md:hidden z-40 font-sora ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) =>
          link.isDropdown ? (
            <div key={link.label} className="text-center">
              <span className="text-2xl text-accent-green">{link.label}</span>
              <ul className="mt-2 space-y-2">
                {link.subLinks?.map((subLink) => (
                  <li key={subLink.href}>
                    <Link
                      href={subLink.href}
                      onClick={toggleMenu}
                      className="text-lg text-gray-300 hover:text-primary-text"
                    >
                      {subLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href!}
              onClick={(e) => handleClick(e, link.href!)}
              className="text-2xl hover:text-gray-300"
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          href="/demo"
          className="mt-4 rounded-full border border-accent-green px-8 py-4 text-xl text-accent-green transition-all hover:bg-accent-green hover:text-light-blue"
        >
          Get My Free AI Audit
        </Link>
      </div>
    </header>
  );
};
