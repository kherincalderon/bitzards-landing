import type { pageContent } from '../_content';

type SolutionContent = typeof pageContent.solution;

export const SolutionSection = ({ content }: { content: SolutionContent }) => (
  <section className="bg-dark-blue py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-gradient-primary">
        {content.headline}
      </h2>
      <p className="mt-6 text-lg text-gray-300">{content.paragraph}</p>
      <div className="mt-8 h-64 bg-light-blue/20 rounded-lg animate-pulse flex items-center justify-center text-gray-500">
        Animated Diagram Placeholder
      </div>
    </div>
  </section>
);
