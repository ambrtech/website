import { Reveal } from '@/components/reveal'

const features = [
  {
    label: 'Custom scenarios',
    description: 'Built around your products, sales methodology, and real-world challenges',
  },
  {
    label: 'Realistic AI characters',
    description: 'Sub-second voice responses that force the same thinking as a real conversation',
  },
  {
    label: 'Team-wide insights',
    description: 'Capability tracking, gap identification, and readiness certification',
  },
  {
    label: '12 languages',
    description: 'Native fluency for global teams, not translated templates',
  },
]

export function HowItWorks() {
  return (
    <section className="px-container-mobile md:px-container pb-section-mobile md:pb-section-lg">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                How it works
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading">
                From brief to <em>live</em> in days.
              </h2>
            </div>
            <div>
              <div className="space-y-4 mb-10">
                <p className="text-body text-copy-mid leading-[1.75]">
                  Share your context — playbooks, objection guides, product materials — and our
                  team builds realistic AI characters that know your business. Custom simulations
                  ready for rollout in days, not months.
                </p>
                <p className="text-body text-copy-mid leading-[1.75]">
                  Your team practises against realistic pressure. You see clear progress and
                  readiness data across every individual.
                </p>
              </div>
              <ul>
                {features.map((feature) => (
                  <li
                    key={feature.label}
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-8 py-5 border-t border-border items-baseline last:border-b"
                  >
                    <span className="text-label font-body-medium text-dark">
                      {feature.label}
                    </span>
                    <span className="text-body-sm text-copy-light leading-relaxed">
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
