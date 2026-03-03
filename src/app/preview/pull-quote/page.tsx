import { createMetadata } from '@/lib/metadata'
import { PullQuote } from '@/components/sections/pull-quote'

export const metadata = createMetadata({
  title: 'Preview: Pull Quote',
  description: 'Component preview.',
  path: '/preview/pull-quote',
})

export default function Preview() {
  return (
    <div>
      <div className="h-48 bg-surface" />
      <PullQuote
        quote="Incredibly realistic, providing a safe and convenient environment for practice."
        role="Director"
        company="Media Company"
      />
      <div className="h-48 bg-surface" />
    </div>
  )
}
