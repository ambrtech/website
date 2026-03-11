import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import {
  ProductScreenshot,
  MockScenarioCard,
  MockDashboard,
  MockJourneyGrid,
} from '@/components/sections/product-screenshot'
import { ShowcaseSplit } from '@/components/sections/showcase-split'
import { GrainCta } from '@/components/sections/grain-cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Admin Experience',
  description:
    'Deploy customized roleplay simulations, track team performance under pressure, and surface the patterns that shape your training investment. All from one secure enterprise dashboard.',
  path: '/product/admin-experience',
})

export default function AdminExperiencePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
        ]}
      />

      {/* ── 1. Hero ── */}
      <PageHero
        compact
        eyebrow="Admin Experience"
        heading={
          <>
            Your training. Your scenarios.{' '}
            Your <em className="text-accent">standards</em>.
          </>
        }
        subtitle="Deploy customized roleplay simulations across your entire organization. Track how teams actually perform under pressure. Surface the patterns that help you decide where to invest next. All from a single, secure admin dashboard built for enterprise scale."
      />

      {/* ── 2. Deploy customized training ── */}
      <SplitContent
        eyebrow="Deploy in minutes"
        heading={
          <>
            Deploy customized training in{' '}
            <em className="text-accent">minutes</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCard />
          </ProductScreenshot>
        }
      >
        <p>
          You know your organization better than any off-the-shelf content
          library ever will. That&apos;s why Ambr AI lets you create roleplay
          simulations directly in the platform. Define the context, set the AI
          character, establish the difficulty level. Your team can start
          practicing immediately.
        </p>
        <p>
          Prefer to hand it off? Our in-house team builds fully tailored
          scenarios from a short brief. From conversation to live simulation
          in days.
        </p>
        <p>
          Or start with our pre-built scenario library and roll out training
          across your organization today.
        </p>
      </SplitContent>

      {/* ── 3. Reporting ── */}
      <SplitContent
        className="bg-surface-white"
        reversed
        eyebrow="Actionable analytics"
        heading={
          <>
            Reporting that shapes what happens{' '}
            <em className="text-accent">next</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Usage dashboards show who&apos;s training, how often, and on what.
          But the real value goes deeper than engagement metrics.
        </p>
        <p>
          Ambr AI surfaces aggregated insights across your teams, revealing
          patterns in communication strengths and gaps that inform where you
          invest in development next.
        </p>
      </SplitContent>

      {/* ── 3b. Reporting features — showcase with visual ── */}
      <ShowcaseSplit
        layout="right"
        filter="duotone-blush"
        cropFocus="bottom-right"
        visualContent={<MockDashboard />}
        heading={
          <>
            The metrics that shape your{' '}
            <em className="text-accent">investment</em>
          </>
        }
        features={[
          {
            heading: 'Engagement tracking',
            description:
              'Completion rates, session frequency, team-level breakdowns.',
          },
          {
            heading: 'Capability insights',
            description:
              'Aggregated strengths and gaps across teams, cohorts, and regions.',
          },
          {
            heading: 'Exportable reports',
            description:
              'Certification tracking, compliance monitoring, stakeholder-ready data.',
          },
        ]}
      />

      {/* ── 4. Journeys and certifications ── */}
      <ShowcaseSplit
        className="bg-surface-white"
        layout="left"
        filter="duotone"
        cropFocus="top-left"
        textureImage="/textures/feature-texture-alt.jpg"
        visualContent={<MockJourneyGrid />}
        heading={
          <>
            Structured learning paths and{' '}
            <em className="text-accent">certifications</em>
          </>
        }
        features={[
          {
            heading: 'Journeys',
            description:
              'Structure training into guided paths. Assign sequences of scenarios that build skills progressively, not randomly.',
          },
          {
            heading: 'Certifications',
            description:
              'Set standards and verify competency. Track completion, follow up with individuals, and give stakeholders clear evidence of capability.',
          },
        ]}
      />

      {/* ── 5. Integrations teaser ── */}
      <Section className="border-y border-border">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Integrations
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Works where your people{' '}
                <em className="text-accent">already</em> learn
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Ambr AI integrates with the LMS platforms and enterprise
                  tools your organization already uses. No disruption. No
                  migration.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/product/integrations"
                className="inline-flex items-center gap-3 text-label font-body-medium text-dark hover:text-accent transition-colors duration-normal group"
              >
                <span>See all integrations</span>
                <span className="text-accent transform group-hover:translate-x-1 transition-transform duration-normal">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── 7. Final CTA ── */}
      <GrainCta
        variant="dark"
        heading={
          <>
            See it for <em className="text-accent">yourself</em>.
          </>
        }
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
