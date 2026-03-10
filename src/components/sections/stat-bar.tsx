import { Reveal } from '@/components/reveal'

export interface StatItem {
  value: string
  label: string
  source?: string
}

export interface StatBarProps {
  heading?: string
  items: StatItem[]
}

export function StatBar({ heading, items }: StatBarProps) {
  return (
    <section className="py-10 md:py-14 px-container-mobile md:px-container bg-surface-alt border-y border-border">
      <div className="mx-auto max-w-site">
        {heading && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 eyebrow-hairline">
              {heading}
            </p>
          </Reveal>
        )}
        <div className={`grid grid-cols-1 gap-8 md:gap-0 ${
          items.length === 1 ? 'md:grid-cols-1' :
          items.length === 2 ? 'md:grid-cols-2' :
          'md:grid-cols-3'
        }`}>
          {items.map((stat, index) => (
            <Reveal key={stat.label}>
              <div className={`flex items-baseline gap-4 lg:gap-5 ${
                index !== 0 ? 'md:border-l md:border-border md:pl-6 lg:pl-10' : ''
              } ${index !== items.length - 1 ? 'md:pr-6 lg:pr-10' : ''}`}>
                <span className="font-heading text-title tracking-heading text-accent shrink-0">
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
      </div>
    </section>
  )
}
