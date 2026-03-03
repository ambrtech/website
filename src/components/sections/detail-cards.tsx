'use client'

import { useState } from 'react'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for detail items.
 */
export interface DetailItem {
  heading: string
  description: string
}

/**
 * Props for DetailCards component.
 */
export interface DetailCardsProps {
  eyebrow?: string
  heading?: string
  items: DetailItem[]
}

/**
 * DetailCards displays substantial information with an interactive 
 * "unfold" mechanic. It's designed to provide depth without cluttering 
 * the initial view.
 */
export function DetailCards({ eyebrow, heading, items }: DetailCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Section className="bg-surface">
      <div className="max-w-3xl mb-16 md:mb-24">
        {eyebrow && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
              {eyebrow}
            </p>
          </Reveal>
        )}
        {heading && (
          <Reveal slow>
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark">
              {heading}
            </h2>
          </Reveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index
          
          return (
            <Reveal key={item.heading} slow className="h-full">
              <div 
                className={`flex flex-col h-full bg-surface-white border transition-all duration-slow cursor-pointer group p-8 md:p-10 ${
                  isExpanded ? 'border-accent shadow-card' : 'border-border hover:border-accent-soft'
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between gap-6 mb-2">
                  <h3 className="font-heading text-title leading-tight text-dark group-hover:text-accent transition-colors duration-normal">
                    {item.heading}
                  </h3>
                  
                  {/* Subtle interaction indicator */}
                  <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-slow ${isExpanded ? 'rotate-180' : ''}`}>
                    <span className="absolute w-full h-px bg-copy-faint group-hover:bg-accent" />
                    <span className={`absolute w-px h-full bg-copy-faint group-hover:bg-accent transition-opacity duration-slow ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
                  </div>
                </div>

                {/* Transition container for smooth expansion */}
                <div 
                  className={`grid transition-all duration-slow ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-body text-copy-mid leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
