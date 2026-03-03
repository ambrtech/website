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
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
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
        <div className="grid md:grid-cols-2 gap-x-16">
          {items.map((item) => (
            <div key={item.heading} className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
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
