import type { pageContent } from '../_content';

type ProblemContent = typeof pageContent.problem;

export const ProblemSection = ({ content }: { content: ProblemContent }) => (
  <section className="problem-section bg-light-blue py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-light">{content.headline}</h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.columns.map((col, index) => (
          <div
            key={index}
            className="problem-column bg-dark-blue p-8 rounded-xl"
          >
            <h3 className="text-2xl font-sora font-semibold text-accent-green">
              {col.title}
            </h3>
            <p className="mt-4 text-gray-300">{col.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
