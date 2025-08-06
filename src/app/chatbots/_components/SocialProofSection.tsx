import type { pageContent } from '../_content';

type SocialProofContent = typeof pageContent.socialProof;

export const SocialProofSection = ({
  content,
}: {
  content: SocialProofContent;
}) => (
  <section className="social-proof-section bg-dark-blue pb-20">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-center text-gray-400 font-sora">
        {content.headline}
      </h2>
      <div className="mt-8 flex justify-center items-center gap-x-12 gap-y-6 flex-wrap">
        {content.logos.map((logo, index) => (
          <div
            key={index}
            className="logo-item h-8 w-32 bg-gray-700/50 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  </section>
);
