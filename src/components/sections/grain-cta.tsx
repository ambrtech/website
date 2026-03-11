import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { EtherealGrain } from '@/components/ui/ethereal-grain'

interface GrainCtaProps {
  heading: React.ReactNode
  subtitle?: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'light' | 'dark'
}

const variantConfig = {
  light: {
    bg: 'bg-surface',
    grainColor: 'rgba(180, 170, 150, 0.7)',
    heading: 'text-copy',
    subtitle: 'text-copy-mid',
    button: 'bg-accent text-surface-white hover:bg-accent-hover',
  },
  dark: {
    bg: 'bg-dark',
    grainColor: 'rgba(90, 85, 75, 0.6)',
    heading: 'text-surface',
    subtitle: 'text-copy-light',
    button: 'bg-accent text-surface-white hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg',
  },
} as const

export function GrainCta({ heading, subtitle, ctaLabel, ctaHref, secondaryLabel, secondaryHref, variant = 'light' }: GrainCtaProps) {
  const v = variantConfig[variant]

  return (
    <section className="relative overflow-hidden">
      {/* Grain background — full bleed */}
      <div className={`absolute inset-0 ${v.bg}`}>
        <EtherealGrain
          color={v.grainColor}
          animation={{ scale: 80, speed: 85 }}
          sizing="fill"
          noiseOverlay={variant === 'light'}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-site px-container-mobile md:px-container py-section-lg md:py-section-xl">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Reveal slow>
            <h2 className={`font-heading text-headline leading-[1.1] tracking-heading ${v.heading}`}>
              {heading}
            </h2>
          </Reveal>

          {subtitle && (
            <Reveal slow delay={100}>
              <p className={`text-body mt-6 max-w-[440px] leading-[1.7] ${v.subtitle}`}>
                {subtitle}
              </p>
            </Reveal>
          )}

          <Reveal slow delay={200}>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href={ctaHref}
                className={`inline-block rounded-brand-sm px-8 py-3.5 text-sm font-body-medium transition-all duration-normal ${v.button}`}
              >
                {ctaLabel}
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className={`text-sm font-body-medium transition-colors ${v.subtitle} hover:text-accent`}
                >
                  {secondaryLabel} →
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
