import type { pageContent } from '../_content';

type SolutionContent = typeof pageContent.solution;

export const SolutionSection = ({ content }: { content: SolutionContent }) => (
  <section className="bg-light-blue py-20 text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-light text-gradient-primary">
        {content.headline}
      </h2>
      <p className="mt-6 text-lg text-gray-300">{content.paragraph}</p>
      <p className="mt-6 text-xl font-sora font-semibold border-t border-dark-blue pt-6">
        {content.keyPhrase}
      </p>
    </div>
  </section>
);
