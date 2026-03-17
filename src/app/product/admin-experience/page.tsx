import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { StatBar } from '@/components/sections/stat-bar'
import { SplitContent } from '@/components/sections/split-content'
import { ShowcaseSplit } from '@/components/sections/showcase-split'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { GrainCta } from '@/components/sections/grain-cta'
import { CustomizationColumns } from '@/components/sections/customization-columns'
import { EyebrowLine } from '@/components/animations/eyebrow-line'
import {
  ProductScreenshot,
  MockTrainingNudge,
} from '@/components/sections/product-screenshot'
import {
  MockUsageAnalytics,
  MockLearningInsights,
  MockStreaksConfig,
  MockUserGroups,
  MockModuleManagement,
} from '@/components/sections/admin-mocks'

export const metadata = createMetadata({
  title: 'Admin Experience',
  description:
    'Manage users, track engagement, surface learning insights, and roll out roleplay training across your entire organization from a single enterprise dashboard.',
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
            Everything you need to manage, measure, and{' '}
            <em className="text-accent">improve</em>.
          </>
        }
        subtitle="Ambr AI gives you a single dashboard to manage users, track engagement, surface learning insights, and roll out roleplay training across your entire organization - whether that is fifty people or fifty thousand."
      />

      {/* ── 2. Stat bar (gray border band) ── */}
      <StatBar
        items={[
          {
            value: '93%',
            label: 'of users feel better prepared for real conversations',
          },
          {
            value: 'xx%',
            label: 'would recommend Ambr AI to their colleagues',
          },
          {
            value: '740ms',
            label: 'average response time - conversations that feel genuinely human',
          },
        ]}
      />

      {/* ── 3. Usage Analytics (white) ── */}
      <SplitContent
        className="bg-surface-white"
        eyebrow="Analytics"
        heading={
          <>
            Know what is working and{' '}
            <em className="text-accent">where</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockUsageAnalytics />
          </ProductScreenshot>
        }
      >
        <p>
          Track usage across simulations, AI coaching, and presentation
          modules. Monitor engagement over time and understand exactly where
          your teams are spending their time and how they are progressing.
        </p>
        <ul className="space-y-2 mt-2">
          {[
            'Completion rates and progress tracking across your organization',
            'Usage breakdowns by module, category, and scenario',
            'Time-based trends to track adoption and engagement over time',
            'Filter by date range, team, or any dimension that matters to you',
          ].map((item) => (
            <li
              key={item}
              className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft/60"
            >
              {item}
            </li>
          ))}
        </ul>
      </SplitContent>

      {/* ── 4. Learning Insights (gray) ── */}
      <SplitContent
        reversed
        eyebrow="Insights"
        heading={
          <>
            Understand where your teams need to{' '}
            <em className="text-accent">develop</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockLearningInsights />
          </ProductScreenshot>
        }
      >
        <p>
          Ambr AI surfaces aggregated learning insights based on completed
          simulations, revealing communication strengths and development areas
          across teams and cohorts.
        </p>
        <ul className="space-y-2 mt-2">
          {[
            'Insights on strengths and gaps across any cohort',
            'Metrics like talk/listen balance and speech pace across teams',
            'Track whether people are improving over time',
            'Export to CSV or PDF for stakeholder reporting',
          ].map((item) => (
            <li
              key={item}
              className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft/60"
            >
              {item}
            </li>
          ))}
        </ul>
      </SplitContent>

      {/* ── 5. Journeys & Certifications (white) ── */}
      <SplitContent
        className="bg-surface-white"
        eyebrow="Structured learning"
        heading={
          <>
            Guide your teams from first simulation to{' '}
            <em className="text-accent">certified</em>
          </>
        }
        visualContent={
          <div className="relative rounded-brand-lg overflow-hidden">
            <Image
              src="/images/photography/abstract-topo-charcoal-contours.jpeg"
              alt=""
              width={800}
              height={600}
              className="w-full h-auto object-cover filter-duotone"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 pointer-events-none vignette-dark" />
            <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6">
              <div className="bg-surface-white rounded-brand border border-border shadow-card p-5 md:p-6">
                <MockTrainingNudge />
              </div>
            </div>
          </div>
        }
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-label tracking-heading text-dark mb-2">
              Journeys
            </h3>
            <p className="text-body-sm text-copy-mid leading-relaxed">
              Create curated sequences of scenarios that build skills
              progressively. Assign journeys to individuals or groups, set due
              dates, and let automatic reminders keep people on track. All
              journey progress feeds directly into your analytics.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-heading text-label tracking-heading text-dark mb-2">
              Certifications
            </h3>
            <p className="text-body-sm text-copy-mid leading-relaxed">
              Set competency standards and verify that employees meet them.
              Certification can be automatic - based on simulation performance
              - or include a manual review step. Track completion, follow up
              with individuals, and give stakeholders clear evidence of
              capability.
            </p>
          </div>
        </div>
      </SplitContent>

      {/* ── 6. Engagement & Nudges (gray) ── */}
      <SplitContent
        reversed
        eyebrow="Drive engagement"
        heading={
          <>
            Make sure nobody falls through the{' '}
            <em className="text-accent">cracks</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockStreaksConfig />
          </ProductScreenshot>
        }
      >
        <p>
          See whether users have achieved simulation objectives or still have
          scenarios to complete. Easily identify who needs a nudge and send
          reminders directly from the dashboard.
        </p>
        <div className="space-y-5 mt-4 border-t border-border pt-5">
          {[
            {
              title: 'Streaks',
              description:
                'Configure streaks to encourage regular engagement. Set the frequency, choose a target, and let automatic reminders do the rest via email, Slack, or Microsoft Teams.',
            },
            {
              title: 'Completion tracking',
              description:
                'Monitor progress against simulation objectives and journey milestones. Spot who is falling behind and send nudges in a few clicks.',
            },
            {
              title: 'Admin digest',
              description:
                'A regular summary email surfaces the most important insights and engagement data, so you stay informed without logging in.',
            },
          ].map((feature) => (
            <div key={feature.title}>
              <h3 className="font-heading text-label tracking-heading text-dark mb-1.5">
                {feature.title}
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SplitContent>

      {/* ── 7. User & Group Management (white) ── */}
      <SplitContent
        className="bg-surface-white"
        eyebrow="Management"
        heading={
          <>
            Your people, your{' '}
            <em className="text-accent">rules</em>.
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockUserGroups />
          </ProductScreenshot>
        }
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-label tracking-heading text-dark mb-2">
              Users
            </h3>
            <p className="text-body-sm text-copy-mid leading-relaxed">
              Add users through SSO and directory sync, or bulk upload via CSV.
              See individual activity at a glance - usage, time spent, last
              active - and manage access to specific modules from a single view.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-label tracking-heading text-dark mb-2">
              Groups
            </h3>
            <p className="text-body-sm text-copy-mid leading-relaxed">
              Create groups based on any factor - team, location, department,
              seniority. Use groups to filter analytics, assign journeys, or
              control what content different teams can see.
            </p>
          </div>
        </div>
      </SplitContent>

      {/* ── 7b. Module Management (gray) ── */}
      <ShowcaseSplit
        layout="right"
        filter="duotone-blush"
        cropFocus="bottom-right"
        visualContent={<MockModuleManagement />}
        heading={
          <>
            Control what your teams can{' '}
            <em className="text-accent">access</em>
          </>
        }
        features={[
          {
            heading: 'Module management',
            description:
              'Control which modules are available across your organization. Enable simulations, AI coaching, or presentation modules for all users or restrict them to specific groups.',
          },
          {
            heading: 'Content visibility',
            description:
              'Choose which scenarios, journeys, and categories are visible to different teams. Give every group the training that is relevant to them.',
          },
          {
            heading: 'SCORM and xAPI',
            description:
              'Deliver training through your existing LMS with full SCORM and xAPI compatibility. Completion data flows back into your reporting automatically.',
          },
        ]}
      />

      {/* ── 8. Use Cases (white) ── */}
      <Section className="bg-surface-white">
        <Reveal>
          <EyebrowLine />
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
            Built for your team
          </p>
          <h2 className="font-heading text-section leading-[1.2] tracking-heading max-w-[700px] mb-14">
            One dashboard for every conversation that{' '}
            <em className="text-accent">matters</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              role: 'For L&D Leaders',
              heading: 'L&D Teams',
              description:
                'Build capability frameworks, structure development journeys, and track skills progression at scale. Aggregated insights across the entire organization help you see where to invest and demonstrate impact to stakeholders.',
            },
            {
              role: 'For Sales Enablement Managers',
              heading: 'Sales Enablement',
              description:
                'Onboard new hires with structured roleplay sequences and upskill experienced reps with advanced scenarios. Track adoption and identify which conversation skills need the most attention across your team.',
            },
            {
              role: 'For Customer Service Directors',
              heading: 'Customer Service',
              description:
                'Drive consistency across frontline teams. Roll out standardized training, certify readiness, and use engagement data to ensure every team member is equipped for the conversations they face every day.',
            },
          ].map((useCase, i) => (
            <Reveal key={useCase.heading} delay={i * 60}>
              <div className="border-t border-border pt-8">
                <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent mb-3">
                  {useCase.role}
                </p>
                <h3 className="font-heading text-label leading-[1.3] tracking-heading mb-4 text-dark">
                  {useCase.heading}
                </h3>
                <p className="text-body-sm text-copy-mid leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 9. Customization (white — component has own bg) ── */}
      <CustomizationColumns />

      {/* ── 10. Integrations ── */}
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
                  tools your organization already uses. SCORM and xAPI
                  compatible. SSO and directory sync included. No disruption.
                  No migration.
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

      {/* ── 11. Final CTA ── */}
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
