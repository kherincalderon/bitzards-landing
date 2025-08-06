'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Importa el objeto de contenido centralizado
import { pageContent } from './_content';

// 2. Importa todos los componentes de sección
import { HeroSection } from './_components/HeroSection';
import { ProblemSection } from './_components/ProblemSection';
import { SolutionSection } from './_components/SolutionSection';
import { BenefitsSection } from './_components/BenefitsSection';
import { UseCasesSection } from './_components/UseCasesSection';
import { SocialProofSection } from './_components/SocialProofSection';
import { HowItWorksSection } from './_components/HowItWorksSection';
import { CtaSection } from './_components/CtaSection';
import { FaqSection } from './_components/FaqSection';

gsap.registerPlugin(ScrollTrigger);

const CustomGptsPage = () => {
  const mainRef = useRef(null);

  // 3. La lógica de animación se mantiene aquí para coordinar toda la página
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Función de ayuda para animaciones de entrada
      const animateIn = (
        selector: string,
        trigger?: string,
        stagger = 0.15
      ) => {
        gsap.from(selector, {
          autoAlpha: 0,
          y: 50,
          stagger,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trigger || selector,
            start: 'top 85%',
            once: true,
          },
        });
      };

      // Animación específica para el Hero
      gsap.from('.hero-h1', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
      gsap.from('.hero-subheadline, .hero-cta', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Animaciones para el resto de las secciones
      animateIn('.problem-column', '.problem-section');
      animateIn('.benefit-item', '.benefits-section');
      animateIn('.how-it-works-step', '.how-it-works-section');
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      {/* 4. Renderiza cada componente, pasándole su parte del contenido */}
      <HeroSection content={pageContent.hero} />
      <ProblemSection content={pageContent.problem} />
      <SolutionSection content={pageContent.solution} />
      <BenefitsSection content={pageContent.benefits} />
      <UseCasesSection content={pageContent.useCases} />
      <SocialProofSection content={pageContent.socialProof} />
      <HowItWorksSection content={pageContent.howItWorks} />
      <CtaSection content={pageContent.finalCta} />
      <FaqSection content={pageContent.faq} />
    </main>
  );
};

export default CustomGptsPage;
