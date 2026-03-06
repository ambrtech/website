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
  MockChatTraining,
  MockDashboard,
  MockScreensharing,
  MockBodyLanguage,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Customer Service Training',
  description:
    'Effective, consistent customer service at scale. AI conversation training for de-escalation, retention, complaint handling, and frontline team onboarding.',
  path: '/solutions/customer-service',
})

const scenarios = [
  'De-escalating an angry customer threatening to leave',
  'Handling a complex product complaint',
  'Delivering difficult news about a policy',
  'Managing an emotional customer with sensitivity',
  'Upselling or cross-selling during a service interaction',
  'Navigating a multi-issue call with composure',
]

export default function CustomerServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Solutions', href: '/solutions/management-leadership' },
          { name: 'Customer Service', href: '/solutions/customer-service' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Effective, consistent customer service at <em className="text-accent">scale</em>
          </>
        }
        subtitle="Customer service quality directly impacts retention and brand reputation. Ambr AI helps you onboard new team members faster and maintain a consistent standard across every location."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How teams use Ambr AI for{' '}
            <em className="text-accent italic font-light">service</em>
          </>
        }
        items={[
          {
            heading: 'Onboarding new team members',
            description:
              'Get hires conversation-ready in their first week.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing teams',
            description:
              'Target skills like de-escalation, retention, and empathy.',
            visualContent: <MockChatTraining />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'New products and policies',
            description:
              'Deploy new training scenarios fast for launches and policy changes.',
          },
          {
            heading: 'Standardizing service quality',
            description:
              'Same scenarios and feedback across every shift and location.',
          },
          {
            heading: 'Multilingual teams',
            description:
              'Consistent service regardless of market or language.',
            visualContent: <MockDashboard />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Reducing ramp time',
            description:
              'Cut the time from hire to confident customer interaction.',
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
        eyebrow="Customized to your service operation"
        items={[
          {
            heading: 'Your products and policies',
            description:
              'Reflect your actual product range, service workflows, and return policies.',
          },
          {
            heading: 'Your brand tone of voice',
            description:
              'Matches your service style guide so agents practice the way you want them to sound.',
          },
          {
            heading: 'Your escalation paths',
            description:
              'Train on your specific handoff processes, not generic escalation flows.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Consistent training across every market you serve.',
          },
        ]}
      />

      <SplitContent
        eyebrow="Built for frontline teams"
        heading={<>Ultra-realistic voice AI</>}
        body="Train under the same pressure as a live call. The AI adapts in real time to tone, pace, and emotional state — so your agents are ready for anything."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Chat-based training</>}
        body="Training available for agents on text-based channels. Practice handling complaints, escalations, and multi-issue conversations through chat."
        visualContent={
          <ProductScreenshot tint>
            <MockChatTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        heading={<>Screensharing</>}
        body="For scenarios that involve walking through dashboards, product information, or troubleshooting steps with a customer on the line."
        visualContent={
          <ProductScreenshot tint>
            <MockScreensharing />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Body language analysis</>}
        body="Feedback for team members who interact on video. Eye contact, posture, and facial expression all shape the customer experience."
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
              characterName="Laura"
              characterRole="Frustrated Customer"
              characterInitials="LM"
              title="Resolve a complaint before it escalates further"
              description="A customer has called three times about the same issue. They want to speak to a manager. Can you turn it around?"
              href="/try-for-free"
              socialProof="3,112 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <StrategyOutcomes
        eyebrow="Drive your customer service strategy"
        heading={
          <>
            From anecdote to <em className="text-accent">evidence</em>
          </>
        }
        items={[
          {
            heading: 'Visibility across your team',
            description:
              'See where new hires need targeted support and where experienced agents have gaps.',
          },
          {
            heading: 'Certification tracking',
            description:
              'Set and verify standards across your team with structured certification programs.',
          },
          {
            heading: 'Measurable impact',
            description:
              'Track improvement over time and build evidence for QA reviews and leadership reporting.',
          },
        ]}
      />

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> service team.
          </>
        }
        subtitle="Consistent quality. Faster onboarding. Happier customers."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
