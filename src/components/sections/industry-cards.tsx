import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

interface IndustryCard {
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}

export interface IndustryCardsProps {
  eyebrow?: string
  heading: ReactNode
  subtitle?: string
  items: IndustryCard[]
}

export function IndustryCards({
  eyebrow,
  heading,
  subtitle,
  items,
}: IndustryCardsProps) {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        {/* ── Header: description left, heading right ── */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16 mb-12 md:mb-16">
            <div className="md:max-w-sm md:order-1 order-2">
              {eyebrow && (
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-4 eyebrow-hairline">
                  {eyebrow}
                </p>
              )}
              {subtitle && (
                <p className="text-body-sm text-copy-mid leading-[1.7]">
                  {subtitle}
                </p>
              )}
            </div>
            <h2 className="font-heading text-headline md:text-display leading-[1.05] tracking-heading text-dark md:order-2 order-1 md:text-right max-w-2xl">
              {heading}
            </h2>
          </div>
        </Reveal>

        {/* ── Cards grid ── */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-brand-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Text */}
                <h3 className="font-heading text-body md:text-label leading-[1.3] tracking-heading text-dark mb-1.5 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-caption md:text-body-sm text-copy-mid leading-[1.6]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
