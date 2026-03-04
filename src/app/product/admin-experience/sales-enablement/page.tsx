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
        subtitle="Sales training should not end with a workshop. Your team needs to train on the conversations that actually close deals — discovery, objection handling, negotiation, expansion — in conditions that build real skills."
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
            heading: 'Scenario library for sales',
            description:
              'Prospecting, discovery, objection handling, negotiation, closing, account expansion. A library of the exact conversation types your reps face — ready to use or customize.',
          },
          {
            heading: 'Custom scenarios for your pipeline',
            description:
              'Build simulations around your products, buyer personas, and competitive landscape. New product launch? New vertical? Deploy targeted practice in hours, not months.',
          },
          {
            heading: 'Presentation and pitch training',
            description:
              'Reps rehearse pitches and demos with AI-driven audience interaction. With screensharing enabled, the simulation responds to their delivery in real time — just like a prospect would.',
          },
          {
            heading: 'Body language analysis',
            description:
              'Feedback on non-verbal communication alongside voice, so your team knows how they come across on camera. Presence and delivery, not just what they said.',
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
          New hires start training from day one. No scheduling, no pairing,
          no waiting for a senior team member to be available. From their
          first week, they can practice your core sales conversations —
          discovery, demo, negotiation — in realistic simulations built
          around your actual deal stages and buyer personas.
        </p>
        <p>
          Structured Journeys take them through a progressive sequence of
          scenarios, building competency before they ever get on a live
          call. You see exactly when they are ready — no guessing, no
          premature deployment.
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
          Stop guessing where your team is struggling. Ambr AI surfaces
          patterns across your organization — which stages of the
          conversation break down, where confidence drops, and which
          skills need reinforcement.
        </p>
        <p>
          Use that data to focus your development investment where it
          matters most and to shape enablement programs around real
          evidence, not manager anecdotes.
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
