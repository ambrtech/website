import { Section } from './section'
import { Reveal } from '@/components/reveal'

interface StatStackItem {
  value: string
  label: string
}

interface StatStackProps {
  heading: React.ReactNode
  items: StatStackItem[]
}

export function StatStack({ heading, items }: StatStackProps) {
  return (
    <Section className="border-y border-border">
      <Reveal>
        <div className="grid md:grid-cols-[0.8fr_1fr] gap-10 md:gap-20 items-start">
          <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
            {heading}
          </h2>
          <div>
            {items.map((stat) => (
              <div
                key={stat.value}
                className="border-t border-border py-10 first:pt-0 first:border-t-0 md:first:pt-10 md:first:border-t"
              >
                <p className="font-heading text-title tracking-tight text-dark leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-body text-copy-mid leading-relaxed max-w-[480px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
