import { createMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'

export const metadata = createMetadata({
  title: 'Try Ambr AI for Free',
  description:
    'Experience Ambr AI\'s conversation simulation platform. Start a free trial and see how realistic AI practice transforms your team\'s performance.',
  path: '/try-for-free',
})

export default function TryForFreePage() {
  return (
    <>
      <PageHero
        heading={
          <>
            Start practising{' '}
            <em className="text-accent">today</em>
          </>
        }
        subtitle="Experience how realistic AI conversation simulations can transform your team's confidence and performance."
      />

      <Section>
        <div className="mx-auto max-w-[560px] rounded-brand border border-border bg-surface-white p-8 md:p-12 text-center">
          <p className="text-body text-copy-light">Form coming soon</p>
        </div>
      </Section>
    </>
  )
}
