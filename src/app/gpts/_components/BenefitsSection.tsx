import type { pageContent } from '../_content';

type BenefitsContent = typeof pageContent.benefits;

export const BenefitsSection = ({ content }: { content: BenefitsContent }) => (
  <section className="benefits-section bg-light-blue py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
        {content.headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {content.items.map((item, index) => (
          <div key={index} className="benefit-item flex items-start gap-6">
            <item.icon className="w-10 h-10 text-accent-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-sora font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
