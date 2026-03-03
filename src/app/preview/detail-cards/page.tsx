import { createMetadata } from '@/lib/metadata'
import { DetailCards } from '@/components/sections/detail-cards'

export const metadata = createMetadata({
  title: 'Preview: Detail Cards',
  description: 'Component preview.',
  path: '/preview/detail-cards',
})

export default function Preview() {
  return (
    <DetailCards
      eyebrow="Built for consulting"
      heading="Scenarios your consultants will practice"
      items={[
        {
          heading: 'Client pitch preparation',
          description: 'Practice presenting recommendations, handling pushback, and defending methodology — before the real meeting.',
        },
        {
          heading: 'New joiner acceleration',
          description: 'Get junior consultants client-ready faster. Realistic practice with partner-level feedback, without tying up senior staff.',
        },
        {
          heading: 'Difficult client conversations',
          description: 'Scope creep. Budget overruns. Missed expectations. Your people need to handle these with confidence, not scripts.',
        },
        {
          heading: 'Business development',
          description: 'From initial chemistry meetings to formal proposals — practice the conversations that grow your pipeline.',
        },
      ]}
    />
  )
}
