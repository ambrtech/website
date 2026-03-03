import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Customisation',
  description:
    'Every Ambr AI simulation is bespoke to your organisation. Custom scenarios, language, culture, and context built specifically for your teams.',
  path: '/customisation',
})

const customisationMethods = [
  {
    heading: 'Admin Customisation',
    description:
      'Create and edit simulations directly in the platform. Define the scenario, set the AI character\u2019s personality and objectives, and tailor the experience to specific teams or roles. No technical skills required. Scale a single scenario globally or build targeted simulations for individual departments.',
  },
  {
    heading: 'In-House Customisation Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context \u2014 the scenario, the learner profile, the desired outcomes \u2014 and we deliver a simulation that matches your exact needs.',
  },
  {
    heading: 'Personal Scenario Creator',
    description:
      'Individual team members create their own private simulations for specific upcoming conversations. They build the scenario, train on their own terms, and receive confidential feedback.',
  },
]

const scenarioExamples = [
  'Giving Performance Feedback',
  'Handling a Pricing Objection',
  'De-escalating a Customer Complaint',
  'Navigating a Restructure Conversation',
  'Client Renewal Negotiation',
  'Onboarding a New Hire',
  'Delivering Difficult News',
  'Cross-selling to an Existing Client',
]

export default function CustomisationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Customisation', href: '/customisation' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        compact
        heading={
          <>
            Customised to your exact{' '}
            <em className="text-accent">training needs</em>
          </>
        }
        subtitle="Every organisation runs differently. Ambr AI is built to match your specific scenarios, internal language, and team structure, so your training reflects reality from day one."
        cta={{ label: 'Try for Free', href: '/try-for-free' }}
      />

      {/* ── Three customisation methods ── */}
      <Section>
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              How it works
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Three ways to customise
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {customisationMethods.map((method, index) => (
            <Reveal key={method.heading}>
              <div className="flex flex-col h-full border-t border-border pt-8">
                <span className="font-heading text-section tracking-heading text-accent-soft leading-none mb-5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-label tracking-heading text-dark mb-3">
                  {method.heading}
                </h3>
                <p className="text-body-sm text-copy-mid leading-relaxed">
                  {method.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Speed: brief → build → live ── */}
      <NumberedSteps
        eyebrow="Speed"
        heading="From brief to live simulation in days"
        items={[
          {
            title: 'Share your brief',
            description:
              'A few minutes of context about your scenarios, learner profiles, and desired outcomes.',
          },
          {
            title: 'We build your simulations',
            description:
              'Admins can build scenarios in minutes. Our in-house team delivers tailored simulations within days.',
          },
          {
            title: 'Your team is live',
            description:
              'No lengthy onboarding, no complex implementation project, and no waiting for the next release cycle.',
          },
        ]}
      />

      {/* ── Pre-built scenario library ── */}
      <Section className="bg-surface-alt">
        <Reveal>
          <div className="mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Scenario library
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[600px]">
              Ready-made scenarios across every use case
            </h2>
            <p className="text-body text-copy-mid leading-[1.75] max-w-[520px] mt-4">
              Not starting from scratch? Browse an extensive library of pre-built scenarios.
              Use them immediately, or as starting points for customised simulations.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {scenarioExamples.map((title) => (
              <div
                key={title}
                className="bg-surface-white border border-border rounded-brand-sm p-5 md:p-6"
              >
                <p className="font-heading text-body-sm tracking-heading text-dark leading-snug">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Partner quotes ── */}
      <Section>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading">
              A partner, not just a platform
            </h2>
            <p className="text-body text-copy-mid mt-4 max-w-[480px] mx-auto leading-[1.75]">
              Real people who learn your business, respond quickly, and care about getting the details right.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              'They built everything around our specific needs.',
              'It\u2019s not off the shelf.',
              'The team is incredibly responsive.',
            ].map((quote) => (
              <blockquote
                key={quote}
                className="border-t border-border pt-6"
              >
                <p className="font-heading text-body leading-[1.5] tracking-heading text-dark italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-caption text-copy-light mt-3">
                  Enterprise client
                </p>
              </blockquote>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── What your organisation gets ── */}
      <FeatureGrid
        eyebrow="The outcome"
        heading="What your organisation gets"
        items={[
          {
            heading: 'Scalable rollout',
            description:
              'Deploy customised training to specific teams, departments, or the entire organisation from a single dashboard.',
          },
          {
            heading: 'Aggregated insights',
            description:
              'Understand what your people are strong and weak at. Surface capability gaps and shape your broader training strategy.',
          },
          {
            heading: 'Structured feedback',
            description:
              'Every session delivers detailed, personalised feedback on tone, pacing, word choice, structure, and approach.',
          },
          {
            heading: 'Consistent quality',
            description:
              'Every team member receives the same standard of training and feedback, regardless of location or language.',
          },
        ]}
      />

      {/* ── 93% stat ── */}
      <StatBar
        items={[
          {
            value: '93%',
            label: 'of users report feeling better prepared for real conversations after using Ambr AI',
            source: 'Ambr AI user survey',
          },
        ]}
      />

      {/* ── Buying process ── */}
      <NumberedSteps
        eyebrow="Getting started"
        heading="What the buying process looks like"
        items={[
          {
            title: 'Tell us what you need',
            description:
              'A short conversation about your use cases, team size, and goals.',
          },
          {
            title: 'See it in action',
            description:
              'Try customised simulations built for your actual scenarios. Not a generic demo.',
          },
          {
            title: 'Go live',
            description:
              'Rollout support, admin setup, and your first scenarios \u2014 ready in days.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
