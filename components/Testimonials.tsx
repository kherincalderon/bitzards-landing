// components/Testimonials.tsx
'use client'; // Necesario para la animación con hooks

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote:
      "Bitzards automated our follow-ups and lead sorting. What used to take hours now runs in the background. It's like having a second team working 24/7.",
    author: 'Sofia R.',
    rating: 5,
  },
  {
    quote:
      'I was skeptical about chatbots — until Bitzards built one that sounded just like me. It handles 80% of inquiries, and my close rate has never been better.',
    author: 'Javier M.',
    rating: 5,
  },
  {
    quote:
      "We got our custom GPT trained on all our product knowledge. It now powers our support and internal team — it's fast, accurate, and shockingly helpful.",
    author: 'Javier M.',
    rating: 5,
  },
  {
    quote:
      'The lead sorting automation is a game-changer. We can finally focus on closing deals instead of organizing spreadsheets. Our response time has improved drastically.',
    author: 'Elena P.',
    rating: 5,
  },
  {
    quote:
      'Our custom internal GPT has saved us countless hours. New hires get up to speed in days, not weeks, because they have an expert system to ask any question.',
    author: 'Carlos G.',
    rating: 5,
  },
  {
    quote:
      'The AI chatbot handles all the initial customer questions, freeing up my team to tackle the complex issues. Customer satisfaction is way up.',
    author: 'Ana B.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className="text-accent-green"
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray('.testimonial-card');
    gsap.set(cards, { autoAlpha: 0, y: 50 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15, // Anima las tarjetas una tras otra
          ease: 'power2.out',
        });
      },
      once: true, // La animación solo ocurre una vez
    });
  }, []);

  return (
    // 1. Fondo de la sección: 'light-blue'
    <section ref={sectionRef} id="case-studies" className="bg-light-blue py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* 2. Título de la sección con gradiente */}
          <h2 className="text-3xl md:text-4xl font-light text-gradient-primary">
            What Our Clients Say About Bitzards
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Real stories from real businesses — saving time, scaling faster, and
            transforming how they work with AI.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            // 3. Fondo de las tarjetas: 'dark-blue'
            <div
              key={index}
              className="testimonial-card bg-dark-blue p-8 rounded-2xl flex flex-col h-full"
            >
              <Quote size={40} className="text-gray-600" />
              <p className="mt-4 text-gray-300 flex-grow">
                “{testimonial.quote}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-primary-text">
                  — {testimonial.author}
                </p>
                <div className="mt-2">
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
