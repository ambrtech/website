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
  MockScreensharing,
  MockFeedbackPanel,
  MockAdminBuilder,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Technology',
  description:
    'Ambr AI gives technology companies structured practice for sales, customer success, technical communication, and leadership conversations.',
  path: '/industries/technology',
})

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Technology', href: '/industries/technology' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Your teams build great products. Make sure they can sell, support, and{' '}
            <em className="text-accent">lead</em> just as well.
          </>
        }
        subtitle="Sales calls. Customer success conversations. Technical demos. Manager feedback. Ambr AI gives technology companies a structured way to practice all of them — before it counts."
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
            heading: 'Sales and pre-sales',
            description:
              'Discovery calls, demos, and negotiations. Train on selling to non-technical buyers.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Customer success',
            description:
              'Renewal conversations and building skills that protect revenue.',
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Technical communication',
            description:
              'Help engineers and product teams translate complexity into clarity.',
            visualContent: <MockScreensharing />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'New hire onboarding',
            description:
              'Get new team members product-fluent faster without tying up senior staff.',
            cropFocus: 'bottom-right',
            filter: 'duotone-copper',
          },
          {
            heading: 'Manager development',
            description:
              'Structured training on performance issues for new managers in rapid-growth environments.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Leadership and executive communication',
            description: 'Board presentations and investor updates.',
            cropFocus: 'bottom-left',
            filter: 'duotone-blush',
          },
        ]}
      />

      <TrialScenario
        characterName="David"
        characterRole="Engineering Lead"
        characterInitials="DK"
        title="Get stakeholder buy-in for a technical decision"
        scenario="A key enterprise client is considering switching to a competitor at renewal. Lead the retention conversation."
      />

      <SplitContent
        eyebrow="Customized for technology"
        heading={
          <>
            Built around <em className="text-accent">your</em> stack
          </>
        }
        body="Your product, your users, your market context. Every scenario reflects how your teams actually sell, support, and collaborate."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        eyebrow="Why technology companies choose Ambr AI"
        items={[
          {
            heading: 'Scales with your growth',
            description:
              'Scales your training needs instantly as you double headcount.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'Detailed, actionable feedback after every simulation.',
          },
          {
            heading: 'Confidential by design',
            description:
              'ISO certified, GDPR compliant. Data is isolated and secure.',
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
        subtitle="Practice the conversations that drive growth."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
