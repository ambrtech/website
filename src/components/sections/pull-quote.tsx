import { Reveal } from '@/components/reveal'

export interface PullQuoteProps {
  quote: string
  name?: string
  role?: string
  company?: string
}

export function PullQuote({ quote, name, role, company }: PullQuoteProps) {
  return (
    <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container">
      <div className="mx-auto max-w-[900px]">
        <Reveal slow>
          <blockquote className="relative">
            <span className="absolute -top-6 -left-3 md:-left-8 font-heading text-quote-mark leading-none text-accent/10 select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="font-heading text-section md:text-title leading-[1.3] tracking-heading text-dark italic">
              &ldquo;{quote}&rdquo;
            </p>
            {(name || role || company) && (
              <footer className="mt-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-soft" />
                <div className="text-body-sm text-copy-mid">
                  {name && <span className="font-body-medium text-dark">{name}</span>}
                  {name && (role || company) && <span> — </span>}
                  {role}{role && company && ', '}{company}
                </div>
              </footer>
            )}
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
