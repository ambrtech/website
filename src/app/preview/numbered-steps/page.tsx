import { createMetadata } from '@/lib/metadata'
import { NumberedSteps } from '@/components/sections/numbered-steps'

export const metadata = createMetadata({
  title: 'Preview: Numbered Steps',
  description: 'Component preview.',
  path: '/preview/numbered-steps',
})

export default function Preview() {
  return (
    <NumberedSteps
      eyebrow="Getting started"
      heading="What the buying process looks like"
      items={[
        {
          title: 'Tell us what you need',
          description: 'A short conversation about your use cases, team size, and goals. We listen first.',
        },
        {
          title: 'See it in action',
          description: 'Try customized simulations built for your actual scenarios. Not a generic demo.',
        },
        {
          title: 'Go live',
          description: 'Rollout support, admin setup, and your first scenarios — ready in days, not months.',
        },
      ]}
    />
  )
}
