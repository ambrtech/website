import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { AccordionShowcase } from '@/components/sections/accordion-showcase'
import { SplitContent } from '@/components/sections/split-content'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { GrainCta } from '@/components/sections/grain-cta'
import { SimulationCard } from '@/components/ui/simulation-card'
import { StrategyOutcomes } from '@/components/sections/strategy-outcomes'
import {
  ProductScreenshot,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockPresentationTraining,
  MockBodyLanguage,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Management & Leadership Training',
  description:
    'Give your managers the skills for the conversations that matter most. Structured, scalable AI conversation training for performance feedback, coaching, and difficult discussions.',
  path: '/solutions/management-leadership',
})

const scenarios = [
  'Delivering difficult performance feedback',
  'Addressing persistent underperformance',
  'Having a return-to-work conversation after long-term absence',
  'Managing conflict between team members',
  'Communicating organizational change to a resistant team',
  'Running a high-stakes 1:1',
]

export default function ManagementLeadershipPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Management & Leadership', href: '/solutions/management-leadership' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Give your managers the skills for the conversations that{' '}
            <em className="text-accent">matter</em> most
          </>
        }
        subtitle="The quality of management conversations directly impacts team performance, employee satisfaction, and retention. When managers handle feedback, restructures, and grievances well, the entire organization benefits. When they don&apos;t, the cost is felt everywhere. Ambr AI gives your organization a structured, scalable way to train every manager for these moments."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How organizations use Ambr AI for management{' '}
            <em className="text-accent italic font-light">training</em>
          </>
        }
        items={[
          {
            heading: 'Onboarding new managers',
            description:
              'Equip first-time managers with conversation skills before they need them.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing managers',
            description:
              'Strengthen skills across your current management population with structured, repeatable training.',
          },
          {
            heading: 'New frameworks and processes',
            description:
              'Rolling out a new performance management framework, internal policy, or organizational change? Train your managers on how to communicate it.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Preparing for sensitive conversations',
            description:
              'Restructures, grievances, performance issues. Build confidence for the conversations that carry the most weight.',
            visualContent: <MockBodyLanguage />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
        ]}
      />

      <Section className="bg-surface-white">
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Example scenarios
          </p>
          <div className="flex flex-wrap gap-3">
            {scenarios.map((s) => (
              <span key={s} className="px-4 py-2.5 border border-border rounded-brand-sm bg-surface-white text-body-sm text-copy-mid hover:border-accent-soft transition-colors">
                {s}
              </span>
            ))}
          </div>
          <p className="text-caption text-copy-light italic leading-relaxed mt-5 border-l-2 border-accent-soft pl-4 max-w-lg">
            These are examples. Every scenario can be customized to your organization, or choose from our pre-built scenario library.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="Easily customized to how your organization works"
        items={[
          {
            heading: 'Aligned to your internal policies',
            description:
              'Scenarios reflect your actual processes, performance frameworks, and guidelines.',
          },
          {
            heading: 'Focused on your priorities',
            description:
              'Build training around the conversation types your managers need the most.',
          },
          {
            heading: 'Your terminology',
            description:
              'Simulations use your organization\u2019s specific language, not generic corporate phrasing.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Deploy consistent management training across every region.',
          },
        ]}
      />

      <SplitContent
        className="bg-surface-white"
        eyebrow="Built for how leaders actually learn"
        heading={<>Ultra-realistic voice AI</>}
        body="Every simulation is a real-time voice conversation. Ultra-low latency. The AI adapts to tone, word choice, and approach, creating genuine conversational pressure."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Presentation training</>}
        body="Leaders preparing for town halls, board updates, or all-hands meetings rehearse with an AI audience that reacts and challenges in real time."
        visualContent={
          <ProductScreenshot tint>
            <MockPresentationTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        className="bg-surface-white"
        heading={<>Body language analysis</>}
        body="Feedback on non-verbal communication, so managers know how they come across visually as well as verbally."
        visualContent={
          <ProductScreenshot tint>
            <MockBodyLanguage />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        heading={
          <>
            Track and measure management <em className="text-accent">capability</em>
          </>
        }
        items={[
          {
            heading: 'Engagement tracking',
            description:
              'Monitor which managers are completing training, how often, and across which conversation types. Chase completion with ease.',
          },
          {
            heading: 'Capability insights',
            description:
              'See where your management population is strong and where gaps persist. Identify which conversation types need the most attention.',
          },
          {
            heading: 'Exportable reporting',
            description:
              'Generate stakeholder-ready reports on training engagement, completion rates, and capability trends across teams and regions.',
          },
          {
            heading: 'Certification tracking',
            description:
              'Set competency standards for management conversations and track who has met them.',
          },
        ]}
      />

      <Section className="bg-surface-white">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <SimulationCard
              layout="live-call"
              characterName="Mark"
              characterRole="Direct Report"
              characterInitials="MR"
              title="Practice giving tough feedback without damaging the relationship"
              description="Your direct report has missed two consecutive deadlines on a critical project. Address performance while keeping them motivated."
              href="/try-for-free"
              socialProof="2,847 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <StrategyOutcomes
        eyebrow="Drive your L&D strategy"
        heading={
          <>
            Evidence-based leadership <em className="text-accent">development</em>
          </>
        }
        items={[
          {
            heading: 'Capability patterns',
            description:
              'See where confidence is growing, where gaps persist, and which conversations your managers are avoiding entirely.',
          },
          {
            heading: 'Structured programs',
            description:
              'Deploy Journeys and certifications to build skills progressively across your management population.',
          },
          {
            heading: 'Actionable data',
            description:
              'Shape your leadership development strategy with real evidence, not anecdotal feedback.',
          },
        ]}
      />

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> leaders.
          </>
        }
        subtitle="Structured practice for the conversations that shape your culture."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
