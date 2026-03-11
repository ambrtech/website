import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export interface CustomerStoryProps {
  imageSrc: string
  imageAlt: string
  quote: ReactNode
  name: string
  role?: string
  company: string
  href?: string
  ctaLabel?: string
  /** Smaller image column (~1/3 width instead of 1/2) */
  compact?: boolean
  className?: string
}

export function CustomerStory({
  imageSrc,
  imageAlt,
  quote,
  name,
  role,
  company,
  href,
  ctaLabel = 'Customer Story',
  compact,
  className,
}: CustomerStoryProps) {
  return (
    <section className={`py-section-mobile md:py-section px-container-mobile md:px-container ${className ?? ''}`}>
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className={`grid ${compact ? 'md:grid-cols-[1fr_2fr]' : 'md:grid-cols-2'} gap-10 md:gap-16 items-stretch rounded-brand-lg bg-surface-white p-6 md:p-10 lg:p-12`}>
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[320px] w-full overflow-hidden rounded-brand-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center py-2 md:py-4">
              <blockquote className="font-heading text-label md:text-quote leading-[1.3] tracking-heading text-dark mb-8">
                {typeof quote === 'string' ? <>&ldquo;{quote}&rdquo;</> : quote}
              </blockquote>

              <div className={href ? 'mb-8' : ''}>
                <p className="text-body font-body-medium text-dark">{name}</p>
                {role && <p className="text-body-sm text-copy-mid mt-0.5">{role}</p>}
                <p className="text-body-sm text-copy-mid">{company}</p>
              </div>

              {href && (
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-body font-body-medium text-dark hover:text-accent transition-colors duration-normal"
                >
                  {ctaLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
