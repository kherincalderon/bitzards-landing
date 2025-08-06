// app/services/custom-gpts/_content/index.ts
import {
  Bot,
  BrainCircuit,
  Rocket,
  CheckCircle2,
  DraftingCompass,
  Server,
  Code,
  LucideIcon,
} from 'lucide-react';

// Tipos para nuestro objeto de contenido
export type Benefit = { icon: LucideIcon; title: string; text: string };
export type Step = { icon: LucideIcon; title: string; description: string };
export type FaqItem = { q: string; a: string };

export const pageContent = {
  hero: {
    headline: 'Your Team, Amplified by a 24/7 AI Expert.',
    subheadline:
      "We build artificial intelligence assistants trained exclusively on your company's data. For marketing agencies, e-commerce, and real estate firms seeking a true competitive edge.",
    primaryCta: '🚀 Request a Free Demo',
    secondaryCta: '✨ See Case Studies',
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
    ] as Benefit[],
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
  },
  howItWorks: {
    headline: 'Your Expert GPT in 3 Simple Steps.',
    steps: [
      {
        icon: DraftingCompass,
        title: 'Discovery',
        description:
          'We meet to understand your goals and analyze your data sources (website, documents, etc.).',
      },
      {
        icon: Code,
        title: 'Development & Training',
        description:
          'We build and customize your GPT, training it to become a true expert on your business.',
      },
      {
        icon: Server,
        title: 'Implementation & Integration',
        description:
          'We integrate it into your platforms (website, Slack, WhatsApp) and provide ongoing support.',
      },
    ] as Step[],
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
    ] as FaqItem[],
  },
};
