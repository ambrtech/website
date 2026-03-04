import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export interface CustomerStoryProps {
  imageSrc: string
  imageAlt: string
  quote: string
  name: string
  role: string
  company: string
  href: string
  ctaLabel?: string
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
}: CustomerStoryProps) {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch rounded-brand-lg bg-surface-alt p-6 md:p-10 lg:p-12">
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
              <blockquote className="font-heading text-quote md:text-section leading-[1.3] tracking-heading text-dark mb-8">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="mb-8">
                <p className="text-body font-body-medium text-dark">{name}</p>
                <p className="text-body-sm text-copy-mid mt-0.5">{role}</p>
                <p className="text-body-sm text-copy-mid">{company}</p>
              </div>

              <Link
                href={href}
                className="inline-flex items-center gap-2 text-body font-body-medium text-dark hover:text-accent transition-colors duration-normal"
              >
                {ctaLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
