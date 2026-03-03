import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export interface BadgeItem {
  label: string
  description?: string
}

export interface TrustBadgesProps {
  badges: BadgeItem[]
  cta?: {
    label: string
    href: string
  }
}

export function TrustBadges({ badges, cta }: TrustBadgesProps) {
  return (
    <section className="py-8 md:py-12 px-container-mobile md:px-container border-y border-border">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className={`grid gap-6 md:gap-0 ${
              badges.length <= 3 ? 'grid-cols-3' :
              badges.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
              'grid-cols-2 md:grid-cols-5'
            }`}>
              {badges.map((badge, index) => (
                <div
                  key={badge.label}
                  className={`${
                    index !== 0 ? 'md:border-l md:border-border md:pl-6 lg:pl-8' : ''
                  }`}
                >
                  <p className="font-heading text-label tracking-heading text-dark">
                    {badge.label}
                  </p>
                  {badge.description && (
                    <p className="text-caption text-copy-light mt-0.5">
                      {badge.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {cta && (
              <Link
                href={cta.href}
                className="shrink-0 text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors duration-normal"
              >
                {cta.label} →
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
