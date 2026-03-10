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
  'Having a return-to-work conversation',
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
        subtitle="The quality of management conversations directly impacts team performance, employee satisfaction, and retention. Ambr AI gives your organization a structured, scalable way to train every manager for these moments."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How teams use Ambr AI for{' '}
            <em className="text-accent italic font-light">management</em>
          </>
        }
        items={[
          {
            heading: 'Onboarding new managers',
            description:
              'Equip first-time managers with skills before they need them.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing managers',
            description:
              'Strengthen skills across your current population.',
          },
          {
            heading: 'New frameworks and processes',
            description:
              'Train managers on how to communicate performance frameworks or organizational change.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Preparing for sensitive conversations',
            description:
              'Restructures, grievances, and performance issues.',
            visualContent: <MockBodyLanguage />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
        ]}
      />

      <Section>
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
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="Customized to your organization"
        items={[
          {
            heading: 'Aligned to your internal policies',
            description:
              'Reflected in your actual processes and guidelines.',
          },
          {
            heading: 'Focused on your priorities',
            description:
              'Build training around the conversation types your managers need most.',
          },
          {
            heading: 'Your terminology',
            description:
              'Specific language, not generic corporate phrasing.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Deploy consistent training across every region.',
          },
        ]}
      />

      <SplitContent
        eyebrow="Built for how leaders actually learn"
        heading={<>Ultra-realistic voice AI</>}
        body="Real-time conversations where the AI adapts to tone and approach. Your managers train the way they lead: through voice."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Presentation training</>}
        body="Rehearse town halls, board updates, and team announcements with an AI audience that reacts and asks questions in real time."
        visualContent={
          <ProductScreenshot tint>
            <MockPresentationTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        heading={<>Body language analysis</>}
        body="Feedback on non-verbal communication including eye contact, posture, gestures, and facial expression. Essential for leaders who communicate on video."
        visualContent={
          <ProductScreenshot tint>
            <MockBodyLanguage />
          </ProductScreenshot>
        }
      />

      <Section>
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
              'See where confidence is growing and where gaps persist across your management population.',
          },
          {
            heading: 'Structured programs',
            description:
              'Deploy Journeys and certifications to build skills progressively, not as one-off events.',
          },
          {
            heading: 'Actionable data',
            description:
              'Shape your leadership strategy with real evidence from thousands of practice conversations.',
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
