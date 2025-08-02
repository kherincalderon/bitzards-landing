// components/HowItWorks.tsx
'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: 1,
    title: 'Discover & Strategize',
    description:
      'We start with a deep dive into your business. We analyze your goals, workflows, and existing tools to identify where AI can make the biggest impact.',
    note: 'Includes a free audit + strategy session.',
  },
  {
    step: 2,
    title: 'Build & Integrate',
    description:
      "Once we define the vision, we develop your custom solution — whether it's automations, chatbots, or GPTs. We integrate with your current stack and test everything until it flows seamlessly.",
    note: 'Tailored to your needs. Built to scale.',
  },
  {
    step: 3,
    title: 'Deploy & Optimize',
    description:
      "We launch your new AI engine and monitor its performance in real time. You get training, documentation, and ongoing support — so you're never left alone.",
    note: 'Continuous improvements. Real results.',
  },
];

export const HowItWorks = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const component = componentRef.current;
    if (!component) return;

    const steps = gsap.utils.toArray('.step-container') as HTMLElement[];
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      steps.forEach((step) => {
        gsap.from(step, {
          autoAlpha: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      id="how-it-works"
      className="bg-light-blue py-20"
    >
      <div className="max-w-[1440px] mx-auto px-8 sm:px-20">
        <h2 className="text-3xl md:text-4xl font-light mb-24">
          <span className="text-gradient-primary">Your AI Transformation</span>{' '}
          <br />
          {/* --- CAMBIO REALIZADO AQUÍ --- */}
          <span className="text-primary-text">in 3 Steps</span>
        </h2>

        <div className="relative">
          {processSteps.map((item, index) => (
            <div key={index} className="step-container">
              <div className="grid grid-cols-12 gap-6 items-start mb-12 last:mb-0">
                <div className="col-span-1 flex flex-col items-center">
                  <div className="z-10 bg-light-blue p-1 rounded-full">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-dark-green rounded-full font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-48 bg-gray-700 mt-2"></div>
                  )}
                </div>
                <div className="col-span-11 -mt-4">
                  <h3 className="text-xl md:text-2xl font-text text-accent-green">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300 max-w-2xl">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-400 italic">
                    {item.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
