import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for individual stat items.
 */
export interface StatItem {
  value: string
  label: string
  source?: string
}

/**
 * Props for StatBar component.
 */
export interface StatBarProps {
  items: StatItem[]
}

/**
 * StatBar is a compact, authoritative inline bar for displaying key metrics.
 * It's designed to sit between sections, acting as a credible punctuation mark.
 */
export function StatBar({ items }: StatBarProps) {
  return (
    <Section className="py-12 md:py-16 bg-surface-alt border-y border-border">
      <div className={`grid grid-cols-1 gap-12 md:gap-8 items-center ${
        items.length === 1 ? 'md:grid-cols-1' :
        items.length === 2 ? 'md:grid-cols-2' :
        'md:grid-cols-3'
      }`}>
        {items.map((stat, index) => (
          <Reveal 
            key={stat.label} 
            slow 
            className={`flex flex-col items-center text-center md:items-start md:text-left ${
              index !== 0 ? 'md:border-l md:border-border md:pl-12 lg:pl-16' : ''
            }`}
          >
            <div className="flex flex-col gap-3">
              <span className="font-heading text-stat leading-none tracking-tight text-dark">
                {stat.value}
              </span>
              <div className="max-w-[240px]">
                <p className="text-body font-body-medium text-copy-mid leading-snug mb-2">
                  {stat.label}
                </p>
                {stat.source && (
                  <p className="text-eyebrow-sm uppercase tracking-widest text-copy-faint">
                    Source: {stat.source}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
