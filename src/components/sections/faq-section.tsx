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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={`transition-transform duration-fast shrink-0 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
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
          <div key={index} className="border-t border-border last:border-b">
            <button
              className="flex items-center justify-between w-full py-5 text-left gap-8"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-label font-body-medium text-dark">
                {item.question}
              </span>
              <ChevronIcon open={openIndex === index} />
            </button>
            <div
              className="grid transition-all duration-normal ease-out"
              style={{
                gridTemplateRows: openIndex === index ? '1fr' : '0fr',
              }}
            >
              <div className="overflow-hidden">
                <p className="text-body text-copy-mid leading-[1.75] pb-6">
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
