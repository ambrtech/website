import { createMetadata } from '@/lib/metadata'
import { ActionPicker } from '@/components/sections/action-picker'

export const metadata = createMetadata({
  title: 'Find Out More',
  description:
    'Book a meeting, ask a question, or request a quote. Choose the option that suits you best.',
  path: '/find-out-more',
})

export default function FindOutMorePage() {
  return (
    <ActionPicker
      heading="Choose the option that suits you best."
      items={[
        {
          heading: 'Book a Meeting',
          description:
            'A 30-minute conversation with an Ambr AI founder to walk through the platform.',
          href: '#',
          ctaLabel: 'Book a Meeting',
        },
        {
          heading: 'Ask Us a Question',
          description:
            'Send us a question and we will get back to you within one business day.',
          href: '#',
          ctaLabel: 'Ask a Question',
        },
        {
          heading: 'Get a Quote',
          description:
            'Request an indicative proposal based on your team size and use cases.',
          href: '#',
          ctaLabel: 'Get a Quote',
        },
      ]}
    />
  )
}
