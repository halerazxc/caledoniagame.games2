'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <h2 className="font-[var(--font-heading)] text-2xl text-[var(--gold)] mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="card-retro overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-[var(--text-primary)] text-sm pr-4">{item.question}</span>
              <svg
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-[var(--gold)] transition-transform duration-300',
                  openIndex === i && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                openIndex === i ? 'max-h-96 pb-4' : 'max-h-0'
              )}
            >
              <p className="px-5 text-sm text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
