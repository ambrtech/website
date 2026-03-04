import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { ProductScreenshot, MockScenarioCard, MockDashboard } from '@/components/sections/product-screenshot'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { UseCaseCards } from '@/components/sections/use-case-cards'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { PullQuote } from '@/components/sections/pull-quote'
import { CTA } from '@/components/sections/cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Admin Experience',
  description:
    'Full visibility and control over conversation training across your organization. Deploy scenarios, track engagement, identify capability gaps, and scale globally from one platform.',
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

      {/* ── 1. Hero — flagship energy, not compact ── */}
      <PageHero
        eyebrow="Admin Experience"
        heading={
          <>
            Full visibility. Full control.{' '}
            <em className="text-accent">One platform.</em>
          </>
        }
        subtitle="Build simulations that mirror the exact conversations happening inside your organization. Track engagement, identify capability gaps, and scale programs globally — all from a single, secure dashboard."
      />

      {/* ── 2. Deploy training — with scenario card visual ── */}
      <SplitContent
        eyebrow="Deploy in minutes"
        heading={
          <>
            Deploy customized training{' '}
            <em className="text-accent">without</em> the lead time
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCard />
          </ProductScreenshot>
        }
      >
        <p>
          Create roleplay simulations directly in the platform. Define the
          context, set the AI character, and establish the difficulty level.
          Your team can start training immediately. Prefer our experts to
          handle it? The Ambr AI in-house team builds fully tailored scenarios
          with just a few minutes of your input.
        </p>
        <p>
          Or start with our extensive pre-built scenario library, ready to
          roll out across your organization today. Every simulation is
          customized to your language, your scenarios, and your success
          criteria.
        </p>
      </SplitContent>

      {/* ── 3. Reporting — with dashboard visual ── */}
      <SplitContent
        reversed
        eyebrow="Actionable analytics"
        heading={
          <>
            Reporting that shapes your{' '}
            <em className="text-accent">training strategy</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Usage dashboards show who is training, how often, and what they are
          working on. But the real value goes deeper than engagement metrics.
          Ambr AI surfaces aggregated insights across your teams, revealing
          patterns in communication strengths and gaps that help you make
          smarter decisions about where to invest in development next.
        </p>
        <p>
          Export reports for stakeholder reviews. Track certifications and
          compliance. Give every training investment a measurable outcome
          that holds up to scrutiny.
        </p>
      </SplitContent>

      {/* ── 4. Journeys and certifications ── */}
      <FeatureGrid
        eyebrow="Structured development"
        heading={
          <>
            Learning paths and certifications that{' '}
            <em className="text-accent">mean something</em>
          </>
        }
        items={[
          {
            heading: 'Journeys',
            description:
              'Sequence simulations into progressive learning paths. Learners build skills in the right order — each step unlocked by demonstrated capability, not just attendance.',
          },
          {
            heading: 'Certifications',
            description:
              'Award certifications based on observed performance, not quiz scores. When someone earns a certification, it reflects what they can actually do in a live conversation.',
          },
          {
            heading: 'Capability mapping',
            description:
              'Aggregate individual simulation results into team-level capability views. Identify where communication breaks down — across functions, levels, or geographies.',
          },
          {
            heading: 'Engagement visibility',
            description:
              'See who is practicing, how often, and how they are progressing. Spot disengagement early and understand which programs drive repeat usage and real improvement.',
          },
        ]}
      />

      {/* ── 5. Pull quote — social proof ── */}
      <PullQuote
        quote="The feedback is really well structured, not overloaded with text like other tools where you don't know where to start."
        role="L&D Manager"
        company="Global Logistics Company"
      />

      {/* ── 6. Three audience cards — hub links to sub-pages ── */}
      <UseCaseCards
        eyebrow="One platform, every conversation"
        heading="Built for the teams that own training"
        items={[
          {
            heading: 'L&D Teams',
            description:
              'Build capability frameworks and track development at scale. Map gaps, design interventions, and prove the impact of your programs with structured data.',
            href: '/product/admin-experience/ld-teams',
            ctaLabel: 'Explore for L&D',
          },
          {
            heading: 'Sales Enablement',
            description:
              'Onboard and upskill your sales team with realistic conversation training. Ramp new hires faster, practice the calls that close deals, and measure readiness.',
            href: '/product/admin-experience/sales-enablement',
            ctaLabel: 'Explore for Sales',
          },
          {
            heading: 'Customer Service',
            description:
              'Drive consistency and confidence across frontline teams. Complaint handling, upsell, multilingual support — practiced and measured at scale.',
            href: '/product/admin-experience/customer-service',
            ctaLabel: 'Explore for Service',
          },
        ]}
      />

      {/* ── 7. Global scale and integrations ── */}
      <NumberedSteps
        eyebrow="Scale with confidence"
        heading="From pilot team to global rollout"
        items={[
          {
            title: 'Single dashboard',
            description:
              'Manage every team, region, and program from one place. No spreadsheets, no siloed tools, no chasing local admins for data.',
          },
          {
            title: '30+ languages',
            description:
              'Deploy simulations in the languages your teams actually work in. Learners practice in their own language — the data rolls up into one unified view.',
          },
          {
            title: 'Role-based access',
            description:
              'Give regional leads visibility into their teams without exposing the full picture. Control access at the level of detail that makes sense for each stakeholder.',
          },
        ]}
      />

      {/* ── 8. Integrations teaser ── */}
      <Section className="bg-surface-alt border-y border-border">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Integrations
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
                Works where your people{' '}
                <em className="text-accent">already learn</em>
              </h2>
              <div className="text-body text-copy-mid leading-[1.75] space-y-4">
                <p>
                  Ambr AI connects to the platforms your organization already
                  uses — your LMS, your communication tools, your SSO provider.
                  Learners access simulations without leaving their workflow.
                  Admins see data without switching dashboards.
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

      {/* ── 9. Final CTA ── */}
      <CTA />
    </>
  )
}
