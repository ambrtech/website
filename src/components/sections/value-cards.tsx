import type { ReactNode } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { type ImageFilter, filterClass } from '@/lib/image-filters'

interface ValueCard {
  /** Any SVG or component rendered as the white icon */
  icon: ReactNode
  heading: string
  description: string
  /** Duotone filter for the texture background */
  filter?: ImageFilter
  /** Which texture image to use */
  texture?: string
  /** Crop origin for the texture */
  cropFocus?: string
}

export interface ValueCardsProps {
  items: ValueCard[]
}

export function ValueCards({ items }: ValueCardsProps) {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item) => (
              <div key={item.heading}>
                {/* ── Texture panel with icon ── */}
                <div className="relative aspect-[4/3] rounded-brand-lg overflow-hidden mb-6">
                  {/* Texture background */}
                  <Image
                    src={item.texture ?? '/images/textures/feature-texture.jpg'}
                    alt=""
                    fill
                    className={`object-cover scale-[1.5] ${item.cropFocus ?? 'origin-center'} ${item.filter ? filterClass[item.filter] : 'filter-duotone'}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark overlay for icon contrast */}
                  <div className="absolute inset-0 bg-dark/40" />
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-surface-white p-8 md:p-12">
                    {item.icon}
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
