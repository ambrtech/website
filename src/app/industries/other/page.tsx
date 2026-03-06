import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { AccordionShowcase } from '@/components/sections/accordion-showcase'
import { TrialScenario } from '@/components/sections/trial-scenario'
import { SplitContent } from '@/components/sections/split-content'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { GrainCta } from '@/components/sections/grain-cta'
import {
  ProductScreenshot,
  MockVoiceConversation,
  MockFeedbackPanel,
  MockDashboard,
  MockScenarioCreator,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Industries',
  description:
    'Ambr AI is built for any organization where communication skills matter. Structured practice for the conversations that shape outcomes, in any industry.',
  path: '/industries/other',
})

export default function OtherIndustriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Other Industries', href: '/industries/other' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Every organization has conversations that shape{' '}
            <em className="text-accent">outcomes</em>. Most of them never get formally
            practiced.
          </>
        }
        subtitle="Whatever your industry, the conversations that determine whether your people succeed rarely come with structured training behind them. Ambr AI is built for any organization where communication skills matter."
      />

      <AccordionShowcase
        variant="dark"
        heading={
          <>
            Where it makes the{' '}
            <em className="text-accent italic font-light">difference</em>
          </>
        }
        items={[
          {
            heading: 'New hire onboarding',
            description:
              'Get team members up to speed faster without depending on manager availability.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Sales and business development',
            description: 'Pitches, negotiations, and renewals.',
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Customer and stakeholder communication',
            description: 'Client meetings and presentations.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'bottom-right',
            filter: 'duotone-copper',
          },
          {
            heading: 'Manager development',
            description:
              'Delivering honest feedback and developing teams.',
            visualContent: <MockDashboard />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Leadership communication',
            description: 'Board presentations and change management.',
            cropFocus: 'bottom-left',
            filter: 'duotone-blush',
          },
          {
            heading: 'Change management',
            description:
              'Restructures and org changes where landing the message is high stakes.',
            cropFocus: 'center',
            filter: 'duotone',
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Industries we work with"
        items={[
          {
            heading: 'Financial Services',
            description:
              'Client advisory, complaint handling, and regulatory conversations.',
          },
          {
            heading: 'Healthcare',
            description:
              'Patient communication and multidisciplinary team discussions.',
          },
          {
            heading: 'Manufacturing & Logistics',
            description:
              'Safety conversations, shift handovers, and supplier negotiations.',
          },
          {
            heading: 'Government & Public Sector',
            description: 'Stakeholder engagement and policy communication.',
          },
          {
            heading: 'Education',
            description: 'Parent-teacher conversations and student support.',
          },
          {
            heading: 'Energy & Utilities',
            description: 'Customer communication and safety briefings.',
          },
        ]}
      />

      <TrialScenario
        characterName="Pat"
        characterRole="HR Director"
        characterInitials="PR"
        title="Practice a restructure conversation with sensitivity"
        scenario="You are giving an employee feedback on their recent performance. They become defensive. Navigate the conversation."
      />

      <SplitContent
        eyebrow="Customized for your organization"
        heading={
          <>
            Built around <em className="text-accent">your</em> world
          </>
        }
        body="Your scenarios, your language, your culture. Every simulation reflects how your teams actually work."
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        eyebrow="Why companies choose Ambr AI"
        items={[
          {
            heading: 'Scales consistently across your entire organization',
            description:
              'Consistent quality for thousands of people across multiple locations.',
          },
          {
            heading: 'Confidential by design',
            description:
              'Conversations stay private. ISO certified, GDPR compliant.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'Detailed, actionable feedback after every simulation.',
          },
          {
            heading: 'Global, and actually global',
            description: '30+ languages, adjusted for cultural context.',
          },
        ]}
      />

      <GrainCta
        variant="dark"
        heading={
          <>
            See what Ambr AI looks like for <em className="text-accent">your</em> team.
          </>
        }
        subtitle="Whatever your industry, practice the conversations that matter most."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
