'use client';

import { AccordionItem } from './AccordionItem';
import type { pageContent } from '../_content';

type UseCasesContent = typeof pageContent.useCases;

export const UseCasesSection = ({ content }: { content: UseCasesContent }) => (
  <section id="use-cases" className="bg-light-blue py-20">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        {content.headline}
      </h2>
      <div className="bg-dark-blue rounded-xl p-6">
        {content.tabs.map((tab, index) => (
          <AccordionItem key={index} title={tab.name}>
            <ul className="space-y-2 list-disc list-inside text-gray-300 pl-4">
              {tab.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
    </div>
  </section>
);
