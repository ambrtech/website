import { createMetadata } from '@/lib/metadata'
import { ActionPicker } from '@/components/sections/action-picker'

export const metadata = createMetadata({
  title: 'Preview: Action Picker',
  description: 'Component preview.',
  path: '/preview/action-picker',
})

export default function Preview() {
  return (
    <ActionPicker
      heading="Let's Talk"
      subtitle="Whether you are exploring AI roleplay training for the first time or ready to discuss a specific deployment, we are here to help."
      items={[
        {
          heading: 'Book a Meeting',
          description: 'A 30-minute conversation with someone from the Ambr AI team. We\'ll learn about your training challenges and walk you through the platform.',
          href: '/find-out-more',
          ctaLabel: 'Book a Meeting',
        },
        {
          heading: 'Ask Us a Question',
          description: 'Not ready for a meeting? Send us a question and we\'ll get back to you within one business day. No forms, no qualification hoops.',
          href: '/find-out-more',
          ctaLabel: 'Ask a Question',
        },
        {
          heading: 'Get a Quote',
          description: 'If you have a clear sense of your requirements — team size, use cases, languages, timeline — we can put together a proposal.',
          href: '/find-out-more',
          ctaLabel: 'Request a Quote',
        },
      ]}
    />
  )
}
