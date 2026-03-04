'use client'

import { useState } from 'react'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface DetailItem {
  heading: string
  description: string
}

export interface DetailCardsProps {
  eyebrow?: string
  heading?: string
  items: DetailItem[]
}

export function DetailCards({ eyebrow, heading, items }: DetailCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Section>
      <div className="max-w-3xl mb-16 md:mb-20">
        {eyebrow && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              {eyebrow}
            </p>
          </Reveal>
        )}
        {heading && (
          <Reveal>
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark">
              {heading}
            </h2>
          </Reveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index

          return (
            <Reveal key={item.heading} className="h-full">
              <button
                type="button"
                className={`flex flex-col h-full w-full text-left border p-6 md:p-8 transition-all duration-normal cursor-pointer ${
                  isExpanded
                    ? 'bg-surface-white border-accent-soft shadow-card'
                    : 'bg-surface-white border-border hover:border-accent-soft/50'
                }`}
                onClick={() => toggle(index)}
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between gap-4 w-full">
                  <h3 className="font-heading text-label tracking-heading text-dark">
                    {item.heading}
                  </h3>
                  <span className={`text-copy-faint text-body-sm transition-transform duration-normal shrink-0 ${
                    isExpanded ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>

                <div
                  className="grid transition-all duration-normal"
                  style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="text-body-sm text-copy-mid leading-relaxed pt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
