import { Section } from './section'
import { SimulationCard } from '@/components/ui/simulation-card'

interface TrialScenarioProps {
  characterName: string
  characterRole: string
  characterInitials: string
  characterImage?: string
  backgroundImage?: string
  /** Benefit-oriented title (not currently shown in card, kept for data). */
  title: string
  /** Scenario description shown inside the card. */
  scenario: string
  ctaHref?: string
  /** Conversations count shown inside the card, e.g. "2,847 conversations this week". */
  socialProof?: string
  /** Optional disclaimer text below the card. Defaults to generic customization message. */
  disclaimer?: string
  className?: string
  /** Unused legacy prop — kept for backwards compat. */
  eyebrow?: string
}

const DEFAULT_DISCLAIMER =
  'Every simulation is customized to your organization\u2019s scenarios, language, and context.'

export function TrialScenario({
  characterName,
  characterRole,
  characterInitials,
  characterImage,
  backgroundImage,
  scenario,
  ctaHref = '/try-for-free',
  socialProof,
  disclaimer = DEFAULT_DISCLAIMER,
  className,
}: TrialScenarioProps) {
  return (
    <Section className={className}>
      <div className="max-w-2xl mx-auto text-center">
        <SimulationCard
          layout="photo-warm"
          characterName={characterName}
          characterRole={characterRole}
          characterInitials={characterInitials}
          characterImage={characterImage}
          backgroundImage={backgroundImage}
          title={scenario}
          socialProof={socialProof}
          href={ctaHref}
        />
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light border border-border rounded-full px-3 py-1 shrink-0">
            Example scenario
          </span>
          <p className="text-body-sm text-copy-light text-left">
            {disclaimer}
          </p>
        </div>
      </div>
    </Section>
  )
}
