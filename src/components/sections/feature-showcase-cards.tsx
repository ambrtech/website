import type { ReactNode } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { type ImageFilter, filterClass, type CropFocus, cropOrigin } from '@/lib/image-filters'

interface FeatureShowcaseCard {
  /** The mock UI or visual content rendered on top of the duotone background */
  visualContent: ReactNode
  heading: string
  description: string
  /** Duotone filter for the background texture */
  filter: ImageFilter
  /** Texture image path */
  texture?: string
  /** Crop origin for the scaled texture */
  cropFocus?: CropFocus
}

export interface FeatureShowcaseCardsProps {
  eyebrow?: string
  heading: ReactNode
  subtitle?: string
  items: FeatureShowcaseCard[]
}

export function FeatureShowcaseCards({
  eyebrow,
  heading,
  subtitle,
  items,
}: FeatureShowcaseCardsProps) {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        {/* ── Header ── */}
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            {eyebrow && (
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                {eyebrow}
              </p>
            )}
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading text-dark mb-4">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-body text-copy-mid leading-[1.75] max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        {/* ── Cards ── */}
        <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item) => (
              <div key={item.heading}>
                {/* ── Duotone panel with mockup ── */}
                <div className="relative aspect-[4/3] rounded-brand-lg overflow-hidden mb-6">
                  {/* Texture background */}
                  <Image
                    src={item.texture ?? '/textures/feature-texture.jpg'}
                    alt=""
                    fill
                    className={`object-cover scale-[1.5] ${item.cropFocus ? cropOrigin[item.cropFocus] : 'origin-center'} ${filterClass[item.filter]}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 pointer-events-none vignette-dark" />
                  {/* Mockup card — texture peeks out at top */}
                  <div className="absolute top-[18%] left-4 right-4 bottom-4">
                    <div className="bg-surface-white rounded-brand border border-border shadow-card p-4 md:p-5 h-full overflow-hidden">
                      {item.visualContent}
                    </div>
                  </div>
                </div>

                {/* ── Text ── */}
                <h3 className="font-heading text-body md:text-label leading-[1.3] tracking-heading text-dark mb-3">
                  {item.heading}
                </h3>
                <p className="text-body-sm leading-[1.7] text-copy-mid">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
