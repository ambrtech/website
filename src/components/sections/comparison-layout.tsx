import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface ComparisonItem {
  label: string
  description: string
  highlighted?: boolean
  tag?: string
}

export interface ComparisonLayoutProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  items: ComparisonItem[]
}

export function ComparisonLayout({
  eyebrow,
  heading,
  subtitle,
  items,
}: ComparisonLayoutProps) {
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
        <Reveal>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-6">
            {heading}
          </h2>
        </Reveal>
        {subtitle && (
          <Reveal>
            <p className="text-body text-copy-mid leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {items.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col p-6 md:p-8 ${
                item.highlighted ? 'bg-surface-white' : 'bg-surface'
              }`}
            >
              {item.tag && (
                <span className={`text-eyebrow-sm font-body-medium uppercase tracking-eyebrow mb-4 ${
                  item.highlighted ? 'text-accent' : 'text-copy-faint'
                }`}>
                  {item.tag}
                </span>
              )}

              <h3 className={`font-heading text-section leading-[1.2] tracking-heading mb-4 ${
                item.highlighted ? 'text-dark' : 'text-copy'
              }`}>
                {item.label}
              </h3>

              <p className={`text-body-sm leading-relaxed ${
                item.highlighted ? 'text-copy-mid' : 'text-copy-light'
              }`}>
                {item.description}
              </p>

              {item.highlighted && (
                <div className="mt-auto pt-6">
                  <span className="inline-block w-8 h-0.5 bg-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
