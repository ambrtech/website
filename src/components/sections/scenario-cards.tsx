import Link from 'next/link'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface ScenarioItem {
  category: string
  scenarioTitle: string
  description: string
  href: string
}

export interface ScenarioCardsProps {
  heading?: string
  subtitle?: string
  items: ScenarioItem[]
}

export function ScenarioCards({ heading, subtitle, items }: ScenarioCardsProps) {
  return (
    <Section>
      <div className="max-w-2xl mb-16 md:mb-20">
        {heading && (
          <Reveal>
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-6">
              {heading}
            </h2>
          </Reveal>
        )}
        {subtitle && (
          <Reveal>
            <p className="text-body text-copy-mid leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <Reveal key={item.scenarioTitle} className="h-full">
            <div className="group flex flex-col h-full bg-surface-white border border-border rounded-brand p-8 transition-all duration-normal hover:shadow-card hover:border-accent-soft">
              <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent mb-6">
                {item.category}
              </p>

              <h3 className="font-heading text-section leading-[1.2] tracking-heading mb-4 text-dark">
                {item.scenarioTitle}
              </h3>

              <p className="text-body-sm text-copy-mid leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-label font-body-medium text-dark group-hover:text-accent transition-colors duration-normal"
                >
                  Start Conversation
                  <span className="text-accent">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
