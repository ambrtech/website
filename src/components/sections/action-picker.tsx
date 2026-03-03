import Link from 'next/link'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for action items.
 */
export interface ActionItem {
  heading: string
  description: string
  href: string
  ctaLabel: string
}

/**
 * Props for ActionPicker component.
 */
export interface ActionPickerProps {
  heading?: string
  subtitle?: string
  items: [ActionItem, ActionItem, ActionItem] // Strictly 3 items
}

/**
 * ActionPicker presents three equally weighted paths for engagement.
 * Designed to feel like a concierge service—low pressure, high service.
 */
export function ActionPicker({ heading, subtitle, items }: ActionPickerProps) {
  return (
    <Section className="bg-surface-white">
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
        {heading && (
          <Reveal>
            <h2 className="font-heading text-headline leading-tight tracking-heading text-dark mb-6">
              {heading}
            </h2>
          </Reveal>
        )}
        {subtitle && (
          <Reveal slow>
            <p className="text-body text-copy-mid max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-border">
        {items.map((item, index) => (
          <Reveal 
            key={item.heading} 
            slow={index === 1}
            className={`h-full ${index !== 0 ? 'border-t md:border-t-0 md:border-l border-border' : ''}`}
          >
            <Link 
              href={item.href}
              className="group flex flex-col h-full p-10 md:p-14 hover:bg-surface transition-colors duration-normal text-center"
            >
              <h3 className="font-heading text-title leading-tight mb-6 text-dark group-hover:text-accent transition-colors duration-normal">
                {item.heading}
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed mb-10">
                {item.description}
              </p>
              
              <div className="mt-auto inline-flex items-center justify-center gap-3 text-label font-body-medium uppercase tracking-eyebrow text-dark group-hover:text-accent transition-all duration-normal">
                <span>{item.ctaLabel}</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-normal">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
