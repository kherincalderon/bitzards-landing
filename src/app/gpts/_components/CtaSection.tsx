import Link from 'next/link';
import type { pageContent } from '../_content';

type CtaContent = typeof pageContent.finalCta;

export const CtaSection = ({ content }: { content: CtaContent }) => (
  <section className="bg-light-blue py-24 text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-6xl font-regular text-gradient-primary">
        {content.headline}
      </h2>
      <p className="mt-6 text-lg text-gray-300">{content.paragraph}</p>
      <Link
        href="/demo"
        className="mt-10 inline-block rounded-full bg-accent-green text-black font-sora font-semibold px-10 py-4 text-lg hover:bg-light-green transition-colors shadow-lg shadow-accent-green/20"
      >
        {content.cta}
      </Link>
      <p className="mt-4 text-sm text-gray-400">{content.microcopy}</p>
    </div>
  </section>
);
