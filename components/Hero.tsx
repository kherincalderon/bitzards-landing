// components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Hero = () => {
  const scrollIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(scrollIconRef.current, {
      y: 10,
      duration: 0.8,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="home"
      className="bg-light-blue h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-20 relative pt-16 sm:pt-24 aurora-background"
    >
      {/* --- CAMBIO REALIZADO AQUÍ --- */}
      {/* Añadimos 'relative' y 'z-10' para poner este contenido en una capa superior */}
      <div className="max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Stop Drowning in Busywork. <br />
          <span className="text-gradient-primary">Start Scaling with AI</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We help unlock powerful automations, chatbots, and Custom GPTs —
          tailored to scale your business with less effort and more
          intelligence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-white text-black font-sora font-semibold px-8 py-3 w-full sm:w-auto hover:bg-gray-200 transition-colors duration-300"
          >
            Get My Free AI Audit
          </Link>
          <Link
            href="/demo"
            className="border border-gray-400 rounded-full px-8 py-3 w-full sm:w-auto hover:bg-white hover:text-black transition-colors duration-300 font-sora"
          >
            Get a Free Demo
          </Link>
        </div>
      </div>

      <div
        ref={scrollIconRef}
        className="absolute bottom-0 sm:bottom-2 left-1/2 -translate-x-1/2 z-10" // Añadimos z-10 aquí también
      >
        <Link
          href="#about"
          aria-label="Scroll to next section"
          className="text-primary-text cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            gsap.to(window, {
              duration: 1.2,
              scrollTo: '#about',
              ease: 'power2.inOut',
            });
          }}
        >
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};
