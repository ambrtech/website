import { createMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { ScenarioCards } from '@/components/sections/scenario-cards'

export const metadata = createMetadata({
  title: 'Try Ambr AI for Free',
  description:
    'Experience realistic AI roleplay training. Choose an example scenario and start a live conversation in under five minutes. No commitment required.',
  path: '/try-for-free',
})

export default function TryForFreePage() {
  return (
    <>
      <PageHero
        heading={
          <>
            Experience Ambr AI.{' '}
            <em className="text-accent">No commitment</em> required.
          </>
        }
        subtitle="See what realistic AI roleplay training feels like. Choose one of the example scenarios below and start a live conversation. It takes less than five minutes."
        first
      />

      <Section>
        <Reveal>
          <div className="max-w-[620px] rounded-brand border border-accent-soft bg-accent-whisper px-6 py-5">
            <p className="text-body-sm text-copy-mid leading-relaxed">
              These are example scenarios. Every Ambr AI deployment is fully
              customized to your scenarios, your language, and your culture.
            </p>
          </div>
        </Reveal>
      </Section>

      <ScenarioCards
        items={[
          {
            category: 'Management & Leadership',
            scenarioTitle: 'Addressing Underperformance',
            description:
              'Address the issue constructively, understand what is happening, and agree on a path forward.',
            href: '#',
          },
          {
            category: 'Sales & Negotiations',
            scenarioTitle: 'Handling a Price Objection',
            description:
              'Hold value, understand their constraints, and move the deal forward.',
            href: '#',
          },
          {
            category: 'Customer Service',
            scenarioTitle: 'De-escalating a Frustrated Customer',
            description:
              'Acknowledge their experience, resolve the immediate issue, and retain the relationship.',
            href: '#',
          },
        ]}
      />

      <Section>
        <Reveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              What happens next
            </h2>
            <p className="text-body text-copy-mid leading-[1.75]">
              After your conversation, you will receive personalized feedback on
              your approach. Ready for your own scenarios? Every element of the
              platform can be customized to your organization.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
