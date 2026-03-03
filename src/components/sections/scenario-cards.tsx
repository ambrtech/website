import Link from 'next/link'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for scenario items.
 */
export interface ScenarioItem {
  category: string
  scenarioTitle: string
  description: string
  href: string
}

/**
 * Props for ScenarioCards component.
 */
export interface ScenarioCardsProps {
  heading?: string
  subtitle?: string
  items: ScenarioItem[]
}

/**
 * ScenarioCards presents simulation options with the energy of a theatre programme.
 * It's designed to be more inviting and interactive, signaling the "performance" 
 * aspect of the AI simulations.
 */
export function ScenarioCards({ heading, subtitle, items }: ScenarioCardsProps) {
  return (
    <Section className="bg-surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div className="max-w-2xl">
          {heading && (
            <Reveal>
              <h2 className="font-heading text-headline leading-tight tracking-heading text-dark mb-6">
                {heading}
              </h2>
            </Reveal>
          )}
          {subtitle && (
            <Reveal slow>
              <p className="text-body text-copy-mid max-w-xl leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
        
        {/* Editorial detail: "Programme" metadata feel */}
        <Reveal className="hidden md:block">
          <div className="text-right border-l border-border pl-8 py-2">
            <span className="block text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-faint mb-1">
              Active Sessions
            </span>
            <span className="font-heading text-section text-dark">
              12 Simulations
            </span>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {items.map((item, index) => (
          <Reveal key={item.scenarioTitle} slow className="h-full">
            <div className="group relative bg-surface-white border border-border p-8 md:p-10 flex flex-col h-full transition-all duration-slow hover:shadow-card hover:-translate-y-1">
              {/* Category indicator - theatre programme style */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent">
                  {item.category}
                </span>
              </div>

              <h3 className="font-heading text-title leading-[1.2] mb-6 text-dark text-balance">
                {item.scenarioTitle}
              </h3>
              
              <p className="text-body-sm text-copy-mid leading-relaxed mb-10">
                {item.description}
              </p>

              <div className="mt-auto">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center w-full py-4 border border-dark text-label font-body-medium uppercase tracking-eyebrow text-dark group-hover:bg-dark group-hover:text-surface-white transition-all duration-normal"
                >
                  Start Conversation
                </Link>
              </div>

              {/* Decorative detail: subtle index number */}
              <span className="absolute bottom-4 right-6 text-eyebrow-sm font-body-medium text-copy-faint tracking-widest opacity-40">
                SC-{String(index + 1).padStart(3, '0')}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
