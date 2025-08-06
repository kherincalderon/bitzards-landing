import Image from 'next/image';
import type { pageContent } from '../_content';

type TestimonialContent = typeof pageContent.testimonial;

export const TestimonialSection = ({
  content,
}: {
  content: TestimonialContent;
}) => (
  <section className="testimonial-section bg-dark-blue py-20">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-ligth text-center mb-12">
        {content.headline}
      </h2>
      <div className="testimonial-card bg-light-blue p-10 rounded-xl md:flex items-center gap-8 shadow-2xl shadow-light-blue/5">
        <Image
          src={content.authorImage}
          alt={content.author}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full mx-auto md:mx-0 flex-shrink-0 object-cover bg-dark-blue"
        />
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <p className="italic text-2xl text-primary-text">
            &quot;{content.quote}&quot;
          </p>
          <p className="mt-6 font-bold text-accent-green text-lg">
            — {content.author}
          </p>
        </div>
      </div>
    </div>
  </section>
);
