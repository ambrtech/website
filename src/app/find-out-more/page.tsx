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
            'A 30-minute conversation with an Ambr AI founder. We will learn about your training challenges, walk you through the platform, and answer your questions, shaped around your context.',
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
            'If you have a clear sense of your requirements, team size and use cases, we can put together an indicative proposal.',
          href: '#',
          ctaLabel: 'Request a Quote',
        },
      ]}
    />
  )
}
