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

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

const solutionsData = [
  {
    Icon: Workflow,
    title: 'AI Integrations and Automation',
    description:
      'Tired of doing the same tasks over and over? We automate your workflows — from lead follow-ups to internal ops — so you can scale without burnout.',
    tagline: 'Save hours weekly. Focus on what matters.',
  },
  {
    Icon: BotMessageSquare,
    title: 'Conversational Chatbots',
    description:
      'Engage your customers 24/7 with bots that actually sound like you. Built for conversions, trained on your brand, and ready to serve — anytime, anywhere.',
    tagline: 'Human-like. Sales-ready. Always on.',
  },
  {
    Icon: Sparkles,
    title: 'Custom GPT Development',
    description:
      "Your own AI assistant, trained on your data, brand voice, and workflows. From answering FAQs to powering internal tools — it's like cloning your best team member.",
    tagline: 'Private. Smart. Fully yours.',
  },
];

export const Solutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
    // 1. FONDO DE SECCIÓN 'light-blue' APLICADO
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
          {solutionsData.map(({ Icon, title, description, tagline }, index) => (
            <div
              key={index}
              // 2. EFECTOS HOVER ELIMINADOS, FONDO DE TARJETA 'dark-blue'
              className="solution-card col-span-12 md:col-span-6 lg:col-span-4 bg-dark-blue p-8 rounded-xl flex flex-col text-center items-center"
            >
              <Icon size={40} className="text-accent-green mb-6" />
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-gray-300 flex-grow">{description}</p>
              <p className="mt-6 font-semibold text-primary-text">{tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
