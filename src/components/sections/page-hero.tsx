import Link from 'next/link'
import { Reveal } from '@/components/reveal'

interface PageHeroCta {
  label: string
  href: string
}

interface PageHeroProps {
  eyebrow?: string
  heading: React.ReactNode
  subtitle: string
  compact?: boolean
  cta?: PageHeroCta
}

export function PageHero({ eyebrow, heading, subtitle, compact, cta }: PageHeroProps) {
  return (
    <section
      className={`${
        compact ? 'pt-section-mobile md:pt-section' : 'pt-section-xl md:pt-section-2xl'
      } pb-section-mobile md:pb-section px-container-mobile md:px-container`}
    >
      <div className="mx-auto max-w-site">
        <Reveal>
          {eyebrow && (
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[800px] mb-6">
            {heading}
          </h1>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
            {subtitle}
          </p>
          {cta && (
            <Link
              href={cta.href}
              className="inline-block mt-8 rounded-brand-sm bg-dark text-surface-white px-8 py-3.5 text-body-sm font-body-medium transition-all hover:bg-accent hover:-translate-y-px hover:shadow-lg"
            >
              {cta.label}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
