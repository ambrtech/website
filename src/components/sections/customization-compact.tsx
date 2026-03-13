import { Section } from './section'
import { Reveal } from '@/components/reveal'
import {
  ProductScreenshot,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from './product-screenshot'
import Link from 'next/link'

const items = [
  {
    number: '01',
    heading: 'Admin Customization',
    description:
      'Easily create custom simulations yourself, directly in the platform. No technical skills required.',
    mock: <MockAdminBuilder />,
  },
  {
    number: '02',
    heading: 'In-House Customization Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need.',
    mock: <MockCustomizationDelivery />,
  },
  {
    number: '03',
    heading: 'Individual User Customization',
    description:
      'Individual team members create their own private scenarios for specific upcoming conversations.',
    mock: <MockScenarioCreator />,
  },
] as const

export function CustomizationCompact() {
  return (
    <div className="bg-surface-white">
      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
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

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.heading} delay={i * 80}>
              <div className="border border-border rounded-brand-lg bg-surface-white p-6 pb-0 overflow-hidden h-full flex flex-col">
                {/* Number + text */}
                <div className="mb-5">
                  <span className="font-heading text-headline text-accent/20 leading-none block mb-3">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>

                {/* Scaled-down mock screenshot */}
                <div className="mt-auto h-[200px] overflow-hidden rounded-t-brand">
                  <div className="transform scale-[0.58] origin-top-left w-[172%]">
                    <ProductScreenshot>
                      {item.mock}
                    </ProductScreenshot>
                  </div>
                </div>
              </div>
            </Reveal>
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
