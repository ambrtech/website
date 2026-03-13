import { Reveal } from '@/components/reveal'

interface PageHeroProps {
  eyebrow?: string
  heading: React.ReactNode
  subtitle: string
  compact?: boolean
  /** Set to true when PageHero is the first element on the page (no Breadcrumbs above). Adds header clearance. */
  first?: boolean
}

export function PageHero({ eyebrow, heading, subtitle, compact, first }: PageHeroProps) {
  const topPadding = first
    ? 'pt-28 md:pt-[160px]'
    : 'pt-section-mobile md:pt-[120px]'

  return (
    <section className={`${topPadding} pb-section-mobile md:pb-[100px] px-container-mobile md:px-container bg-surface-white`}>
      <div className="mx-auto max-w-site">
        <Reveal>
          {eyebrow && (
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[800px] mb-6">
            {heading}
          </h1>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
