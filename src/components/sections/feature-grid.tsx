import { Section } from './section'
import { Reveal } from '@/components/reveal'

interface FeatureGridItem {
  heading: string
  description: string
}

interface FeatureGridProps {
  eyebrow?: string
  heading?: React.ReactNode
  items: FeatureGridItem[]
}

export function FeatureGrid({ eyebrow, heading, items }: FeatureGridProps) {
  return (
    <Section>
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
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2">
          {items.map((item) => (
            <div key={item.heading} className="py-8 md:py-10 border-t border-border">
              <h3 className="font-heading text-lg text-dark mb-3 tracking-tight">
                {item.heading}
              </h3>
              <p className="text-body text-copy-mid leading-[1.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
