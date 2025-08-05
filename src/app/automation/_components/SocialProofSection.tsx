import type { pageContent } from '../_content';

type SocialProofContent = typeof pageContent.socialProof;

export const SocialProofSection = ({
  content,
}: {
  content: SocialProofContent;
}) => (
  <section className="bg-light-blue py-20">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{content.headline}</h2>
      <div className="mt-12 bg-dark-blue p-10 rounded-xl shadow-lg">
        <p className="italic text-2xl text-gray-300">
          &ldquo;{content.testimonial.quote}&rdquo;
        </p>
        <p className="mt-6 font-bold text-primary-text text-lg">
          — {content.testimonial.author}
        </p>
      </div>
      <h3 className="mt-20 text-xl font-sora text-gray-400">
        {content.logosTitle}
      </h3>
      <div className="mt-8 flex justify-center items-center gap-12 grayscale opacity-50">
        <span>Logo Placeholder</span>
        <span>Logo Placeholder</span>
        <span>Logo Placeholder</span>
      </div>
    </div>
  </section>
);
