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
import { UseCaseCards } from '@/components/sections/use-case-cards'
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
        layout="left"
        filter="duotone"
        cropFocus="top-left"
        textureImage="/images/textures/feature-texture-alt.jpg"
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

      {/* ── 5. Three audience cards — hub links to sub-pages ── */}
      <UseCaseCards
        eyebrow="One platform, every conversation"
        heading="Built for the teams that own training"
        items={[
          {
            heading: 'L&D Teams',
            description:
              'Build capability and track development at scale.',
            href: '/product/admin-experience/ld-teams',
            ctaLabel: 'Explore for L&D',
          },
          {
            heading: 'Sales Enablement',
            description:
              'Onboard and upskill with realistic conversation training.',
            href: '/product/admin-experience/sales-enablement',
            ctaLabel: 'Explore for Sales',
          },
          {
            heading: 'Customer Service',
            description:
              'Drive consistency and confidence across frontline teams.',
            href: '/product/admin-experience/customer-service',
            ctaLabel: 'Explore for Service',
          },
        ]}
      />

      {/* ── 6. Integrations teaser ── */}
      <Section className="bg-surface-alt border-y border-border">
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

      {/* ── 7. Final CTA — dual button ── */}
      <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container text-center bg-dark text-surface">
        <Reveal>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading mb-6 text-surface">
            See it for <em className="text-accent">yourself</em>.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
