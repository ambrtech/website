import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface StatItem {
  value: string
  label: string
  source?: string
}

export interface StatBarProps {
  items: StatItem[]
}

export function StatBar({ items }: StatBarProps) {
  return (
    <section className="py-10 md:py-14 px-container-mobile md:px-container bg-surface-alt border-y border-border">
      <div className={`mx-auto max-w-site grid grid-cols-1 gap-8 md:gap-0 ${
        items.length === 1 ? 'md:grid-cols-1' :
        items.length === 2 ? 'md:grid-cols-2' :
        'md:grid-cols-3'
      }`}>
        {items.map((stat, index) => (
          <Reveal key={stat.label}>
            <div className={`flex items-baseline gap-4 md:gap-5 ${
              index !== 0 ? 'md:border-l md:border-border md:pl-8 lg:pl-12' : ''
            }`}>
              <span className="font-heading text-title tracking-heading text-dark shrink-0">
                {stat.value}
              </span>
              <div>
                <p className="text-body-sm text-copy-mid leading-snug">
                  {stat.label}
                </p>
                {stat.source && (
                  <p className="text-eyebrow-sm uppercase tracking-eyebrow text-copy-faint mt-1">
                    {stat.source}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
