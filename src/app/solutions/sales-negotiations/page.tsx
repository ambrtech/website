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
  MockScreensharing,
  MockFeedbackPanel,
  MockPresentationTraining,
  MockBodyLanguage,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Sales & Negotiations Training',
  description:
    'Onboard faster and upskill continuously. AI conversation training for sales teams covering objection handling, discovery, negotiation, and pitch rehearsal.',
  path: '/solutions/sales-negotiations',
})

const scenarios = [
  'Handling pricing objections from a skeptical CFO',
  'Running a discovery call with limited information',
  'Presenting a solution to a multi-stakeholder committee',
  'Negotiating contract terms with a procurement lead',
  'Recovering a deal that has gone cold',
  'Onboarding a new team member with your specific methodology',
]

export default function SalesNegotiationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Sales & Negotiations', href: '/solutions/sales-negotiations' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Onboard faster. Upskill <em className="text-accent">continuously</em>.
          </>
        }
        subtitle="Ambr AI gives sales leaders a scalable platform to onboard new hires, upskill existing team members, and standardize training across every region. The result: stronger conversations, faster ramp times, and measurable improvement."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How teams use Ambr AI for{' '}
            <em className="text-accent italic font-light">sales</em>
          </>
        }
        items={[
          {
            heading: 'Onboarding new team members',
            description:
              'New hires build competency before their first live call.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing teams',
            description:
              'Targeted, repeatable training on discovery and negotiation.',
            visualContent: <MockScreensharing />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'New products and frameworks',
            description:
              'Train your team on how to talk about new launches.',
          },
          {
            heading: 'Standardizing across teams',
            description:
              'Consistent scenarios and feedback standards globally.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Pipeline-specific training',
            description:
              'Simulations built around your actual deals and objections.',
          },
          {
            heading: 'Presentation and pitch rehearsal',
            description:
              'Rehearse pitches and QBRs with AI interaction.',
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
        eyebrow="Customized to your sales motion"
        items={[
          {
            heading: 'Your exact product',
            description:
              'Reference your actual value proposition, not a generic placeholder.',
          },
          {
            heading: 'Your frameworks',
            description:
              'Train on MEDDIC, Challenger, SPIN, or your own proprietary methodology.',
          },
          {
            heading: 'Your objections and personas',
            description:
              'Build scenarios around the pushback your team actually encounters.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Culturally adjusted for every market you sell into.',
          },
        ]}
      />

      <SplitContent
        eyebrow="Built for sales teams"
        heading={<>Ultra-realistic voice AI</>}
        body="Your team trains the way they sell: through voice. Real-time conversations with AI that adapts to tone, pace, and approach."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Screensharing built in</>}
        body="Share your screen during product walkthroughs and demos. The AI asks questions, pushes back, and reacts to what you show — just like a real prospect."
        visualContent={
          <ProductScreenshot tint>
            <MockScreensharing />
          </ProductScreenshot>
        }
      />

      <SplitContent
        heading={<>Presentation training</>}
        body="Rehearse pitches, QBRs, and executive briefings with an AI audience that reacts and asks questions in real time."
        visualContent={
          <ProductScreenshot tint>
            <MockPresentationTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Body language analysis</>}
        body="Feedback on non-verbal communication for video calls. Eye contact, posture, gestures, and facial expression — the signals that close deals."
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
              characterName="Sarah"
              characterRole="VP of Operations"
              characterInitials="SC"
              title="Win over a skeptical buyer in under 15 minutes"
              description="A VP with 15 minutes and no context. Qualify the opportunity and build enough interest for a follow-up."
              href="/try-for-free"
              socialProof="1,204 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <StrategyOutcomes
        eyebrow="Drive your sales enablement strategy"
        heading={
          <>
            From intuition to <em className="text-accent">evidence</em>
          </>
        }
        items={[
          {
            heading: 'Visibility into real capability',
            description:
              'See where objection handling breaks down, where discovery calls stall, and where reps need targeted support.',
          },
          {
            heading: 'Evidence-based development',
            description:
              'Shape coaching programs and enablement strategy around real data, not manager impressions.',
          },
          {
            heading: 'Faster ramp time',
            description:
              'Onboarding Journeys get new hires conversation-ready in days, not months.',
          },
        ]}
      />

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> sales team.
          </>
        }
        subtitle="Stronger conversations. Faster ramp. Measurable results."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
