import { Section } from './section'
import { Reveal } from '@/components/reveal'

interface StrategyOutcomesItem {
  heading: string
  description: string
}

interface StrategyOutcomesProps {
  eyebrow?: string
  heading?: React.ReactNode
  items: StrategyOutcomesItem[]
  className?: string
}

export function StrategyOutcomes({ eyebrow, heading, items, className }: StrategyOutcomesProps) {
  return (
    <Section className={className}>
      <Reveal>
        {(eyebrow || heading) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
                {heading}
              </h2>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item) => (
            <div key={item.heading} className="border-t border-border pt-6">
              <h3 className="font-heading text-label tracking-heading text-dark mb-2">
                {item.heading}
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
