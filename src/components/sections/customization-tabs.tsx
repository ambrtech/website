'use client'

import { useState } from 'react'
import { Section } from './section'
import { Reveal } from '@/components/reveal'
import {
  ProductScreenshot,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from './product-screenshot'
import Link from 'next/link'

const tabs = [
  {
    id: 'admin',
    label: 'Admin Customization',
    description:
      'Easily create custom simulations yourself, directly in the platform. No technical skills required.',
    mock: <MockAdminBuilder />,
  },
  {
    id: 'inhouse',
    label: 'In-House Customization Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need.',
    mock: <MockCustomizationDelivery />,
  },
  {
    id: 'individual',
    label: 'Individual User Customization',
    description:
      'Individual team members create their own private scenarios for specific upcoming conversations.',
    mock: <MockScenarioCreator />,
  },
] as const

export function CustomizationTabs() {
  const [active, setActive] = useState(0)

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
          <p className="text-body text-copy-mid leading-[1.75] max-w-[580px] mb-12">
            Ambr AI is fully customizable to match your specific training goals
            — and can be done easily, with minimal effort and without huge
            investment.
          </p>
        </Reveal>

        {/* Tab buttons */}
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 border-b border-border mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                className={`px-6 py-3 text-label font-body-medium transition-colors duration-normal text-left sm:text-center ${
                  active === i
                    ? 'text-dark border-b-2 border-accent -mb-px'
                    : 'text-copy-light hover:text-copy-mid'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active tab content */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          <div>
            <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-4">
              {tabs[active].label}
            </h3>
            <p className="text-body text-copy-mid leading-[1.75]">
              {tabs[active].description}
            </p>
          </div>
          <div>
            <ProductScreenshot tint>
              {tabs[active].mock}
            </ProductScreenshot>
          </div>
        </div>

        <Reveal>
          <div className="mt-12">
            <Link
              href="/customisation"
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
