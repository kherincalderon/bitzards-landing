import type { pageContent } from '../_content';

type HowItWorksContent = typeof pageContent.howItWorks;

export const HowItWorksSection = ({
  content,
}: {
  content: HowItWorksContent;
}) => (
  <section
    id="how-it-works"
    className="how-it-works-section bg-light-blue py-20"
  >
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-light text-center mb-24">
        {content.headline}
      </h2>
      <div className="relative">
        {content.steps.map((item, index) => (
          <div
            key={index}
            className="how-it-works-step grid grid-cols-12 gap-6 items-start mb-12 last:mb-0"
          >
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="z-10 bg-light-blue p-1 rounded-full">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-dark-green rounded-full font-bold text-xl font-sora">
                  {item.number}
                </div>
              </div>
              {index < content.steps.length - 1 && (
                <div className="w-0.5 h-32 bg-gray-700 mt-2"></div>
              )}
            </div>
            <div className="col-span-10 md:col-span-11 -mt-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-accent-green">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
