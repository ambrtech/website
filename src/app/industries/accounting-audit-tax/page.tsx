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
  MockBodyLanguage,
  MockAdminBuilder,
} from '@/components/sections/product-screenshot'

export const metadata = createMetadata({
  title: 'Accounting, Audit & Tax',
  description:
    'Ambr AI helps accounting, audit, and tax firms develop the communication skills that turn technical expertise into lasting client relationships.',
  path: '/industries/accounting-audit-tax',
})

export default function AccountingAuditTaxPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: 'Accounting, Audit & Tax', href: '/industries/accounting-audit-tax' },
        ]}
      />

      <PageHero
        compact
        eyebrow="Industries"
        heading={
          <>
            Technical expertise wins the work.{' '}
            <em className="text-accent">Communication</em> skills keep it.
          </>
        }
        subtitle="Client advisory. Audit findings. Difficult billing conversations. Manager feedback. Ambr AI gives accounting, audit, and tax firms a structured way to develop the communication skills that turn technical expertise into lasting client relationships."
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
            heading: 'Delivering audit findings',
            description:
              'Train on delivering findings and navigating tense audit committee presentations.',
            visualContent: <MockVoiceConversation />,
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Client advisory conversations',
            description:
              'Translate complex tax or regulatory guidance into clear, confident recommendations.',
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
              'Delivering feedback and handling performance issues.',
            visualContent: <MockBodyLanguage />,
            cropFocus: 'top-right',
            filter: 'faded',
          },
          {
            heading: 'New joiner onboarding',
            description:
              'Get junior professionals client-ready faster without pulling senior staff off billable work.',
            cropFocus: 'center',
            filter: 'duotone-blush',
          },
          {
            heading: 'Business development',
            description:
              'Cross-selling additional services and pitching for new mandates.',
            cropFocus: 'bottom-left',
            filter: 'duotone',
          },
        ]}
      />

      <TrialScenario
        characterName="Sarah"
        characterRole="Audit Director"
        characterInitials="SW"
        title="Deliver difficult audit findings with confidence"
        scenario="You are presenting audit findings to a client's CFO who disagrees with a material finding. Walk them through your position."
      />

      <SplitContent
        eyebrow="Customized for your firm"
        heading={
          <>
            Built around <em className="text-accent">your</em> reality
          </>
        }
        body="Your service lines, your client industries, your terminology. Every scenario reflects how your people actually work — not generic templates."
        visualContent={
          <ProductScreenshot tint>
            <MockAdminBuilder />
          </ProductScreenshot>
        }
      />

      <FeatureGrid
        eyebrow="Why accounting firms choose Ambr AI"
        items={[
          {
            heading: 'Scale across locations',
            description:
              'Every person gets the same quality of training and feedback — at any volume.',
          },
          {
            heading: 'Confidential by design',
            description:
              'ISO certified, GDPR compliant. Data is never used to train external models.',
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
        subtitle="Practice the conversations that build client trust."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
      />
    </>
  )
}
