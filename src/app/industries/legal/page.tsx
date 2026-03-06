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
  MockPresentationTraining,
  MockAdminBuilder,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Legal',
  description:
    'Ambr AI gives law firms a structured, confidential way to develop the communication skills that define careers and win mandates.',
  path: '/industries/legal',
})

export default function LegalPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Legal', href: '/industries/legal' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Your lawyers earn trust in every conversation. Make sure they&apos;re ready
            for <em className="text-accent">each</em> one.
          </>
        }
        subtitle="Client advice. Negotiations. Difficult billing conversations. Performance feedback. Ambr AI gives law firms a structured, confidential way to develop the communication skills that define careers — and win mandates."
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
            heading: 'Client relationship management',
            description:
              'Delivering difficult advice and managing expectations.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Negotiation preparation',
            description:
              'Walk into settlement discussions and mediations with your approach already tested.',
            visualContent: <MockFeedbackPanel />,
            cropFocus: 'top-left',
            filter: 'duotone-cream',
          },
          {
            heading: 'Difficult billing discussions',
            description:
              'Give your people a safe place to practice the conversations that test client relationships most.',
            cropFocus: 'bottom-right',
            filter: 'duotone-copper',
          },
          {
            heading: 'Manager development',
            description:
              'Delivering honest feedback and developing junior lawyers.',
            visualContent: <MockPresentationTraining />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'Associate development',
            description:
              'Accelerate the path from technical competence to trusted advisor.',
            cropFocus: 'center',
            filter: 'duotone-blush',
          },
          {
            heading: 'Business development',
            description:
              'Pitching for new mandates and expanding relationships.',
            cropFocus: 'bottom-left',
            filter: 'duotone',
          },
        ]}
      />

      <TrialScenario
        characterName="James"
        characterRole="General Counsel"
        characterInitials="JC"
        title="Practice a high-stakes settlement negotiation"
        scenario="Your client is considering a settlement offer. They want your recommendation, but the decision carries significant risk either way. Advise them."
      />

      <SplitContent
        eyebrow="Customized for legal"
        heading={
          <>
            Built around <em className="text-accent">your</em> practice
          </>
        }
        body="Your jurisdictions, practice areas, and client types. Every scenario reflects how your lawyers actually work."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        eyebrow="Why legal firms choose Ambr AI"
        items={[
          {
            heading: 'Confidential by design',
            description:
              'Conversations stay private. ISO27001 certified, GDPR compliant.',
          },
          {
            heading: 'Scale across teams',
            description:
              'Give your entire firm access to high-quality practice and coaching without the bottleneck.',
          },
          {
            heading: 'Feedback that actually coaches',
            description:
              'The kind of structured coaching that shapes how people communicate.',
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
        subtitle="Practice the conversations that win mandates."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
