import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for testimonial items.
 */
export interface TestimonialItem {
  quote: string
  name?: string // Optional for anonymous testimonials
  role: string
  company: string
}

/**
 * Props for TestimonialGrid component.
 */
export interface TestimonialGridProps {
  eyebrow?: string
  heading?: string
  testimonials: TestimonialItem[]
}

/**
 * TestimonialGrid displays social proof with a typographically rich, 
 * asymmetrical layout. Inspired by book praise pages and Aesop's editorial style.
 */
export function TestimonialGrid({ eyebrow, heading, testimonials }: TestimonialGridProps) {
  return (
    <Section className="bg-surface-white">
      {(eyebrow || heading) && (
        <div className="max-w-xl mb-16 md:mb-24">
          <Reveal>
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-section leading-tight tracking-heading text-dark">
                {heading}
              </h2>
            )}
          </Reveal>
        </div>
      )}

      <div className="columns-1 md:columns-2 lg:columns-3 gap-12 lg:gap-16 space-y-12 lg:space-y-16">
        {testimonials.map((item, index) => (
          <Reveal 
            key={`${item.company}-${index}`} 
            className="break-inside-avoid"
            slow={index % 2 === 1}
          >
            <div className={`relative flex flex-col ${index % 4 === 1 ? 'pt-12' : ''}`}>
              {/* Decorative quote mark element - echoed from existing brand assets */}
              <span className="absolute -top-6 -left-4 font-heading text-[6rem] leading-none text-accent-whisper select-none pointer-events-none -z-10 opacity-50">
                &ldquo;
              </span>

              <blockquote className="relative z-10 mb-8">
                <p className="font-heading text-quote leading-[1.45] text-dark tracking-heading mb-8 text-balance italic">
                  {item.quote}
                </p>
                
                <footer className="mt-auto border-t border-border pt-6">
                  {item.name && (
                    <cite className="block not-italic text-label font-body-medium text-dark mb-1">
                      {item.name}
                    </cite>
                  )}
                  <span className="block text-body-sm text-copy-mid">
                    {item.role}, {item.company}
                  </span>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        ))}
      </div>
      
      {/* Asymmetrical "Squiggly" line for human touch */}
      <Reveal className="mt-24 flex justify-center">
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-20">
          <path d="M1 12C10 12 15 2 25 2C35 2 40 12 50 12C60 12 65 22 75 22C85 22 90 12 100 12C110 12 115 2 125 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Reveal>
    </Section>
  )
}
