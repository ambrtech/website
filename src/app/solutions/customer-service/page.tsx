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
  'Handling a complex product complaint with incomplete information',
  'Delivering difficult news about a policy or service limitation',
  'Managing an emotional customer with sensitivity and professionalism',
  'Upselling or cross-selling during a service interaction',
  'Navigating a multi-issue call with composure',
]

export default function CustomerServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
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
        subtitle="Customer service quality directly impacts retention, satisfaction, and brand reputation. Ambr AI helps you onboard new team members faster, upskill existing teams efficiently, and maintain a consistent standard of service across every location and channel."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            How organizations use Ambr AI for customer{' '}
            <em className="text-accent italic font-light">service</em> training
          </>
        }
        items={[
          {
            heading: 'Onboarding new team members',
            description:
              'Get new hires conversation-ready in their first week with structured training and built-in certifications.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Upskilling existing teams',
            description:
              'Target specific skills across your current team: de-escalation, retention, empathy, product knowledge.',
            visualContent: <MockChatTraining />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'New products and policies',
            description:
              'Product launch next week? Policy change on Monday? Deploy new training scenarios fast so your team is prepared.',
          },
          {
            heading: 'Standardizing service quality',
            description:
              'Same scenarios, same feedback standards, same quality across every shift, location, and region.',
          },
          {
            heading: 'Multilingual teams',
            description:
              'Train in 30+ languages so your team delivers consistent service regardless of market.',
            visualContent: <MockDashboard />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Reducing ramp time',
            description:
              'Cut the time from hire to confident, independent customer interaction.',
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
            Sample scenarios. Simulations are customized to your products, policies, and brand tone of voice.
          </p>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="Easily customized to your customer service operation"
        items={[
          {
            heading: 'Your products and policies',
            description:
              'Scenarios reflect your actual product range, service policies, and common customer issues.',
          },
          {
            heading: 'Your brand tone of voice',
            description:
              'Simulations match your service style guide and communication standards.',
          },
          {
            heading: 'Your escalation paths',
            description:
              'Train on the specific workflows and handoff processes your team uses.',
          },
          {
            heading: 'Global in 30+ languages',
            description:
              'Deploy consistent service training across every market.',
          },
        ]}
      />

      <SplitContent
        className="bg-surface-white"
        eyebrow="Built for frontline teams"
        heading={<>Ultra-realistic voice AI</>}
        body="Every simulation runs through voice. Your team trains under the same conversational pressure they will face on a live call. Ultra-low latency for seamless, natural dialogue."
        visualContent={
          <ProductScreenshot tint>
            <MockVoiceConversation />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Chat-based training</>}
        body="For agents working on text-based channels, training is also available via chat."
        visualContent={
          <ProductScreenshot tint>
            <MockChatTraining />
          </ProductScreenshot>
        }
      />

      <SplitContent
        className="bg-surface-white"
        heading={<>Screensharing</>}
        body="For scenarios that involve walking through systems, dashboards, or product information with a customer."
        visualContent={
          <ProductScreenshot tint>
            <MockScreensharing />
          </ProductScreenshot>
        }
      />

      <SplitContent
        reversed
        heading={<>Body language analysis</>}
        body="Feedback on non-verbal communication for team members who interact with customers on video."
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
            Track and measure service <em className="text-accent">quality</em>
          </>
        }
        items={[
          {
            heading: 'Team-wide visibility',
            description:
              'Monitor training completion across shifts, locations, and teams. Identify where service quality is inconsistent and where targeted training is needed.',
          },
          {
            heading: 'Conversation-type analysis',
            description:
              'See which scenarios cause the most difficulty across your team: de-escalation, retention, product complaints. Target development where it will have the most impact.',
          },
          {
            heading: 'Exportable reporting',
            description:
              'Generate reports on training engagement, certification completion, and capability trends. Ready for QA reviews and stakeholder updates.',
          },
          {
            heading: 'Chase completion',
            description:
              'Track who has and has not completed required training. Follow up easily to ensure every team member meets your service standards.',
          },
        ]}
      />

      <Section>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <SimulationCard
              layout="photo-warm"
              characterName="Laura"
              characterRole="Frustrated Customer"
              characterInitials="LM"
              characterImage="/images/team/zoe-headshot.png"
              backgroundImage="/images/photography/glass-tower-pair-at-window.png"
              title="Resolve a complaint before it escalates further"
              description="A customer has called three times about the same issue. They want to speak to a manager. Can you turn it around?"
              href="/try-for-free"
              socialProof="3,112 conversations this week"
            />
          </div>
        </Reveal>
      </Section>

      <StrategyOutcomes
        className="bg-surface-white"
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
              'See where confidence is high, where specific conversation types cause problems, and where new hires need targeted support.',
          },
          {
            heading: 'Certification tracking',
            description:
              'Set and verify standards across your team. Identify gaps before they become customer satisfaction issues.',
          },
          {
            heading: 'Measurable impact',
            description:
              'Track improvement over time. Build evidence for quality assurance reviews and reporting.',
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
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
      />
    </>
  )
}
