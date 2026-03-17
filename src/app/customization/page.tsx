import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SplitContent } from '@/components/sections/split-content'
import { GrainCta } from '@/components/sections/grain-cta'
import {
  ProductScreenshot,
  MockCustomizationFlow,
  MockDeploymentTimeline,
  MockEvaluationRubric,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from '@/components/sections/product-screenshot'
import { ShowcaseSplit } from '@/components/sections/showcase-split'
import { TestimonialStat } from '@/components/sections/testimonial-stat'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { ImageReveal } from '@/components/animations/image-reveal'

export const metadata = createMetadata({
  title: 'Customization',
  description:
    'Every Ambr AI simulation is bespoke to your organization. Custom scenarios, language, culture, and context — built around your teams, not templates.',
  path: '/customization',
})

export default function CustomisationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Customization', href: '/customization' },
        ]}
      />

      {/* ── 1. Hero — split layout ── */}
      <section className="pt-section-mobile md:pt-[120px] pb-section-mobile md:pb-[100px] px-container-mobile md:px-container bg-surface-white">
        <div className="mx-auto max-w-site overflow-hidden">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
                  Customization
                </p>
                <h1 className="font-heading text-headline leading-[1.1] tracking-heading mb-6">
                  Built around <em className="text-accent">your</em> business.
                </h1>
                <p className="text-body text-copy-mid leading-[1.75] max-w-[480px]">
                  Ambr AI can be easily configured to your scenarios, terminology,
                  and criteria, so your people prepare for the conversations
                  they&apos;ll actually have.
                </p>
              </div>
              <div>
                <ProductScreenshot tint>
                  <MockCustomizationFlow />
                </ProductScreenshot>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Why It Matters ── */}
      <SplitContent
        eyebrow="Why it matters"
        heading={
          <>
            The most effective training reflects the exact nuances of{' '}
            <em className="text-accent">your</em> business.
          </>
        }
      >
        <p>
          Your sales teams use unique objection-handling language, and your
          managers navigate specific company policies.
        </p>
        <p>
          Ambr AI bridges this gap. Easily create simulations that mirror your
          real-world context — from the precise products your people represent to
          the tailored feedback they receive — achieving employee readiness with
          speed and without extensive investment.
        </p>
      </SplitContent>

      {/* ── 3. What you can customize ── */}
      <ShowcaseSplit
        className="bg-surface-white"
        heading={
          <>
            What you can customize{' '}
            <span className="text-copy-light">(and how easy it is)</span>
          </>
        }
        subtitle="Building highly tailored simulations is fast and intuitive. You don't need technical skills to create scenarios that reflect your exact workplace reality."
        textureImage="/images/photography/abstract-fingerprint-ridges-macro.png"
        filter="duotone"
        cropFocus="top-left"
        visualContent={<MockCustomizationFlow />}
        features={[
          {
            heading: 'Context & Objectives',
            description:
              'Define the specific situation, tailor the experience to specific roles, and set clear, measurable learning outcomes.',
          },
          {
            heading: 'AI Character',
            description:
              'Choose the AI character\u2019s exact personality, behavior, and pushback style to mirror the real people your team interacts with.',
          },
          {
            heading: 'Real-World Inputs',
            description:
              'Simply upload your company policies, product specs, or sales playbooks. Our platform instantly weaves them into the simulation, ensuring your teams are always working with the latest knowledge and best practice.',
          },
        ]}
      />

      {/* ── 4. Three ways to customize ── */}
      <Section className="bg-surface py-section-lg md:py-section-xl">
        <Reveal>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-12 md:mb-14">
            Built around your <em className="text-accent">exact needs</em>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, i) => (
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
      </Section>

      {/* ── 5. Launch in days, not months ── */}
      <SplitContent
        className="bg-surface-white"
        reversed
        eyebrow="Speed"
        heading={
          <>
            Launch in <em className="text-accent">days</em>, not months.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockDeploymentTimeline />
          </ProductScreenshot>
        }
      >
        <p>
          From creation to deployment in under 48 hours. No lengthy onboarding,
          no implementation project, no waiting for the next release cycle.
        </p>
      </SplitContent>

      {/* ── 6. Feedback aligned to your frameworks ── */}
      <SplitContent
        eyebrow="Evaluation"
        heading={
          <>
            Feedback aligned to your{' '}
            <em className="text-accent">frameworks</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockEvaluationRubric />
          </ProductScreenshot>
        }
      >
        <p>
          Every simulation delivers detailed feedback on tone, pacing, structure,
          and approach. That&apos;s the starting point. You can go further: anchor
          feedback to your organization&apos;s competency frameworks, rubrics, or
          assessment criteria. Sales teams can score against their real
          qualification methodology. L&amp;D teams can align feedback to existing
          development frameworks.
        </p>
      </SplitContent>

      {/* ── 7. What teams are saying — testimonial + stat ── */}
      <TestimonialStat
        className="bg-surface-white py-section-lg md:py-section-xl"
        stat={{
          value: '93%',
          label: 'of users report feeling better prepared for real conversations after using Ambr AI',
        }}
        testimonials={[
          {
            quote:
              'We love it. It\u2019s great that we can customize it for our needs.',
            role: 'L&D Manager',
            company: 'Professional Services Firm',
          },
          {
            quote:
              'We write scripts for managers but it\u2019s not sustainable \u2014 Ambr AI gives them a self-sustaining skill.',
            role: 'Head of L&D',
            company: 'Logistics Company',
          },
        ]}
      />

      {/* ── 8. A team behind the platform ── */}
      <Section className="bg-surface py-section-lg md:py-section-xl">
        <Reveal>
          <div className="text-center max-w-[600px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-4 h-4 rounded-full bg-accent-soft/40" />
              <div className="w-8 h-8 rounded-full bg-accent-soft/60 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9" />
                </svg>
              </div>
              <div className="w-4 h-4 rounded-full bg-accent-soft/40" />
            </div>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              A team behind the <em className="text-accent">platform</em>.
            </h2>
            <p className="text-body text-copy-mid leading-[1.75]">
              Every client works with a dedicated customer success
              manager who learns your business and your goals. We provide as much or as
              little support as you need. When you need new scenarios built,
              adjustments made, rollout support, you&apos;re working with real
              people who respond quickly and care about the details.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── 9. CTA block ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> team.
          </>
        }
        subtitle="We'll build a custom simulation using your real scenarios. No generic demos."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
