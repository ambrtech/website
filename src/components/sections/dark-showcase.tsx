import { Reveal } from '@/components/reveal'

interface DarkShowcaseCard {
  title: string
  description: string
}

interface DarkShowcaseProps {
  heading: React.ReactNode
  subtitle?: string
  items: DarkShowcaseCard[]
}

export function DarkShowcase({ heading, subtitle, items }: DarkShowcaseProps) {
  return (
    <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container bg-dark text-surface">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-4 text-surface">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-body text-copy-light leading-[1.75] max-w-[600px] mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="flex">
              <div className="border border-surface-white/10 rounded-brand p-8 bg-dark-mid/50 transition-all duration-normal hover:border-surface-white/25 hover:bg-dark-mid flex flex-col">
                <h3 className="font-heading text-label tracking-heading mb-3 text-surface">
                  {item.title}
                </h3>
                <p className="text-body-sm text-copy-light leading-[1.75]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
