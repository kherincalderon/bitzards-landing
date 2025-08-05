'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Importa el contenido y los componentes
import { pageContent } from './_content';
import { HeroSection } from './_components/HeroSection';
import { ProblemSection } from './_components/ProblemSection';
import { SolutionSection } from './_components/SolutionSection';
import { HowItWorksSection } from './_components/HowItWorksSection';
import { UseCasesSection } from './_components/UseCasesSection';
import { BenefitsSection } from './_components/BenefitsSection';
import { SocialProofSection } from './_components/SocialProofSection';
import { CtaSection } from './_components/CtaSection';
import { FaqSection } from './_components/FaqSection';

gsap.registerPlugin(ScrollTrigger);

const AutomationPage = () => {
  const mainRef = useRef(null);

  // La lógica de animación se mantiene aquí para coordinar la página completa
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline-word', {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
      gsap.from('.hero-subheadline', {
        y: 20,
        autoAlpha: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
      });
      gsap.from('.problem-item', {
        x: -50,
        autoAlpha: 0,
        stagger: 0.2,
        scrollTrigger: { trigger: '.problem-section', start: 'top 80%' },
      });
      gsap.from('.how-it-works-step', {
        y: 50,
        autoAlpha: 0,
        stagger: 0.2,
        scrollTrigger: { trigger: '.how-it-works-section', start: 'top 80%' },
      });
      gsap.from('.benefit-card', {
        scale: 0.8,
        autoAlpha: 0,
        stagger: 0.15,
        scrollTrigger: { trigger: '.benefits-section', start: 'top 80%' },
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      <HeroSection content={pageContent.hero} />
      <ProblemSection content={pageContent.problem} />
      <SolutionSection content={pageContent.solution} />
      <HowItWorksSection content={pageContent.howItWorks} />
      <UseCasesSection content={pageContent.useCases} />
      <BenefitsSection content={pageContent.benefits} />
      <SocialProofSection content={pageContent.socialProof} />
      <CtaSection content={pageContent.finalCta} />
      <FaqSection content={pageContent.faq} />
    </main>
  );
};

export default AutomationPage;
