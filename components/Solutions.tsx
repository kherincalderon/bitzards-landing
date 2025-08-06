// components/Solutions.tsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Workflow,
  BotMessageSquare,
  Sparkles,
  type LucideProps,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Link from 'next/link'; // Importar Link

gsap.registerPlugin(ScrollTrigger);

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

// 1. AÑADIMOS la propiedad 'href' a cada objeto
const solutionsData = [
  {
    Icon: Workflow,
    title: 'AI Integrations and Automation',
    description:
      'Tired of doing the same tasks over and over? We automate your workflows — from lead follow-ups to internal ops — so you can scale without burnout.',
    tagline: 'Save hours weekly. Focus on what matters.',
    href: '/automation', // Enlace a la página de servicio
  },
  {
    Icon: BotMessageSquare,
    title: 'Conversational Chatbots',
    description:
      'Engage your customers 24/7 with bots that actually sound like you. Built for conversions, trained on your brand, and ready to serve — anytime, anywhere.',
    tagline: 'Human-like. Sales-ready. Always on.',
    href: '/chatbots', // Enlace a la página de servicio
  },
  {
    Icon: Sparkles,
    title: 'Custom GPT Development',
    description:
      "Your own AI assistant, trained on your data, brand voice, and workflows. From answering FAQs to powering internal tools — it's like cloning your best team member.",
    tagline: 'Private. Smart. Fully yours.',
    href: '/gpts', // Enlace a la página de servicio
  },
];

export const Solutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // ... (la lógica de la animación no cambia)
    const section = sectionRef.current;
    if (!section) return;
    const cards = gsap.utils.toArray('.solution-card');
    gsap.set(cards, { autoAlpha: 0, y: 50 });
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="bg-light-blue">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-20 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light">
            Let a Bitzard Build Your AI Engine
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            From chaos to clarity — here&apos;s how we turn your workflow into a
            well-oiled AI machine.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6">
          {solutionsData.map(
            ({ Icon, title, description, tagline, href }, index) => (
              <div
                key={index}
                className="solution-card col-span-12 md:col-span-6 lg:col-span-4 bg-dark-blue p-8 rounded-xl flex flex-col text-center items-center"
              >
                {/* Contenedor para que el botón se alinee al fondo */}
                <div className="flex flex-col items-center text-center flex-grow">
                  <Icon size={40} className="text-accent-green mb-6" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-gray-300">{description}</p>
                </div>

                <div className="mt-6 w-full">
                  <p className="font-semibold text-primary-text">{tagline}</p>
                  {/* 2. AÑADIMOS EL BOTÓN/ENLACE AQUÍ */}
                  <Link
                    href={href}
                    className="mt-6 inline-block w-full rounded-full border-2 border-accent-green py-2 px-6 font-sora text-accent-green transition-colors hover:bg-accent-green hover:text-dark-blue"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
