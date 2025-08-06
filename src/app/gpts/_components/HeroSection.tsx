import Link from 'next/link';
import { pageContent } from '../_content';
type HeroContent = typeof pageContent.hero;

export const HeroSection = ({ content }: { content: HeroContent }) => (
  <section className="bg-dark-blue py-32 text-center overflow-hidden">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="hero-h1 text-4xl md:text-7xl font-bold">
        {content.headline}
      </h1>
      <p className="hero-subheadline mt-6 text-lg md:text-xl text-gray-300">
        {content.subheadline}
      </p>
      <div className="hero-cta mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/demo"
          className="rounded-full bg-accent-green text-black font-sora font-semibold px-8 py-3 w-full sm:w-auto hover:bg-light-green transition-colors"
        >
          {content.primaryCta}
        </Link>
        <Link
          href="/case-studies"
          className="font-sora font-semibold hover:text-accent-green transition-colors"
        >
          {content.secondaryCta}
        </Link>
      </div>
    </div>
  </section>
);
