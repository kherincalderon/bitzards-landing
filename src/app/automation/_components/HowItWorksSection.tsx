import type { pageContent } from '../_content';

type HowItWorksContent = typeof pageContent.howItWorks;

export const HowItWorksSection = ({
  content,
}: {
  content: HowItWorksContent;
}) => (
  <section className="how-it-works-section bg-dark-blue py-20">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        {content.headline}
      </h2>
      <div className="relative flex flex-col md:flex-row justify-between gap-8">
        {content.steps.map((step, index) => (
          <div
            key={index}
            className="how-it-works-step bg-dark-blue p-8 rounded-xl flex-1 border border-light-blue/20"
          >
            <span className="text-4xl font-sora font-bold text-accent-green">
              {step.number}
            </span>
            <h3 className="text-2xl font-sora font-bold mt-4">{step.title}</h3>
            <p className="mt-2 text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
