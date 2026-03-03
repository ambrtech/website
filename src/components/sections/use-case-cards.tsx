import Link from 'next/link'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for individual use case items.
 */
export interface UseCaseItem {
  heading: string
  description: string
  href: string
  ctaLabel: string
}

/**
 * Props for the UseCaseCards component.
 */
export interface UseCaseCardsProps {
  /** Optional eyebrow text. */
  eyebrow?: string
  /** Optional section heading. */
  heading?: string
  /** Array of 3-4 use case items. */
  items: UseCaseItem[]
}

/**
 * UseCaseCards displays a grid of categories with an editorial, menu-like feel.
 * It avoids app-like rounded corners and SaaS shadows in favour of sharp, 
 * sophisticated lines and tactile hover states.
 */
export function UseCaseCards({ eyebrow, heading, items }: UseCaseCardsProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border border-y border-border">
        {items.map((item) => (
          <Reveal key={item.heading} className="bg-surface-white h-full">
            <Link 
              href={item.href}
              className="group flex flex-col h-full p-8 md:p-12 hover:bg-surface transition-colors duration-normal relative overflow-hidden"
            >
              {/* Subtle visual texture or placeholder for image prompt */}
              <div className="mb-12 aspect-[4/5] bg-surface-alt relative overflow-hidden flex items-center justify-center p-6 border border-border/50">
                <span className="text-eyebrow-sm uppercase tracking-widest text-copy-faint text-center leading-relaxed">
                  [Image Prompt: A lomographic style, slightly overexposed, slightly lens flare style image of a professional person in deep thought during a quiet moment of reflection, warm natural light, film grain]
                </span>
                
                {/* Tactical hover line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-slow origin-left" />
              </div>

              <h3 className="font-heading text-title leading-tight mb-4 text-dark group-hover:text-accent transition-colors duration-normal">
                {item.heading}
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed mb-8">
                {item.description}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-label font-body-medium text-dark group-hover:gap-4 transition-all duration-normal">
                <span>{item.ctaLabel}</span>
                <span className="text-accent">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
