// components/PainPoints.tsx
'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const painPointsData = [
  {
    title: 'Endless Repetitive Tasks',
    description:
      "You're stuck doing the same manual work every day — answering the same questions, updating spreadsheets, chasing follow-ups. It's eating your time (and patience).",
  },
  {
    title: 'Lead Leakage & Slow Follow-ups',
    description:
      "Potential leads send messages, but they get missed. By the time you respond, they've already gone to a competitor. Your process is just too slow.",
  },
  {
    title: 'Inconsistent Customer Service',
    description:
      "Your team is great, but they can't be online 24/7. Customers get different answers to the same questions, or worse, no answer at all outside of business hours.",
  },
  {
    title: 'Failure to Scale',
    description:
      'Every new customer adds more manual work. You can\'t grow your business because you and your team are trapped working "in" the business, not "on" it.',
  },
  {
    title: 'Data Silos & Blind Spots',
    description:
      "Important information is scattered across different apps and tools. You can't get a clear picture of your business performance without tedious manual reporting.",
  },
];

export const PainPoints = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- LÓGICA RESPONSIVE CON GSAP ---
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      // ESTA ANIMACIÓN SOLO SE EJECUTA EN PANTALLAS GRANDES (lg)
      const track = section.querySelector(
        '.horizontal-track'
      ) as HTMLDivElement;
      const leftColumn = section.querySelector(
        '.left-column'
      ) as HTMLDivElement;
      const rightColumn = section.querySelector(
        '.right-column'
      ) as HTMLDivElement;
      if (!track || !leftColumn || !rightColumn) return;

      const amountToScroll = track.scrollWidth - rightColumn.offsetWidth;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${amountToScroll}`,
          invalidateOnRefresh: true,
        },
      });
      tl.to(leftColumn, { autoAlpha: 0, duration: 0.5 }, 0);
      tl.to(track, { x: -amountToScroll, ease: 'none', duration: 2 }, 0);
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-light-blue text-primary-text overflow-hidden py-20 lg:py-0"
    >
      {/* En pantallas grandes (lg) usamos h-screen para el pin, en móvil la altura es automática */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:h-screen grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* Columna Izquierda */}
        <div className="left-column col-span-1 lg:col-span-5">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center bg-dark-blue p-4 rounded-full flex-shrink-0">
              <MessageSquare size={48} className="text-accent-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-regular">
              Does This Sound Familiar?
            </h2>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="right-column col-span-1 lg:col-span-7 lg:overflow-visible">
          {/* En móvil, las tarjetas se apilan con flex-col. En desktop, es flex-row. */}
          <div className="horizontal-track flex flex-col lg:flex-row gap-8 lg:gap-16">
            {painPointsData.map((point, index) => (
              <div
                key={index}
                className="p-8 w-full lg:w-[450px] flex-shrink-0 text-center"
              >
                <h3 className="text-2xl font-regular text-gradient-primary">
                  {point.title}
                </h3>
                <p className="mt-4 text-gray-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
