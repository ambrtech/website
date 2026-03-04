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
  const badgeGridClasses =
    badges.length <= 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : badges.length === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'

  return (
    <section className="py-8 md:py-12 px-container-mobile md:px-container border-y border-border overflow-x-clip">
      <div className="mx-auto w-full max-w-site overflow-x-clip">
        <Reveal className="min-w-0">
          <div className="grid min-w-0 gap-8 2xl:grid-cols-[minmax(0,1fr)_auto] 2xl:items-center">
            <div className={`min-w-0 grid w-full gap-6 md:gap-0 ${badgeGridClasses}`}>
              {badges.map((badge, index) => (
                <div
                  key={badge.label}
                  className={`${
                    index !== 0 ? 'lg:border-l lg:border-border lg:pl-6 xl:pl-8' : ''
                  }`}
                >
                  <p className="font-heading text-label tracking-heading text-dark break-words [overflow-wrap:anywhere]">
                    {badge.label}
                  </p>
                  {badge.description && (
                    <p className="text-caption text-copy-light mt-0.5 break-words [overflow-wrap:anywhere]">
                      {badge.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {cta && (
              <div className="justify-self-start 2xl:justify-self-end">
                <Link
                  href={cta.href}
                  className="inline-block max-w-full text-body-sm font-body-medium text-copy-mid hover:text-accent transition-colors duration-normal break-words [overflow-wrap:anywhere]"
                >
                  {cta.label} →
                </Link>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
