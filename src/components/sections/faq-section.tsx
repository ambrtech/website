'use client'

import { useState } from 'react'
import { FaqJsonLd } from '@/components/json-ld'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  items: FaqItem[]
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <FaqJsonLd items={items} />
      <div className="mx-auto max-w-site max-w-[800px]">
        {items.map((item, index) => (
          <div key={index} className="border-t border-border last:border-b group">
            <button
              className="flex items-center justify-between w-full py-6 md:py-8 text-left gap-8 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none focus-visible:rounded-sm transition-colors duration-normal hover:text-accent"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-label font-heading tracking-heading text-dark group-hover:text-accent transition-colors duration-normal">
                {item.question}
              </span>
              <span className={`text-accent text-lg transition-transform duration-normal shrink-0 ${
                openIndex === index ? 'rotate-45' : ''
              }`}>
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-normal ease-out"
              style={{
                gridTemplateRows: openIndex === index ? '1fr' : '0fr',
              }}
            >
              <div className="overflow-hidden">
                <p className="text-body text-copy-mid leading-[1.75] pb-6 md:pb-8 pr-12">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
