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
  'Presenting a solution to a multi-stakeholder buying committee',
  'Negotiating contract terms with a procurement lead',
  'Recovering a deal that has gone cold',
  'Onboarding a new team member with your specific sales methodology',
]

export default function SalesNegotiationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
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
        subtitle="A structured approach to sales conversation training. Ambr AI gives sales leaders and sales enablement teams a scalable platform to onboard new hires, upskill existing team members, and standardize training across every team and region. The result: stronger conversations, faster ramp times, and measurable improvement across your sales function."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How organizations use Ambr AI for{' '}
            <em className="text-accent italic font-light">sales</em> training
          </>
        }
        items={[
          {
            heading: 'Onboarding new team members',
            description:
              'New hires start training from day one. Structured Journeys build competency before they get on a live call.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing teams',
            description:
              'Sharpen skills across your current sales organization with targeted, repeatable training on the conversations that matter.',
            visualContent: <MockScreensharing />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'New products and frameworks',
            description:
              'Launching a new product? Rolling out a new sales methodology? Ensure your teams are always working with the latest knowledge and best practice.',
          },
          {
            heading: 'Standardizing across teams',
            description:
              'Systematize your sales training. Consistent scenarios, consistent feedback, consistent standards across every team and region.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Pipeline-specific training',
            description:
              'Build simulations around your actual deals, buyer personas, and competitive objections.',
          },
          {
            heading: 'Presentation and pitch rehearsal',
            description:
              'Team members rehearse pitches, QBRs, and conference presentations with an AI audience that challenges their delivery.',
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
            Sample scenarios. Every simulation is customized to your product, market, and sales process. Or choose from our pre-built sales scenario library.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="Easily customized to your sales environment"
        items={[
          {
            heading: 'Your exact product',
            description:
              'Simulations reference your actual product, pricing, and value proposition.',
          },
          {
            heading: 'Your frameworks',
            description:
              'Train on your specific methodology, whether that is MEDDIC, Challenger, SPIN, or your own.',
          },
          {
            heading: 'Your objections and personas',
            description:
              'Build scenarios around the real pushback and buyer types your team encounters.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Deploy consistent sales training across every market, culturally adjusted for local context.',
          },
        ]}
      />

      <SplitContent
        className="bg-surface-white"
        eyebrow="Built for sales teams"
        heading={<>Ultra-realistic voice AI</>}
        body="Your team trains the way they sell: through voice. The AI adapts in real time, asks unexpected questions, and responds to what your team member actually says."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Screensharing built in</>}
        body="Team members training on product walkthroughs, demos, or proposal presentations share their screen during the simulation, just like a real sales call."
        visualContent={
          <ProductScreenshot tint>
            <MockScreensharing />
          </ProductScreenshot>
        }
      />

      <SplitContent
        className="bg-surface-white"
        heading={<>Presentation training</>}
        body="Rehearse pitches, QBRs, and conference presentations with an AI audience that reacts, asks questions, and challenges delivery."
        visualContent={
          <ProductScreenshot tint>
            <MockPresentationTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Body language analysis</>}
        body="Feedback on non-verbal communication, so your team knows how they come across on video calls."
        visualContent={
          <ProductScreenshot tint>
            <MockBodyLanguage />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        className="bg-surface-white"
        heading={
          <>
            Track and measure sales <em className="text-accent">capability</em>
          </>
        }
        items={[
          {
            heading: 'Onboarding progress',
            description:
              'Track where each new hire is in their training journey. Monitor completion rates and identify who needs additional support before they go live.',
          },
          {
            heading: 'Team-level insights',
            description:
              'See which conversation types your sales team finds most challenging: objection handling, discovery, negotiation, closing. Focus investment accordingly.',
          },
          {
            heading: 'Exportable reporting',
            description:
              'Generate reports on training engagement, completion, and capability trends across teams, regions, and roles. Share with sales leadership in minutes.',
          },
          {
            heading: 'Certification tracking',
            description:
              'Set competency benchmarks for key sales conversations and verify who has met them before they engage with prospects.',
          },
        ]}
      />

      <Section>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <SimulationCard
              layout="photo-warm"
              characterName="Sarah"
              characterRole="VP of Operations"
              characterInitials="SC"
              characterImage="/images/team/zoe-headshot.png"
              backgroundImage="/images/photography/glass-tower-pair-at-window.png"
              title="Win over a skeptical buyer in under 15 minutes"
              description="A VP with 15 minutes and no context. Qualify the opportunity and build enough interest for a follow-up."
              href="/try-for-free"
              socialProof="1,204 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <StrategyOutcomes
        className="bg-surface-white"
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
              'See how your team handles pressure: where objection handling breaks down, which conversation types need reinforcement, and where confidence drops across the team.',
          },
          {
            heading: 'Evidence-based development',
            description:
              'Shape enablement programs around real data, not anecdotal feedback from ride-alongs.',
          },
          {
            heading: 'Faster ramp time',
            description:
              'Structured onboarding Journeys get new hires conversation-ready in days, with built-in certifications to verify competency.',
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
