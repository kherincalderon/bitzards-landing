// app/services/ai-automation/_content/index.ts
import {
  LucideIcon,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Banknote,
  BrainCircuit,
} from 'lucide-react';

// (Definimos tipos para mayor seguridad y autocompletado)
type Benefit = { icon: LucideIcon; title: string; description: string };
type FaqItem = { q: string; a: string };
// ... puedes añadir más tipos según necesites

export const pageContent = {
  hero: {
    headline: 'Trade Repetitive Tasks for Exponential Growth.',
    subheadline:
      'At Bitzards, we transform your manual processes into intelligent, automated systems that work for you 24/7. Free your team, optimize your costs, and scale without limits.',
    primaryCta: 'Schedule a Demo',
    secondaryCta: 'See Use Cases',
  },
  problem: {
    headline: 'Is your team spending more time on operations than innovation?',
    intro:
      "If any of these sound familiar, you're losing efficiency and revenue every day.",
    checklist: [
      {
        text: 'Countless hours lost to copying and pasting data, sending manual emails, and updating spreadsheets.',
        icon: CheckCircle2,
      },
      {
        text: 'Costly human errors that damage client relationships and your bottom line.',
        icon: XCircle,
      },
      {
        text: 'Slow response times to customers and leads, resulting in missed opportunities.',
        icon: Clock,
      },
      {
        text: 'Struggling to scale because growth depends entirely on hiring more people for manual work.',
        icon: TrendingUp,
      },
    ],
  },
  solution: {
    headline: "It's time to put Artificial Intelligence to work for you.",
    paragraph:
      "At Bitzards, we don't just install software; we architect your operational future. We build a custom digital ecosystem where AI handles the tedious work, allowing your human talent to focus on what truly matters: strategy, creativity, and growing your business.",
    keyPhrase:
      'We are your technology partner on the path to hyper-efficiency.',
  },
  howItWorks: {
    headline: 'Your Path to Efficiency in 3 Simple Steps.',
    steps: [
      {
        number: '1',
        title: 'Discovery & Strategy',
        description:
          'We analyze your current workflows to identify bottlenecks and the greatest opportunities for automation. We deliver a clear action plan with your expected ROI.',
      },
      {
        number: '2',
        title: 'Custom Implementation',
        description:
          'Our Bitzards team designs and builds your automated systems, connecting the tools you already use (CRM, ERP, email, etc.) or implementing new, powerful solutions.',
      },
      {
        number: '3',
        title: 'Optimization & Support',
        description:
          'We launch, monitor, and continuously optimize your workflows to ensure peak performance. We stay with you as a long-term partner, evolving your automations as your business grows.',
      },
    ],
  },
  useCases: {
    headline: 'Automate the Core Areas of Your Business.',
    tabs: [
      {
        name: 'Sales & CRM',
        items: [
          'Automated lead qualification & scoring.',
          'Personalized prospect nurturing via email sequences.',
          'Automatic activity logging in your CRM.',
          'Real-time sales performance dashboards.',
        ],
      },
      {
        name: 'Marketing',
        items: [
          'Advanced audience segmentation.',
          'Personalize campaigns at scale.',
          'Automated social media scheduling.',
          'Unified campaign performance reporting.',
        ],
      },
      {
        name: 'Operations & Finance',
        items: [
          'Automated invoice and purchase order processing.',
          'Smart inventory management and alerts.',
          'Automated new employee onboarding workflows.',
          'Intelligent bank reconciliation.',
        ],
      },
      {
        name: 'Customer Support',
        items: [
          'AI-powered chatbots for instant, 24/7 answers.',
          'Automatic support ticket creation and routing.',
          'Automated post-interaction satisfaction surveys.',
          'FAQ handling with zero human intervention.',
        ],
      },
    ],
  },
  benefits: {
    headline: "We don't just automate processes. We transform businesses.",
    items: [
      {
        icon: Clock,
        title: 'Save Hundreds of Hours',
        description:
          "Free up to 40% of your team's time, allowing them to focus on high-value, strategic work.",
      },
      {
        icon: TrendingUp,
        title: 'Scale Without Limits',
        description:
          'Grow your operations without proportionally increasing your overhead or headcount.',
      },
      {
        icon: Banknote,
        title: 'Reduce Operational Costs',
        description:
          'Minimize expensive manual errors and optimize resource allocation for a greater ROI.',
      },
      {
        icon: BrainCircuit,
        title: 'Make Data-Driven Decisions',
        description:
          'Get accurate, real-time insights to make smarter, more strategic business decisions.',
      },
    ] as Benefit[],
  },
  socialProof: {
    headline: 'Companies Already Operating in the Future with Bitzards.',
    testimonial: {
      quote:
        "Working with Bitzards has been a game-changer. We've cut our customer response time by 80%, and our sales team now focuses on closing deals, not data entry. They have been a crucial strategic partner in our growth.",
      author: 'Jane Doe, CEO of ExampleCorp',
    },
    logosTitle: 'Trusted by businesses that choose to lead:',
  },
  finalCta: {
    headline: 'Ready to stop operating and start directing?',
    subheadline:
      'Choose the path that best fits your needs. Our team is ready to help.',
    boxes: [
      {
        title: 'Free Automation Audit',
        bestFor:
          "Businesses that know they need to improve but aren't sure where to start.",
        description:
          'An expert analysis of your current processes and a report detailing the top 3 automation opportunities with the highest ROI for your business. No cost, no obligation.',
        cta: 'Claim My FREE Audit',
      },
      {
        title: 'Schedule a Live Demo',
        bestFor:
          'Teams that have a specific challenge in mind and want to see our technology in action.',
        description:
          "A live, one-on-one session where we'll show you exactly how Bitzards can solve your specific problems with custom-built automations.",
        cta: 'Schedule a Custom Demo',
      },
    ],
  },
  faq: {
    headline: 'Answering Your Questions',
    items: [
      {
        q: 'How much does automation service cost?',
        a: "It's entirely based on project complexity and the value it delivers. We start with a free audit to provide a custom quote focused on your ROI. Our goal is for the solution to pay for itself through the savings it generates.",
      },
      {
        q: 'How long until I see results?',
        a: 'Simple automations can be live and delivering value within days. More comprehensive projects may take a few weeks, but you will begin to see efficiency gains from the moment we start.',
      },
      {
        q: 'Do I or my team need to be technical?',
        a: "Not at all. We handle all the technical complexity. We are your 'Bitzards'; you just get to enjoy the magic of a seamlessly run operation.",
      },
      {
        q: 'Does this integrate with my current software?',
        a: 'Absolutely. Our specialty is connecting the tools you already know and love (like Slack, Google Workspace, your CRM, etc.) to create a unified and frictionless workflow.',
      },
    ] as FaqItem[],
  },
};
