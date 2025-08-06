'use client';

import { useState, useLayoutEffect, useRef, FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle2,
  ChevronDown,
  Bot,
  BrainCircuit,
  Rocket,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- i18next Ready Content Object ---
const pageContent = {
  hero: {
    headline: 'Your Team, Amplified by a 24/7 AI Expert.',
    subheadline:
      "We build artificial intelligence assistants trained exclusively on your company's data. For marketing agencies, e-commerce, and real estate firms seeking a true competitive edge.",
    primaryCta: 'Request a Free Demo',
    secondaryCta: 'See Case Studies',
  },
  problem: {
    headline:
      "Is your team spending hours on repetitive tasks? There's a smarter way to work.",
    columns: [
      {
        title: 'For Marketing Agencies',
        text: 'Unscalable campaigns, generic client responses, time-consuming content creation.',
      },
      {
        title: 'For E-commerce',
        text: "Abandoned carts, overwhelmed customer support, product descriptions that don't convert.",
      },
      {
        title: 'For Real Estate',
        text: 'Inefficient lead qualification, manual follow-ups, limited after-hours availability.',
      },
    ],
  },
  solution: {
    headline:
      "Introducing Custom GPTs by Bitzards: Artificial Intelligence with Your Company's DNA.",
    paragraph:
      "Forget the one-size-fits-all AI tools. We develop a unique digital brain for you, fed with your processes, your knowledge base, and your brand voice. The result is a virtual assistant that doesn't just answer—it understands the context of your business, qualifies leads, creates content, and assists your team with unparalleled precision. It's the missing piece for intelligent scaling.",
  },
  benefits: {
    headline: 'Transform Your Operations, Not Just Your Tasks.',
    items: [
      {
        icon: Bot,
        title: 'Uninterrupted 24/7 Support',
        text: 'Your virtual assistant never sleeps. Provide instant, accurate answers to your clients and leads, any time of day, 365 days a year.',
      },
      {
        icon: Rocket,
        title: 'Exponential Time Savings',
        text: 'Automate everything from drafting blog posts and ads to qualifying prospects. Free up your team to focus on strategy and growth.',
      },
      {
        icon: BrainCircuit,
        title: 'Deep Personalization',
        text: "We train your GPT on your documents, brand voice, and processes. It's not a generic AI; it's an expert member of your team.",
      },
      {
        icon: CheckCircle2,
        title: '100% Accurate & Relevant Answers',
        text: 'Eliminate the risk of incorrect information. Your GPT only uses the knowledge base you provide, ensuring consistency and reliability.',
      },
    ],
  },
  useCases: {
    headline: 'Tailor-Made for Your Industry.',
    tabs: [
      {
        name: 'Marketing Agencies',
        items: [
          'Campaign brainstorming assistant.',
          'Social media and Google Ads copy generator.',
          'New client onboarding agent.',
        ],
      },
      {
        name: 'E-commerce',
        items: [
          'Expert product catalog chatbot.',
          'Abandoned cart recovery with personalized messages.',
          'SEO-optimized product description generator.',
        ],
      },
      {
        name: 'Real Estate',
        items: [
          'Virtual agent for lead qualification and tour scheduling.',
          'Assistant for answering common property questions.',
          'Compelling listing description generator.',
        ],
      },
    ],
  },
  socialProof: {
    headline: 'Industry Leaders Already Trust Bitzards.',
    testimonial: {
      quote:
        'We reduced our content creation time by 90% and the quality is better than ever. The Bitzards custom GPT is our secret weapon.',
      author: 'Mark Chen, Head of Marketing',
      company: 'Creative Solutions Inc.',
      photo: '/placeholder-avatar.jpg',
    },
    logos: [
      '/logo-placeholder.svg',
      '/logo-placeholder.svg',
      '/logo-placeholder.svg',
      '/logo-placeholder.svg',
    ],
  },
  howItWorks: {
    headline: 'Your Expert GPT in 3 Simple Steps.',
    steps: [
      {
        number: '1',
        title: 'Discovery',
        description:
          'We meet to understand your goals and analyze your data sources (website, documents, etc.).',
      },
      {
        number: '2',
        title: 'Development & Training',
        description:
          'We build and customize your GPT, training it to become a true expert on your business.',
      },
      {
        number: '3',
        title: 'Implementation & Integration',
        description:
          'We integrate it into your platforms (website, Slack, WhatsApp) and provide ongoing support.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready to Build Your AI-Powered Competitive Edge?',
    paragraph:
      "Don't let your competition out-innovate you. A 30-minute demo is all it takes to see the impact a custom GPT can have on your ROI. We will show you, live, how we can solve one of your current challenges.",
    cta: 'Schedule My Custom Demo',
    microcopy: '100% free and no commitment. Prepare to be amazed!',
  },
  faq: {
    headline: 'Frequently Asked Questions',
    items: [
      {
        q: 'Is my data secure?',
        a: 'Yes. Security is our top priority. Your data is used exclusively to train your private model and is never shared or used for any other purpose. We adhere to the strictest data privacy protocols.',
      },
      {
        q: 'How is this different from ChatGPT Plus?',
        a: 'While ChatGPT Plus is a powerful general tool, our Custom GPTs are specialists. They are trained only on your business data, ensuring answers are 100% accurate, on-brand, and relevant to your specific operations, without the risk of generating incorrect information.',
      },
      {
        q: 'How long does implementation take?',
        a: 'A foundational model can be ready for testing in as little as two weeks. The full timeline depends on the complexity and the amount of data for training, but we focus on delivering value as quickly as possible.',
      },
      {
        q: 'What kind of support do you offer?',
        a: 'We are your long-term AI partner. We provide full integration support, team training, and ongoing monitoring and optimization to ensure your GPT becomes more valuable over time.',
      },
    ],
  },
};

// Reusable Accordion Component
const AccordionItem: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-dark-blue">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left text-primary-text"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-sora">{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 text-accent-green ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

const CustomGptsPage = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // General purpose animation for sections
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

      // 1. Hero
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

      // 2. Problem
      animateIn('.problem-column', '.problem-section');

      // 4. Benefits
      animateIn('.benefit-item', '.benefits-section');

      // 7. How It Works
      animateIn('.how-it-works-step', '.how-it-works-section');
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      {/* 1. Hero Section */}
      <section className="bg-dark-blue py-32 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="hero-h1 text-4xl md:text-7xl font-bold">
            {pageContent.hero.headline}
          </h1>
          <p className="hero-subheadline mt-6 text-lg md:text-xl text-gray-300">
            {pageContent.hero.subheadline}
          </p>
          <div className="hero-cta mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-accent-green text-black font-sora font-semibold px-8 py-3 w-full sm:w-auto hover:bg-light-green transition-colors"
            >
              {pageContent.hero.primaryCta}
            </Link>
            <Link
              href="/case-studies"
              className="font-sora font-semibold hover:text-accent-green transition-colors"
            >
              {pageContent.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Problem / Opportunity */}
      <section className="problem-section bg-light-blue py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            {pageContent.problem.headline}
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.problem.columns.map((col, index) => (
              <div
                key={index}
                className="problem-column bg-dark-blue p-8 rounded-xl"
              >
                <h3 className="text-2xl font-sora font-bold text-accent-green">
                  {col.title}
                </h3>
                <p className="mt-4 text-gray-300">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Introduction */}
      <section className="bg-dark-blue py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-primary">
            {pageContent.solution.headline}
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            {pageContent.solution.paragraph}
          </p>
          <div className="mt-8 h-64 bg-light-blue/20 rounded-lg animate-pulse flex items-center justify-center text-gray-500">
            Animated Diagram Placeholder
          </div>
        </div>
      </section>

      {/* 4. Key Benefits */}
      <section className="benefits-section bg-light-blue py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            {pageContent.benefits.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageContent.benefits.items.map((item, index) => (
              <div key={index} className="benefit-item flex items-start gap-6">
                <item.icon className="w-10 h-10 text-accent-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-sora font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specific Use Cases */}
      <section className="bg-dark-blue py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            {pageContent.useCases.headline}
          </h2>
          <div className="space-y-2">
            {pageContent.useCases.tabs.map((tab, index) => (
              <AccordionItem key={index} title={tab.name}>
                <ul className="space-y-3 list-disc list-inside text-gray-300 pl-4">
                  {tab.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Proof */}
      <section className="bg-light-blue py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {pageContent.socialProof.headline}
          </h2>
          <div className="mt-12 bg-dark-blue p-10 rounded-xl md:flex items-center gap-8 shadow-2xl shadow-dark-blue/20">
            <Image
              src={pageContent.socialProof.testimonial.photo}
              alt={pageContent.socialProof.testimonial.author}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full mx-auto md:mx-0 flex-shrink-0 object-cover bg-light-blue"
            />
            <div className="mt-6 md:mt-0 text-center md:text-left">
              <p className="italic text-xl text-primary-text">
                &quot;{pageContent.socialProof.testimonial.quote}&quot;
              </p>
              <p className="mt-6 font-bold text-gray-300 text-base">
                {pageContent.socialProof.testimonial.author},{' '}
                <span className="text-accent-green font-semibold">
                  {pageContent.socialProof.testimonial.company}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="how-it-works-section bg-dark-blue py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            {pageContent.howItWorks.headline}
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-8">
            {pageContent.howItWorks.steps.map((step, index) => (
              <div key={index} className="how-it-works-step text-center flex-1">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-accent-green rounded-full font-sora text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-2xl font-sora font-bold mt-4">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="bg-light-blue py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-primary">
            {pageContent.finalCta.headline}
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            {pageContent.finalCta.paragraph}
          </p>
          <Link
            href="/demo"
            className="mt-10 inline-block rounded-full bg-accent-green text-black font-sora font-semibold px-10 py-4 text-lg hover:bg-light-green transition-colors shadow-lg shadow-accent-green/20"
          >
            {pageContent.finalCta.cta}
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            {pageContent.finalCta.microcopy}
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-dark-blue py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            {pageContent.faq.headline}
          </h2>
          <div className="space-y-2">
            {pageContent.faq.items.map((item, index) => (
              <AccordionItem key={index} title={item.q}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomGptsPage;
