import Link from 'next/link';
import type { pageContent } from '../_content';

type CtaContent = typeof pageContent.finalCta;

export const CtaSection = ({ content }: { content: CtaContent }) => (
  <section className="bg-light-blue py-24">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-light">{content.headline}</h2>
      <p className="mt-4 text-lg text-gray-300">{content.subheadline}</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {content.options.map((box, index) => (
          <div
            key={index}
            className={`bg-dark-blue p-8 rounded-2xl border-2 transition-transform hover:scale-[1.03] ${
              box.primary ? 'border-accent-green' : 'border-dark-blue'
            }`}
          >
            <h3 className="text-2xl font-bold">{box.title}</h3>
            <p className="mt-2 text-gray-300">{box.description}</p>
            <Link
              href="#"
              className={`mt-6 inline-block rounded-full px-8 py-3 font-sora font-semibold transition-colors ${
                box.primary
                  ? 'bg-accent-green text-black hover:bg-light-green'
                  : 'bg-light-blue text-primary-text hover:bg-opacity-80'
              }`}
            >
              {box.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
