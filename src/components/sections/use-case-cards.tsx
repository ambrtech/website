import Link from 'next/link'
import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { ImageReveal } from '@/components/animations/image-reveal'
import { EyebrowLine } from '@/components/animations/eyebrow-line'

export interface UseCaseItem {
  heading: string
  description: string
  href: string
  ctaLabel: string
}

export interface UseCaseCardsProps {
  eyebrow?: string
  heading?: React.ReactNode
  subtitle?: string
  image?: {
    src: string
    alt: string
  }
  items: UseCaseItem[]
}

export function UseCaseCards({ eyebrow, heading, subtitle, image, items }: UseCaseCardsProps) {
  return (
    <Section className="bg-surface-white">
      <div className={`mb-12 md:mb-16 ${image ? 'grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-end' : 'max-w-3xl'}`}>
        <div>
          {eyebrow && (
            <Reveal>
              <EyebrowLine />
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-5">
                {eyebrow}
              </p>
            </Reveal>
          )}
          {heading && (
            <Reveal slow>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                {heading}
              </h2>
            </Reveal>
          )}
          {subtitle && (
            <Reveal>
              <p className="text-body text-copy-mid leading-[1.75] mt-4">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
        {image && (
          <ImageReveal direction="right" delay={0.2}>
            <div className="hidden md:block">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-brand object-cover aspect-[3/2]"
              />
            </div>
          </ImageReveal>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border-t border-b border-border">
        {items.map((item) => (
          <Reveal key={item.heading} className="h-full">
            <Link
              href={item.href}
              className="group flex flex-col h-full px-8 py-10 lg:px-6 lg:py-12 bg-surface-white hover:bg-surface transition-colors duration-normal border-l border-border first:border-l-0"
            >
              <h3 className="font-heading text-label leading-[1.3] tracking-heading mb-4 text-dark group-hover:text-accent transition-colors duration-normal">
                {item.heading}
              </h3>
              <p className="text-body-sm text-copy-mid leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="mt-auto flex items-center gap-2 text-label font-body-medium text-dark group-hover:gap-4 transition-all duration-normal">
                <span>{item.ctaLabel}</span>
                <span className="text-accent">→</span>
              </div>

              <div className="h-0.5 bg-accent mt-8 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-slow origin-left" />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
