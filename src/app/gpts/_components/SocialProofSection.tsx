import Image from 'next/image';
import type { pageContent } from '../_content';

type SocialProofContent = typeof pageContent.socialProof;

export const SocialProofSection = ({
  content,
}: {
  content: SocialProofContent;
}) => (
  <section className="bg-light-blue py-20">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-light text-center">
        {content.headline}
      </h2>
      <div className="mt-12 bg-dark-blue p-10 rounded-xl md:flex items-center gap-8 shadow-2xl shadow-dark-blue/20">
        <Image
          src={content.testimonial.photo}
          alt={content.testimonial.author}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto md:mx-0 flex-shrink-0 object-cover bg-light-blue"
        />
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="italic text-xl text-primary-text">
            &quot;{content.testimonial.quote}&quot;
          </p>
          <p className="mt-6 font-bold text-gray-300 text-base">
            {content.testimonial.author},{' '}
            <span className="text-accent-green font-semibold">
              {content.testimonial.company}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);
