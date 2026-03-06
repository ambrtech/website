import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { SimulationCard } from '@/components/ui/simulation-card'

interface TrialScenarioProps {
  eyebrow?: string
  characterName: string
  characterRole: string
  characterInitials: string
  title: string
  scenario: string
  ctaHref?: string
  socialProof?: string
}

export function TrialScenario({
  eyebrow = 'Try it yourself',
  characterName,
  characterRole,
  characterInitials,
  title,
  scenario,
  ctaHref = '/try-for-free',
  socialProof,
}: TrialScenarioProps) {
  return (
    <Section>
      <Reveal>
        {eyebrow && (
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 eyebrow-hairline">
            {eyebrow}
          </p>
        )}
        <div className="max-w-2xl">
          <SimulationCard
            layout="scenario"
            characterName={characterName}
            characterRole={characterRole}
            characterInitials={characterInitials}
            title={title}
            description={scenario}
            href={ctaHref}
            socialProof={socialProof}
          />
        </div>
      </Reveal>
    </Section>
  )
}
