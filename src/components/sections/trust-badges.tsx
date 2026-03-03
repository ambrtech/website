import Link from 'next/link'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

/**
 * Interface for individual trust badge items.
 */
export interface BadgeItem {
  label: string
  description?: string
}

/**
 * Props for TrustBadges component.
 */
export interface TrustBadgesProps {
  badges: BadgeItem[]
  cta?: {
    label: string
    href: string
  }
}

/**
 * TrustBadges displays certification and compliance information with 
 * institutional authority. It prioritises typography and clear information 
 * over flashy icons.
 */
export function TrustBadges({ badges, cta }: TrustBadgesProps) {
  return (
    <Section className="py-12 md:py-20 bg-surface border-b border-border">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        <div className="flex flex-wrap gap-x-12 gap-y-10 items-start">
          {badges.map((badge) => (
            <Reveal key={badge.label}>
              <div className="flex flex-col max-w-[200px]">
                <h4 className="font-heading text-label text-dark mb-2 tracking-heading">
                  {badge.label}
                </h4>
                {badge.description && (
                  <p className="text-caption text-copy-light leading-relaxed uppercase tracking-widest">
                    {badge.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {cta && (
          <Reveal>
            <Link 
              href={cta.href}
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark border-b border-dark/20 hover:border-accent hover:text-accent transition-all duration-normal pb-1"
            >
              <span>{cta.label}</span>
              <span className="text-accent">→</span>
            </Link>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
