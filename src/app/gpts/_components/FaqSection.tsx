'use client';

import { AccordionItem } from './AccordionItem';
import type { pageContent } from '../_content';

type FaqContent = typeof pageContent.faq;

export const FaqSection = ({ content }: { content: FaqContent }) => (
  <section className="bg-dark-blue py-20">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-light text-center mb-12">
        {content.headline}
      </h2>
      <div className="space-y-2">
        {content.items.map((item, index) => (
          <AccordionItem key={index} title={item.q}>
            <p>{item.a}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  </section>
);
