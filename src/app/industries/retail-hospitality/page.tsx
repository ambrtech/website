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
  MockChatTraining,
  MockDashboard,
  MockScenarioCreator,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Retail & Hospitality',
  description:
    'Ambr AI gives retail and hospitality businesses a structured, scalable way to train every team member on customer interactions consistently.',
  path: '/industries/retail-hospitality',
})

export default function RetailHospitalityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Retail & Hospitality', href: '/industries/retail-hospitality' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Your brand lives in every customer interaction. Make sure your people are{' '}
            <em className="text-accent">ready</em> for them.
          </>
        }
        subtitle="Customer complaints. Upsell conversations. New hire onboarding. Manager feedback. Ambr AI gives retail and hospitality businesses a structured, scalable way to train every team member consistently."
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
              'Get new team members customer-ready in days. Scales instantly for seasonal hiring peaks.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Customer complaint handling',
            description:
              'Give your teams the practice to turn difficult moments into loyalty.',
            visualContent: <MockChatTraining />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Service excellence',
            description:
              'Train on recommending naturally and upselling through enhancing the experience.',
            cropFocus: 'bottom-right',
            filter: 'duotone-copper',
          },
          {
            heading: 'Manager development',
            description:
              'Delivering feedback and motivating teams under pressure.',
            visualContent: <MockDashboard />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
        ]}
      />

      <TrialScenario
        characterName="Rachel"
        characterRole="Frustrated Customer"
        characterInitials="RT"
        title="Turn around a frustrated customer before they walk out"
        scenario="A hotel guest is unhappy with their room and is threatening to leave a negative review. Resolve the situation."
      />

      <SplitContent
        eyebrow="Customized for your brand"
        heading={
          <>
            Built around <em className="text-accent">your</em> standards
          </>
        }
        body="Your products, your service workflows, your brand tone of voice. Agents practice the way you want them to sound."
        visualContent={
          <ProductScreenshot tint>
            <MockScenarioCreator />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        eyebrow="Why retail & hospitality choose Ambr AI"
        items={[
          {
            heading: 'Confidential by design',
            description:
              'Data is isolated, never shared, and never used to train external models.',
          },
          {
            heading: 'Scales consistently across every location',
            description:
              'Every team member gets the same quality of training and feedback.',
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
        subtitle="Train every team member to deliver your brand at its best."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
