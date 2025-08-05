import type { pageContent } from '../_content';

type ProblemContent = typeof pageContent.problem;

export const ProblemSection = ({ content }: { content: ProblemContent }) => (
  <section className="problem-section bg-dark-blue py-20">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{content.headline}</h2>
      <p className="mt-4 text-gray-400">{content.intro}</p>
      <ul className="mt-12 space-y-6 text-left">
        {content.checklist.map((item, index) => (
          <li
            key={index}
            className="problem-item flex items-start gap-4 text-lg bg-light-blue/10 p-4 rounded-lg"
          >
            <item.icon className="w-6 h-6 mt-1 text-accent-green flex-shrink-0" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
