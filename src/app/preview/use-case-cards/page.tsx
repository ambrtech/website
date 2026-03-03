import { createMetadata } from '@/lib/metadata'
import { UseCaseCards } from '@/components/sections/use-case-cards'

export const metadata = createMetadata({
  title: 'Preview: Use Case Cards',
  description: 'Component preview.',
  path: '/preview/use-case-cards',
})

export default function Preview() {
  return (
    <UseCaseCards
      eyebrow="Solutions"
      heading="One platform. Every conversation that matters."
      items={[
        {
          heading: 'Management & Leadership',
          description: 'Difficult feedback. Performance reviews. Navigating team conflict. Conversations most managers dread — practiced until they don\'t.',
          href: '/solutions/management-leadership',
          ctaLabel: 'Try for Free',
        },
        {
          heading: 'Sales & Negotiations',
          description: 'Discovery calls. Objection handling. Contract negotiations. Build the instinct to respond, not recite.',
          href: '/solutions/sales-negotiations',
          ctaLabel: 'Try for Free',
        },
        {
          heading: 'Customer Service',
          description: 'Complaints. Escalations. Retention calls. Consistent quality across every interaction.',
          href: '/solutions/customer-service',
          ctaLabel: 'Try for Free',
        },
        {
          heading: 'And more',
          description: 'Presentations, onboarding, compliance conversations — if it matters to your business, we can build it.',
          href: '/solutions/other',
          ctaLabel: 'Try for Free',
        },
      ]}
    />
  )
}
