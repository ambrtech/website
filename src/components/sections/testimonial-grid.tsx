import { Section } from './section'
import { Reveal } from '@/components/reveal'

export interface TestimonialItem {
  quote: string
  name?: string
  role: string
  company: string
}

export interface TestimonialGridProps {
  eyebrow?: string
  heading?: string
  testimonials: TestimonialItem[]
}

export function TestimonialGrid({ eyebrow, heading, testimonials }: TestimonialGridProps) {
  return (
    <Section className="bg-surface-white">
      {(eyebrow || heading) && (
        <div className="max-w-xl mb-16 md:mb-20">
          <Reveal>
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5 eyebrow-hairline">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                {heading}
              </h2>
            )}
          </Reveal>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:gap-y-16">
        {testimonials.map((item, index) => (
          <Reveal key={`${item.company}-${index}`}>
            <blockquote className="flex flex-col h-full border-t border-border pt-8 md:pt-10">
              <p className="font-heading text-lg md:text-xl leading-[1.6] tracking-heading text-dark mb-10 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                {item.name && (
                  <p className="text-body font-body-medium text-dark">{item.name}</p>
                )}
                <p className="text-body-sm text-copy-mid mt-1">
                  {item.role}, <span className="text-copy-light">{item.company}</span>
                </p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
