import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { CTA } from '@/components/sections/cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Sales Enablement',
  description:
    'Onboard new sales hires faster, upskill continuously, and measure the conversations that drive revenue. Built for sales enablement leaders.',
  path: '/product/admin-experience/sales-enablement',
})

export default function SalesEnablementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
          {
            name: 'Sales Enablement',
            href: '/product/admin-experience/sales-enablement',
          },
        ]}
      />

      <PageHero
        compact
        eyebrow="For Sales Enablement"
        heading={
          <>
            Onboard faster. Upskill continuously.{' '}
            <em className="text-accent">See the results.</em>
          </>
        }
        subtitle="Sales training shouldn't end when the workshop does. Ambr AI gives your reps a place to practice the conversations that actually close deals — and gives you the data to prove it's working."
      />

      <StatBar
        items={[
          {
            value: '40%',
            label: 'Faster ramp time reported by enablement teams',
          },
          {
            value: 'Day 1',
            label: 'New hires start practicing from their first day',
          },
          {
            value: '10x',
            label: 'More practice reps than traditional roleplay',
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Built for sales teams"
        heading={
          <>
            Practice the conversations that{' '}
            <em className="text-accent">drive revenue</em>
          </>
        }
        items={[
          {
            heading: 'Scenario library',
            description:
              'Discovery calls, objection handling, competitive positioning, renewal conversations. Build a library of the exact situations your reps face — and let them practice until they are ready.',
          },
          {
            heading: 'Custom scenarios in hours',
            description:
              'Launching a new product? Entering a new vertical? Create custom simulations around your real use cases, buyer personas, and competitive landscape. No months-long development cycles.',
          },
          {
            heading: 'Pitch and presentation practice',
            description:
              'Reps can practice delivering presentations and pitches with screensharing enabled. The simulation responds to their delivery in real time — just like a prospect would.',
          },
          {
            heading: 'Body language and delivery',
            description:
              'With webcam enabled, simulations capture non-verbal signals alongside conversation content. Reps get feedback on presence and delivery, not just what they said.',
          },
        ]}
      />

      <SplitContent
        eyebrow="Accelerate onboarding"
        heading={
          <>
            Onboard in <em className="text-accent">days</em>, not months
          </>
        }
      >
        <p>
          New hires don&apos;t need to wait for scheduled roleplays or shadow
          experienced reps for weeks. From day one, they can practice your
          core sales conversations — discovery, demo, negotiation — in
          realistic simulations built around your actual deal stages and buyer
          personas.
        </p>
        <p>
          Use Journeys to structure onboarding into a progressive sequence.
          Each rep builds skills in the right order. You see exactly when
          they&apos;re ready for live conversations — no guessing, no premature
          deployment.
        </p>
      </SplitContent>

      <NumberedSteps
        eyebrow="Structured onboarding"
        heading="From new hire to pipeline-ready"
        items={[
          {
            title: 'Product knowledge',
            description:
              'Reps practice articulating your value proposition, handling common questions, and positioning against competitors — before their first customer call.',
          },
          {
            title: 'Discovery and qualification',
            description:
              'Structured simulations teach reps to ask the right questions, identify pain points, and qualify opportunities using your specific methodology.',
          },
          {
            title: 'Objection handling',
            description:
              'Reps face realistic pushback scenarios and practice responding with confidence. They build the muscle memory that workshops alone cannot create.',
          },
        ]}
      />

      <SplitContent
        reversed
        eyebrow="Capability insights"
        heading={
          <>
            Data that sharpens your{' '}
            <em className="text-accent">enablement strategy</em>
          </>
        }
      >
        <p>
          See exactly where your team is strong and where they struggle.
          Ambr AI surfaces patterns across hundreds of simulated
          conversations — which objections trip reps up, where discovery
          falls short, and which segments of your team need targeted coaching.
        </p>
        <p>
          Stop relying on manager observations and call recording reviews.
          Structured capability data shows you what&apos;s working, what
          isn&apos;t, and where to focus your next enablement investment.
        </p>
      </SplitContent>

      {/* Continuous upskilling — custom inline */}
      <Section className="bg-surface-alt border-y border-border">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Beyond onboarding
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Upskilling that never{' '}
              <em className="text-accent">stops</em>
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                New product launch? New competitive threat? New vertical?
                Deploy targeted practice simulations to your entire sales
                organization in hours. Reps practice on their own time, at
                their own pace — and you see the results in the dashboard
                before the next pipeline review.
              </p>
              <p>
                Assign certifications that prove readiness. Track whether
                skills actually transfer to live conversations. Build an
                enablement program with a measurable feedback loop.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  )
}
