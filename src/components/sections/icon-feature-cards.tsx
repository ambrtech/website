import { Reveal } from '@/components/reveal'

interface IconFeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

interface IconFeatureCardsProps {
  heading: React.ReactNode
  subtitle?: string
  items: IconFeatureCard[]
}

export function IconFeatureCards({ heading, subtitle, items }: IconFeatureCardsProps) {
  return (
    <section className="py-section-mobile md:py-section px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-4">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-body text-copy-mid leading-[1.75] max-w-[600px] mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="flex">
              <div className="border border-border rounded-brand p-8 transition-all duration-normal hover:shadow-card hover:border-accent-soft flex flex-col">
                <div className="mb-5 text-copy-mid">{item.icon}</div>
                <h3 className="font-heading text-label tracking-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-body-sm text-copy-mid leading-[1.75]">
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
