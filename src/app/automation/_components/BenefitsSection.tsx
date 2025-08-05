import type { pageContent } from '../_content';

type BenefitsContent = typeof pageContent.benefits;

export const BenefitsSection = ({ content }: { content: BenefitsContent }) => (
  <section className="benefits-section bg-dark-blue py-20">
    <div className="max-w-[1440px] mx-auto px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
        {content.headline}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((item, index) => (
          <div
            key={index}
            className="benefit-card bg-light-blue p-8 rounded-xl text-center flex flex-col items-center"
          >
            <item.icon size={40} className="text-accent-green" />
            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
