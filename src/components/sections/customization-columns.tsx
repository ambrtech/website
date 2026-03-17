import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { EyebrowLine } from '@/components/animations/eyebrow-line'
import { ImageReveal } from '@/components/animations/image-reveal'
import {
  ProductScreenshot,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from './product-screenshot'
import Link from 'next/link'

const items = [
  {
    heading: 'Admin Customization',
    description:
      'Easily create custom simulations yourself, directly in the platform. No technical skills required.',
    mock: <MockAdminBuilder />,
  },
  {
    heading: 'In-House Customization Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need.',
    mock: <MockCustomizationDelivery />,
  },
  {
    heading: 'Individual User Customization',
    description:
      'Individual team members create their own private scenarios for specific upcoming conversations.',
    mock: <MockScenarioCreator />,
  },
] as const

interface CustomizationColumnsProps {
  className?: string
}

export function CustomizationColumns({ className }: CustomizationColumnsProps) {
  return (
    <div className={className ?? 'bg-surface-white'}>
      <Section>
        <Reveal>
          <EyebrowLine />
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
            Customization
          </p>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[700px] mb-4">
            Training built around your{' '}
            <em className="text-accent">exact</em> needs
          </h2>
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px] mb-14">
            Ambr AI is fully customizable to match your specific training goals
            — and can be done easily, with minimal effort and without huge
            investment.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.heading} className="space-y-6">
              <ImageReveal direction="bottom" delay={i * 0.12}>
                <div className="h-[260px] overflow-hidden rounded-brand-lg">
                  <div className="transform scale-[0.65] origin-top-left w-[154%]">
                    <ProductScreenshot>
                      {item.mock}
                    </ProductScreenshot>
                  </div>
                </div>
              </ImageReveal>
              <Reveal delay={i * 80 + 100}>
                <div>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <Link
              href="/customization"
              className="inline-flex items-center gap-2 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal"
            >
              See how customization works
              <span className="text-accent">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
