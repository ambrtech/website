import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for individual step items.
 */
export interface StepItem {
  title: string
  description: string
}

/**
 * Props for NumberedSteps component.
 */
export interface NumberedStepsProps {
  eyebrow?: string
  heading?: string
  items: StepItem[]
}

/**
 * NumberedSteps displays a sequential process with an editorial feel.
 * It uses typography to signal order, avoiding the common SaaS "circles and lines" 
 * diagrammatic approach.
 */
export function NumberedSteps({ eyebrow, heading, items }: NumberedStepsProps) {
  return (
    <Section className="bg-surface-white">
      <div className="max-w-3xl mb-16 md:mb-24">
        {eyebrow && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
              {eyebrow}
            </p>
          </Reveal>
        )}
        {heading && (
          <Reveal slow>
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark">
              {heading}
            </h2>
          </Reveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16">
        {items.map((item, index) => (
          <Reveal key={item.title} slow className="h-full">
            <div className="flex flex-col h-full group">
              {/* Large, elegant typographic order indicator */}
              <div className="font-heading text-stat leading-none text-accent-soft/30 mb-8 select-none group-hover:text-accent-soft/60 transition-colors duration-slow">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="border-t border-border pt-8 flex flex-col h-full">
                <h3 className="font-heading text-title leading-tight mb-6 text-dark">
                  {item.title}
                </h3>
                <p className="text-body-sm text-copy-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
