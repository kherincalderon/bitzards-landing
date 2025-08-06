// app/services/chatbots/_content/index.ts
import {
  LucideIcon,
  Users,
  MessageCircleWarning,
  BrainCircuit,
} from 'lucide-react';

// Definimos tipos para que nuestro código sea más seguro
export type ProblemColumn = { icon: LucideIcon; title: string; text: string };
export type FaqItem = { q: string; a: string };

export const pageContent = {
  hero: {
    headlineGradient: 'Conversations that Convert.',
    headlineWhite: '24/7. Zero Wait Time.',
    subheadline:
      'We build AI-powered chatbots and voicebots that capture leads, answer questions, and delight your customers—even while you sleep.',
    primaryCta: 'Book a Live Demo',
    secondaryCta: 'See How It Works',
  },
  socialProof: {
    headline: 'Trusted by industry leaders who choose to lead:',
    logos: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
  },
  problem: {
    headline: 'Does This Sound Familiar?',
    columns: [
      {
        icon: Users,
        title: 'Lost Leads After Hours',
        text: "Every unanswered query is a potential sale walking away to a competitor. Don't let your business hours limit your growth.",
      },
      {
        icon: MessageCircleWarning,
        title: 'Frustrated Customers',
        text: '82% of consumers expect an immediate response. Making them wait or search through endless FAQs leads to frustration and churn.',
      },
      {
        icon: BrainCircuit,
        title: 'Overwhelmed Staff',
        text: 'Your talented team spends hours on repetitive questions instead of focusing on high-value tasks that drive revenue.',
      },
    ] as ProblemColumn[],
  },
  solution: {
    headline: 'The Solution: An Intelligent Assistant That Never Sleeps.',
    paragraph:
      "At Bitzards, we don't just build bots. We design Conversational AI Assistants that understand user intent and speak your brand's language. They integrate seamlessly with your website, WhatsApp, or social media to deliver an exceptional, fully automated experience.",
    benefits: [
      '24/7 Instant Responses',
      'Smart Cost Savings',
      'Automated Lead Generation',
      'Consistent Brand Experience',
    ],
  },
  howItWorks: {
    headline: 'Our Process: Simple, Transparent, and Built for You.',
    steps: [
      {
        number: '01',
        title: 'Discovery & Strategy',
        description:
          'We start by understanding your goals and map out the perfect conversational flow for your customers.',
      },
      {
        number: '02',
        title: 'Build & Train',
        description:
          'Our experts build your custom AI assistant and train it to handle your specific business needs with precision.',
      },
      {
        number: '03',
        title: 'Launch & Optimize',
        description:
          'We deploy the assistant on your channels and continuously monitor its performance to ensure it gets smarter over time.',
      },
    ],
  },
  testimonial: {
    headline: "Don't Just Take Our Word For It.",
    quote:
      'Implementing the Bitzards chatbot was like hiring our best support agent, except this one works 24/7 without getting tired. We cut our first-response time by 95% and our after-hours sales increased by 15%.',
    author: 'Sarah Johnson, COO at ScaleUp Solutions',
    authorImage: '/placeholder-avatar.jpg',
  },
  finalCta: {
    headline: 'Ready to Unlock Your Growth Potential?',
    subheadline:
      'See how a Bitzards AI assistant can transform your customer experience and drive sales. No commitment, no technical jargon.',
    options: [
      {
        title: 'Book a 15-Minute Live Demo',
        description:
          "We'll show you exactly how a custom bot would work for your business.",
        cta: 'Yes, I Want My Live Demo',
        primary: true,
      },
      {
        title: 'Get a Free Conversational Audit',
        description:
          "We'll analyze your current channels and send you a report with key automation opportunities.",
        cta: 'Get My FREE Audit',
        primary: false,
      },
    ],
  },
  faq: {
    headline: 'Have Questions? We Have Answers.',
    items: [
      {
        q: 'How much does it cost?',
        a: "Our pricing is tailored to your specific needs and ROI. We offer packages for small businesses and custom enterprise solutions. Let's find the right fit for you during a free demo.",
      },
      {
        q: 'How long is the setup process?',
        a: 'A standard chatbot can be live on your site in as little as one week. More complex integrations may take longer, but we prioritize speed-to-value.',
      },
      {
        q: 'Do I need to have technical skills?',
        a: 'Not at all. We handle the entire build, integration, and training process. We provide you with a simple dashboard to view results, and we handle the rest.',
      },
      {
        q: 'What platforms do you integrate with?',
        a: 'We integrate with websites, mobile apps, WhatsApp, Facebook Messenger, Instagram, and more. We also connect to hundreds of CRMs and business tools.',
      },
    ] as FaqItem[],
  },
};
