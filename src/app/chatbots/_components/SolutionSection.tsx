import { CheckCircle2 } from 'lucide-react';
import type { pageContent } from '../_content';

type SolutionContent = typeof pageContent.solution;

export const SolutionSection = ({ content }: { content: SolutionContent }) => (
  <section className="bg-dark-blue py-20">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold text-gradient-primary">
          {content.headline}
        </h2>
        <p className="mt-6 text-lg text-gray-300">{content.paragraph}</p>
        <ul className="solution-section-benefits mt-8 space-y-4">
          {content.benefits.map((item, index) => (
            <li
              key={index}
              className="benefit-item flex items-center gap-3 text-lg"
            >
              <CheckCircle2 className="text-accent-green w-6 h-6 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-96 bg-light-blue/20 rounded-lg animate-pulse flex items-center justify-center text-gray-500">
        Visual Mockup Placeholder
      </div>
    </div>
  </section>
);
