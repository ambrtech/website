import { createMetadata } from '@/lib/metadata'
import { ComparisonLayout } from '@/components/sections/comparison-layout'

export const metadata = createMetadata({
  title: 'Preview: Comparison Layout',
  description: 'Component preview for the ComparisonLayout section.',
  path: '/preview/comparison-layout',
})

const items = [
  {
    tag: 'Traditional',
    label: 'Classroom roleplay',
    description:
      'Effective but hard to scale. Requires scheduling, facilitators, and willing participants. Most employees get one or two attempts at best.',
  },
  {
    tag: 'Scalable',
    label: 'E-learning and video',
    description:
      'Easy to distribute but passive. Watching a video about handling objections doesn\'t build the skill of handling objections.',
  },
  {
    tag: 'High-touch',
    label: 'Coaching and mentoring',
    description:
      'High impact but expensive and inconsistent. Reserved for senior leaders or high-performers. Not available on demand.',
  },
  {
    tag: 'Best of both',
    label: 'AI roleplay',
    description:
      'Combines the realism of live practice with the scalability of digital learning. Available anytime, for anyone, as many times as needed. Consistent quality. Immediate feedback.',
    highlighted: true,
  },
]

export default function ComparisonLayoutPreview() {
  return (
    <ComparisonLayout
      eyebrow="The landscape"
      heading="How AI roleplay compares to traditional methods"
      subtitle="Most professionals know what a good conversation looks like. The challenge is doing it under pressure."
      items={items}
    />
  )
}
