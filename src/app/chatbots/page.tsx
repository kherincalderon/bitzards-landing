// app/services/chatbots/page.tsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Importa el contenido y TODOS los componentes de sección
import { pageContent } from './_content';
import { HeroSection } from './_components/HeroSection';
import { SocialProofSection } from './_components/SocialProofSection';
import { ProblemSection } from './_components/ProblemSection';
import { SolutionSection } from './_components/SolutionSection';
import { HowItWorksSection } from './_components/HowItWorksSection';
import { TestimonialSection } from './_components/TestimonialSection';
import { CtaSection } from './_components/CtaSection';
import { FaqSection } from './_components/FaqSection';

gsap.registerPlugin(ScrollTrigger);

const ChatbotsPage = () => {
  const mainRef = useRef(null);

  // 2. La lógica de animación se mantiene aquí para orquestar la página
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animateIn = (selector: string, trigger: string) => {
        gsap.from(selector, {
          autoAlpha: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger, start: 'top 85%', once: true },
        });
      };

      animateIn('.logo-item', '.social-proof-section');
      animateIn('.problem-column', '.problem-section');
      animateIn('.benefit-item', '.solution-section-benefits');
      animateIn('.how-it-works-step', '.how-it-works-section');
      animateIn('.testimonial-card', '.testimonial-section');
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      {/* 3. Renderiza cada componente pasándole su parte del contenido */}
      <HeroSection content={pageContent.hero} />
      <SocialProofSection content={pageContent.socialProof} />
      <ProblemSection content={pageContent.problem} />
      <SolutionSection content={pageContent.solution} />
      <HowItWorksSection content={pageContent.howItWorks} />
      <TestimonialSection content={pageContent.testimonial} />
      <CtaSection content={pageContent.finalCta} />
      <FaqSection content={pageContent.faq} />
    </main>
  );
};

export default ChatbotsPage;
