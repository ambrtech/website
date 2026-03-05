import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import {
  ProductScreenshot,
  MockScenarioCard,
  MockCustomizationFlow,
  MockDashboard,
} from '@/components/sections/product-screenshot'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Admin Experience for Sales Enablement',
  description:
    'Onboard new hires faster, upskill continuously, and see the difference. Realistic, pressure-tested conversation practice at scale for sales teams.',
  path: '/product/admin-experience/sales-enablement',
})

/* ── Inline mock UIs ── */

function MockPitchPractice() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Pitch Practice
        </span>
      </div>
      <div className="p-3 rounded-brand-sm bg-surface border border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center">
            <span className="font-heading text-caption text-copy-mid">VP</span>
          </div>
          <div>
            <p className="text-caption font-body-medium text-dark">VP of Operations</p>
            <p className="text-caption text-copy-light">Cold prospect, 15 min meeting</p>
          </div>
        </div>
        <div className="h-px bg-border mb-3" />
        <p className="text-caption text-copy-mid leading-relaxed">
          &ldquo;We&apos;ve looked at three other vendors already. What makes
          your approach different?&rdquo;
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-brand-sm bg-surface border border-border text-center">
          <p className="font-heading text-label tracking-heading text-dark leading-none mb-1">78%</p>
          <p className="text-caption text-copy-light">Clarity</p>
        </div>
        <div className="p-3 rounded-brand-sm bg-surface border border-border text-center">
          <p className="font-heading text-label tracking-heading text-dark leading-none mb-1">82%</p>
          <p className="text-caption text-copy-light">Confidence</p>
        </div>
      </div>
      <div className="p-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
        <p className="text-caption text-copy-mid leading-relaxed">
          Strong opening. Try pausing after your value prop to let it land
          before transitioning to discovery.
        </p>
      </div>
    </div>
  )
}

function MockOnboardingJourney() {
  const stages = [
    { title: 'Product knowledge', progress: 100 },
    { title: 'Discovery & qualification', progress: 75 },
    { title: 'Objection handling', progress: 30 },
    { title: 'Negotiation & close', progress: 0 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          New Hire Journey
        </span>
        <span className="text-caption text-copy-faint">Week 2 of 4</span>
      </div>
      {stages.map((stage) => (
        <div key={stage.title} className="p-3 rounded-brand-sm bg-surface border border-border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-caption font-body-medium text-dark">{stage.title}</p>
            <span className={`text-caption ${
              stage.progress === 100 ? 'text-accent' : 'text-copy-light'
            }`}>
              {stage.progress === 100 ? 'Complete' : `${stage.progress}%`}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div
              className={`h-full rounded-full ${
                stage.progress === 100 ? 'bg-accent' : 'bg-accent-soft'
              }`}
              style={{ width: `${Math.max(stage.progress, 2)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

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

      {/* ── Hero ── */}
      <PageHero
        compact
        eyebrow="For Sales Enablement"
        heading={
          <>
            Onboard faster. Upskill continuously.{' '}
            See the <em className="text-accent">difference</em>.
          </>
        }
        subtitle="Real sales capability comes from repetition. From practicing objection handling, discovery, and negotiation enough times that the response feels natural, not recalled. No scheduling. No role-play awkwardness with a manager. Just a platform where your team builds real skill, and you get full visibility into how they perform."
      />

      {/* ── Stat bar ── */}
      <StatBar
        items={[
          { value: '40%', label: 'Faster ramp time reported by enablement teams' },
          { value: 'Day 1', label: 'New hires start practicing immediately' },
          { value: '10x', label: 'More practice reps than traditional roleplay' },
        ]}
      />

      {/* ── 1. Scenario library — left text, right mock ── */}
      <SplitContent
        eyebrow="Built for sales"
        heading={
          <>
            A library of the conversations your team{' '}
            <em className="text-accent">actually</em> has
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCard />
          </ProductScreenshot>
        }
      >
        <p>
          Prospecting, discovery, objection handling, negotiation, closing,
          account expansion. Ready-made simulations for every stage of
          the sales conversation, ready to use or customize.
        </p>
      </SplitContent>

      {/* ── 2. Custom scenarios — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Your pipeline, your simulations"
        heading={
          <>
            Custom scenarios built around{' '}
            <em className="text-accent">your</em> deals
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockCustomizationFlow />
          </ProductScreenshot>
        }
      >
        <p>
          Simulations built around your products, buyer personas, and
          competitive landscape. New product launch? New vertical? Deploy
          targeted practice in hours, not months.
        </p>
      </SplitContent>

      {/* ── 3. Pitch & presentation — left text, right mock ── */}
      <SplitContent
        eyebrow="Delivery practice"
        heading={
          <>
            Pitch, present, and practice how you{' '}
            <em className="text-accent">come across</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockPitchPractice />
          </ProductScreenshot>
        }
      >
        <p>
          Reps rehearse demos and pitches with AI-driven audience
          interaction. With screensharing enabled, the simulation responds
          to their delivery in real time — just like a prospect would.
        </p>
        <p>
          Body language analysis gives feedback on non-verbal communication
          alongside voice, so your team knows how they come across on camera.
        </p>
      </SplitContent>

      {/* ── 4. Onboarding — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Accelerate onboarding"
        heading={
          <>
            Onboard in <em className="text-accent">days</em>, not months
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockOnboardingJourney />
          </ProductScreenshot>
        }
      >
        <p>
          New hires start practicing from day one. No scheduling, no
          shadowing queues, no waiting for a senior rep to be available.
          Structured Journeys take them through a progressive sequence of
          scenarios, building competency before they ever get on a live call.
        </p>
      </SplitContent>

      {/* ── 5. Capability insights — left text, right mock ── */}
      <SplitContent
        eyebrow="Capability insights"
        heading={
          <>
            Know exactly where your team is{' '}
            <em className="text-accent">struggling</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Stop waiting for quota attainment data to tell you what went wrong.
          Ambr AI surfaces patterns across your organization before they
          become pipeline problems.
        </p>
        <p>
          Which stages of the conversation consistently break down? Where
          does confidence drop? Which reps need more support, and on what?
          Use that data to focus your enablement investment where it matters.
        </p>
      </SplitContent>

      {/* ── Social proof ── */}
      <PullQuote
        quote="The feedback is really well structured, not overloaded with text like other tools where you don't know where to start."
        role="L&D Manager"
        company="Global Logistics Company"
      />

      {/* ── CTA ── */}
      <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container text-center bg-dark text-surface">
        <Reveal>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading mb-10 text-surface">
            See it for <em className="text-accent">yourself</em>.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/try-for-free"
              className="inline-block rounded-brand-sm bg-accent text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg"
            >
              Try for Free
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-brand-sm border border-surface/20 text-surface px-8 py-3.5 text-sm font-body-medium transition-all hover:border-surface/40 hover:-translate-y-px"
            >
              Find Out More
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
