import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Props for PullQuote component.
 */
export interface PullQuoteProps {
  quote: string
  name?: string
  role?: string
  company?: string
}

/**
 * PullQuote is a high-impact typographic element designed to break the 
 * visual rhythm of a page. It's modeled after luxury magazine editorial 
 * pull quotes—commanding and human.
 */
export function PullQuote({ quote, name, role, company }: PullQuoteProps) {
  return (
    <Section className="py-section-xl md:py-section-2xl bg-surface-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Subtle decorative "human touch" - a faint, elegant squiggly line */}
        <div className="absolute -top-16 left-0 text-accent/20">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 38C5 28 15 2 30 2C45 2 55 28 58 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <Reveal slow>
          <blockquote className="text-center">
            <p className="font-heading text-display leading-[1.1] tracking-heading text-dark mb-12 text-balance italic">
              &ldquo;{quote}&rdquo;
            </p>
            
            {(name || role || company) && (
              <footer className="flex flex-col items-center gap-2">
                <div className="w-12 h-px bg-accent mb-4" />
                {name && (
                  <cite className="not-italic text-title font-heading text-dark">
                    {name}
                  </cite>
                )}
                <div className="flex flex-wrap items-center justify-center gap-2 text-label text-copy-mid uppercase tracking-widest">
                  {role && <span>{role}</span>}
                  {role && company && <span className="text-accent">•</span>}
                  {company && <span>{company}</span>}
                </div>
              </footer>
            )}
          </blockquote>
        </Reveal>

        {/* Decorative detail: bottom counter-balance */}
        <div className="absolute -bottom-16 right-0 text-accent/20 rotate-180">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 38C5 28 15 2 30 2C45 2 55 28 58 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </Section>
  )
}
