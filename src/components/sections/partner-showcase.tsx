import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

interface PartnerLogo {
  /** Path to logo image, or omit to use text fallback */
  src?: string
  /** Alt text (used as text fallback when src is omitted) */
  alt: string
  /** Whether to render the text fallback in serif */
  serif?: boolean
}

export interface PartnerShowcaseProps {
  eyebrow?: string
  heading: string
  description: string
  href: string
  ctaLabel?: string
  /** The central/hero logo — typically the brand's own */
  heroLogo: PartnerLogo
  /** Partner logos displayed around the hero */
  partners: PartnerLogo[]
}

function LogoCard({ logo, size = 'sm' }: { logo: PartnerLogo; size?: 'sm' | 'lg' }) {
  const isLarge = size === 'lg'
  const card = isLarge
    ? 'w-44 h-36 md:w-56 md:h-44'
    : 'w-20 h-20 md:w-24 md:h-24'

  return (
    <div className={`${card} bg-surface-white rounded-brand-lg flex items-center justify-center shrink-0 shadow-card`}>
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={isLarge ? 96 : 64}
          height={isLarge ? 48 : 32}
          className={`object-contain h-auto opacity-80 ${isLarge ? 'w-20 md:w-24' : 'w-14 md:w-16'}`}
        />
      ) : (
        <span
          className={`text-dark/70 select-none text-center leading-tight px-2 ${
            isLarge
              ? logo.serif ? 'font-heading text-title tracking-heading' : 'font-body-medium text-body-sm uppercase tracking-eyebrow'
              : logo.serif ? 'font-heading text-label tracking-heading' : 'font-body-medium text-eyebrow uppercase tracking-eyebrow'
          }`}
        >
          {logo.alt}
        </span>
      )}
    </div>
  )
}

export function PartnerShowcase({
  eyebrow,
  heading,
  description,
  href,
  ctaLabel = 'Learn More',
  heroLogo,
  partners,
}: PartnerShowcaseProps) {
  return (
    <section className="relative bg-dark text-surface-white py-section-mobile md:py-section-lg px-container-mobile md:px-container overflow-hidden">
      <div className="relative z-10 mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* ── Text column ── */}
            <div>
              {eyebrow && (
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-4 eyebrow-hairline">
                  {eyebrow}
                </p>
              )}
              <h2 className="font-heading text-title leading-[1.15] tracking-heading mb-6">
                {heading}
              </h2>
              <p className="text-body leading-[1.75] text-copy-light max-w-[480px]">
                {description}
              </p>
              <Link
                href={href}
                className="inline-block mt-8 text-nav text-surface-white border border-surface-white/20 rounded-brand-sm px-5 py-2.5 transition-all hover:border-accent hover:text-accent"
              >
                {ctaLabel}
              </Link>
            </div>

            {/* ── Logo visual ── */}
            <div className="relative">
              {/* Background texture */}
              <div className="absolute inset-0 rounded-brand-lg overflow-hidden opacity-15">
                <Image
                  src="/textures/feature-texture.jpg"
                  alt=""
                  fill
                  className="object-cover filter-duotone-cream"
                  sizes="50vw"
                />
              </div>

              <div className="relative p-6 md:p-10">
                {/* Partner row */}
                <div className="flex justify-center gap-3 mb-3">
                  {partners.map((partner) => (
                    <LogoCard key={partner.alt} logo={partner} />
                  ))}
                </div>

                {/* Connecting lines — fans from each partner card down to the hero center */}
                <svg
                  viewBox="0 0 100 24"
                  preserveAspectRatio="none"
                  className="w-full h-6 text-surface-white/15"
                  aria-hidden="true"
                >
                  {partners.map((_, i) => {
                    const x = ((i + 0.5) / partners.length) * 100
                    return (
                      <line
                        key={i}
                        x1={x}
                        y1="0"
                        x2="50"
                        y2="24"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    )
                  })}
                </svg>

                {/* Hero logo */}
                <div className="flex justify-center mt-3">
                  <LogoCard logo={heroLogo} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
