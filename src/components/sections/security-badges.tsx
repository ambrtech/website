import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Grid } from '@/components/grid'

interface Badge {
  /** Path to icon — SVG (with currentColor) or PNG */
  icon: string
  label: string
  href: string
  /** Set true for wide/non-square icons like the EU AI Act logo */
  wide?: boolean
}

export interface SecurityBadgesProps {
  heading: string
  description: string
  href: string
  ctaLabel?: string
  badges: Badge[]
  variant?: 'dark' | 'light'
}

export function SecurityBadges({
  heading,
  description,
  href,
  ctaLabel = 'More About Security',
  badges,
  variant = 'dark',
}: SecurityBadgesProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`relative py-section-mobile md:py-section-lg px-container-mobile md:px-container overflow-hidden ${
        isDark ? 'bg-dark text-surface-white' : 'bg-surface text-dark'
      }`}
    >
      <Grid
        className={isDark ? 'text-surface-white/[0.03]' : 'text-dark/[0.02]'}
        dotSize={1}
        gap={24}
      />

      <div className="relative z-10 mx-auto max-w-site">
        <Reveal>
          {/* ── Header row ── */}
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-start mb-16 md:mb-24">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading">
              {heading}
            </h2>
            <div>
              <p className={`text-body leading-[1.75] ${isDark ? 'text-copy-light' : 'text-copy-mid'}`}>
                {description}
              </p>
              <Link
                href={href}
                className={`inline-block mt-8 text-nav rounded-brand-sm px-5 py-2.5 transition-all border ${
                  isDark
                    ? 'text-surface-white border-surface-white/20 hover:border-accent hover:text-accent'
                    : 'text-dark border-dark/20 hover:border-accent hover:text-accent'
                }`}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* ── Badge row ── */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            {badges.map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="flex items-center justify-center h-20 md:h-28 mb-4">
                  <div className={`${badge.wide ? 'w-40 md:w-52' : 'w-16 md:w-24'} h-full relative`}>
                    <Image
                      src={badge.icon}
                      alt=""
                      fill
                      className={`object-contain ${isDark ? 'filter-badge-dark' : 'filter-badge-light'}`}
                      sizes="200px"
                      unoptimized={badge.icon.endsWith('.svg')}
                    />
                  </div>
                </div>
                <p className="text-body font-body-medium mb-1">{badge.label}</p>
                <Link
                  href={badge.href}
                  className={`inline-flex items-center gap-1.5 text-body-sm transition-colors ${
                    isDark
                      ? 'text-copy-light hover:text-accent'
                      : 'text-copy-mid hover:text-accent'
                  }`}
                >
                  Details
                  <span aria-hidden="true" className="text-xs">&#8599;</span>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
