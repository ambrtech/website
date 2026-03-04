import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface StepItem {
  title: string
  description: string
}

export interface NumberedStepsProps {
  eyebrow?: string
  heading?: string
  items: StepItem[]
}

export function NumberedSteps({ eyebrow, heading, items }: NumberedStepsProps) {
  return (
    <Section>
      <div className="max-w-3xl mb-12 md:mb-16">
        {eyebrow && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              {eyebrow}
            </p>
          </Reveal>
        )}
        {heading && (
          <Reveal>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
              {heading}
            </h2>
          </Reveal>
        )}
      </div>

      <Reveal>
        <div className={`grid grid-cols-1 gap-8 md:gap-0 ${
          items.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
        }`}>
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                index !== 0 ? 'md:border-l md:border-border md:pl-8 lg:pl-12' : ''
              } ${index !== items.length - 1 ? 'md:pr-8 lg:pr-12' : ''}`}
            >
              <span className="font-heading text-title tracking-heading text-accent-soft leading-none mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                {item.title}
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
