import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for individual items within the comparison grid.
 */
export interface ComparisonItem {
  /** The name of the approach or school of thought. */
  label: string
  /** A brief, opinionated description of the approach. */
  description: string
  /** If true, this item will be visually elevated as the recommended option. */
  highlighted?: boolean
  /** An optional small label above the main heading (e.g., "Traditional", "Scalable"). */
  tag?: string
}

/**
 * Props for the ComparisonLayout component.
 */
export interface ComparisonLayoutProps {
  /** Optional eyebrow text above the main heading. */
  eyebrow?: string
  /** The main section title. */
  heading: string
  /** Optional supporting text below the main heading. */
  subtitle?: string
  /** An array of approaches to compare. Ideally 3 or 4 items for the best layout. */
  items: ComparisonItem[]
}

/**
 * ComparisonLayout is an editorial-style section for comparing different approaches side-by-side.
 * It avoids the typical "feature grid with checkmarks" in favour of a magazine-style layout
 * with distinctive treatments for each option.
 */
export function ComparisonLayout({
  eyebrow,
  heading,
  subtitle,
  items,
}: ComparisonLayoutProps) {
  return (
    <Section className="bg-surface overflow-hidden">
      {/* Header section with constrained width for better readability */}
      <div className="max-w-3xl mb-20 md:mb-32">
        {eyebrow && (
          <Reveal>
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal slow>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-8 text-balance">
            {heading}
          </h2>
        </Reveal>
        {subtitle && (
          <Reveal slow>
            <p className="text-body text-copy-mid max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Grid container with staggered vertical alignment on desktop for an editorial feel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 md:gap-x-12 lg:gap-x-16">
        {items.map((item, index) => (
          <Reveal key={item.label} slow={item.highlighted} className="h-full">
            <div
              className={`group flex flex-col h-full relative ${
                index % 2 === 1 ? 'lg:translate-y-12' : ''
              }`}
            >
              {/* Editorial index: large, elegant, background-style numbering */}
              <div className="absolute -top-12 -left-6 font-heading text-[9rem] leading-none text-copy-faint/10 select-none pointer-events-none group-hover:text-accent/15 transition-colors duration-slow">
                {index + 1}
              </div>

              <div
                className={`flex flex-col h-full rounded-brand transition-all duration-slow ${
                  item.highlighted
                    ? 'bg-surface-white p-8 md:p-10 shadow-card ring-1 ring-border border-b-4 border-accent'
                    : 'bg-transparent py-2 md:py-6'
                }`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {item.tag && (
                    <span className={`inline-block text-eyebrow-sm font-body-medium tracking-eyebrow uppercase mb-6 ${
                      item.highlighted ? 'text-accent' : 'text-copy-light'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                  
                  <h3 className={`font-heading text-section leading-tight mb-6 text-balance ${
                    item.highlighted ? 'text-dark' : 'text-copy'
                  }`}>
                    {item.label}
                  </h3>
                  
                  <p className={`text-body leading-relaxed ${
                    item.highlighted ? 'text-copy-mid' : 'text-copy-light'
                  }`}>
                    {item.description}
                  </p>

                  {/* Visual device for the highlighted option */}
                  {item.highlighted && (
                    <div className="mt-auto pt-10 flex items-center gap-3">
                      <span className="w-8 h-px bg-accent/30" />
                      <span className="text-eyebrow-sm font-body-medium tracking-eyebrow uppercase text-accent">
                        Recommended
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      
      {/* Extra space at the bottom to account for the staggered items */}
      <div className="hidden lg:block h-24" />
    </Section>
  )
}
