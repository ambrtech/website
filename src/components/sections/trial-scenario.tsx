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
  className?: string
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
  className,
}: TrialScenarioProps) {
  return (
    <Section className={className}>
      <Reveal>
        {eyebrow && (
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-8 eyebrow-hairline">
            {eyebrow}
          </p>
        )}
        <div className="max-w-3xl">
          <SimulationCard
            layout="horizontal"
            characterName={characterName}
            characterRole={characterRole}
            characterInitials={characterInitials}
            title={title}
            description={scenario}
            href={ctaHref}
          />
          {socialProof && (
            <p className="text-caption text-copy-light italic leading-relaxed mt-5 border-l-2 border-accent-soft pl-4 max-w-lg">
              {socialProof}
            </p>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
