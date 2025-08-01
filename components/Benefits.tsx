// components/Benefits.tsx

import {
  CircleDollarSign,
  BotMessageSquare,
  Clock,
  TrendingUp,
  type LucideProps,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

const benefitsData: {
  Icon: IconComponent;
  title: string;
  metric: string;
  description: string;
}[] = [
  {
    Icon: CircleDollarSign,
    title: 'Cost Savings',
    metric: 'Up to 19% in Cost Reduction',
    description:
      'Improve profitability by eliminating repetitive tasks and lowering operational costs through smart AI Automations.',
  },
  {
    Icon: BotMessageSquare,
    title: 'Deflection Rate',
    metric: 'Up to 60% of Queries Handled by AI',
    description:
      'Free your team and increase efficiency with conversational chatbots that resolve customer issues instantly — no human needed.',
  },
  {
    Icon: Clock,
    title: 'Time Saved',
    metric: 'Save 50% of Content Production Time',
    description:
      'Generate blogs, ads, and FAQs in minutes with Custom GPTs tailored to your brand and voice.',
  },
  {
    Icon: TrendingUp,
    title: 'Conversion Rate',
    metric: 'Boost Conversions by Up to 50%',
    description:
      'Drive more sales and engagement with AI-powered automation and GPTs that respond, recommend, and convert — faster than ever.',
  },
];

export const Benefits = () => {
  return (
    // 1. Fondo de la sección: 'light-blue'
    <section id="benefits" className="bg-light-blue py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          The ROI of Intelligence
        </h2>

        {/* El grid ya es responsive: 1 columna en móvil, 2 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitsData.map(({ Icon, title, metric, description }, index) => (
            // 2. Fondo de las tarjetas: 'dark-blue'
            <div key={index} className="bg-dark-blue p-8 rounded-2xl">
              <Icon size={32} className="text-accent-green mb-4" />
              <h3 className="text-xl font-regular">{title}</h3>
              {/* 3. Gradiente aplicado a la métrica */}
              <p className="text-gradient-primary font-light mt-1 font-sora">
                {metric}
              </p>
              <p className="text-gray-300 mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
