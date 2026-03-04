import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { CTA } from '@/components/sections/cta'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'L&D Teams',
  description:
    'Aggregate conversation data into development insights. Map capability gaps, build structured learning paths, and track engagement across your entire organization.',
  path: '/product/admin-experience/ld-teams',
})

export default function LDTeamsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
          { name: 'L&D Teams', href: '/product/admin-experience/ld-teams' },
        ]}
      />

      <PageHero
        compact
        eyebrow="For L&D Teams"
        heading={
          <>
            Insights that shape your{' '}
            <em className="text-accent">development strategy</em>
          </>
        }
        subtitle="Aggregated, anonymized data on how your people communicate under pressure: where they hesitate, where they excel, and what patterns emerge across cohorts. The insight that shapes your training strategy, not just your completion rates."
      />

      <StatBar
        items={[
          {
            value: '30+',
            label: 'Languages for global rollout',
          },
          {
            value: '100%',
            label: 'Of sessions produce structured capability data',
          },
          {
            value: 'Real-time',
            label: 'Aggregated insights across teams and regions',
          },
        ]}
      />

      <SplitContent
        eyebrow="From insight to action"
        heading={
          <>
            Move from conversation data to{' '}
            <em className="text-accent">capability maps</em>
          </>
        }
      >
        <p>
          Most training platforms tell you who completed a course. Ambr AI tells
          you who can actually handle the conversation. Aggregated data across
          simulations surfaces patterns in how teams communicate, negotiate, and
          respond to pressure — so you can design interventions that target real
          gaps, not assumed ones.
        </p>
        <p>
          Build structured learning paths based on demonstrated capability, not
          self-reported confidence. Assign certifications that mean something.
          Track whether development programs actually shift behavior over time.
        </p>
      </SplitContent>

      <FeatureGrid
        eyebrow="Capability intelligence"
        heading={
          <>
            The data your development programs have been{' '}
            <em className="text-accent">missing</em>
          </>
        }
        items={[
          {
            heading: 'Capability mapping',
            description:
              'Aggregate individual simulation results into team-level capability views. Identify where communication breaks down — across functions, levels, or geographies.',
          },
          {
            heading: 'Structured learning paths',
            description:
              'Use Journeys to sequence simulations into progressive development tracks. Learners build skills in the right order, with each step unlocked by demonstrated capability.',
          },
          {
            heading: 'Certifications with substance',
            description:
              'Award certifications based on observed performance, not quiz scores. When a learner earns a certification, it reflects what they can actually do in a live conversation.',
          },
          {
            heading: 'Engagement visibility',
            description:
              'See who is practicing, how often, and how they are progressing. Spot disengagement early and understand which programs drive repeat usage.',
          },
        ]}
      />

      <SplitContent
        reversed
        eyebrow="Your frameworks, your language"
        heading={
          <>
            Customization that reflects how{' '}
            <em className="text-accent">you</em> think about development
          </>
        }
      >
        <p>
          Your competency models. Your behavioral indicators. Your language.
          Ambr AI scenarios are built around the way your organization actually
          talks about development, not generic off-the-shelf content.
        </p>
        <p>
          Build them yourself in the platform, or brief our team and we will
          create them for you. Either way, insights land in language
          stakeholders recognize and capability data feeds into existing
          talent processes without translation.
        </p>
      </SplitContent>

      {/* Scale and evidence — combined section */}
      <Section className="bg-surface-alt border-y border-border">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Global scale
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Scale with <em className="text-accent">full control</em>
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                Roll out programs across functions, geographies, and languages
                from a single dashboard. Ambr AI supports 30+ languages with
                culturally adjusted simulations, so your global teams get the
                same quality of training regardless of location.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Built for L&D rigor
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Training data that holds up to{' '}
              <em className="text-accent">scrutiny</em>
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                When the board asks whether your development program is working,
                you need more than completion rates. Ambr AI gives you
                longitudinal capability data — how communication skills shift
                over time, which interventions drive the most change, and where
                to invest next.
              </p>
              <p>
                Export structured reports for stakeholder reviews. Integrate with
                your LMS or HRIS. Give every conversation in your training
                program a measurable outcome.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  )
}
