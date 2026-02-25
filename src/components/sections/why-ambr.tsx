import { Reveal } from '@/components/reveal'

const features = [
  {
    label: 'Voice, not avatars',
    description: 'Real conversations happen through voice. Our simulations mirror how professionals actually communicate.',
  },
  {
    label: 'Genuinely customised',
    description: "Built around your products, methodology, and real scenarios. Not a template with your logo on it.",
  },
  {
    label: 'Days, not months',
    description: 'From initial brief to team rollout in days. We handle the build.',
  },
  {
    label: 'A team, not a ticket',
    description: 'Direct access to the people who build your simulations. Under 2 hours average response time.',
  },
]

export function WhyAmbr() {
  return (
    <section className="py-section-mobile md:py-section-lg px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                Why Ambr AI
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading">
                Cutting-edge AI.<br />
                <em>Boutique service.</em>
              </h2>
            </div>
            <div>
              <p className="text-body text-copy-mid leading-[1.75] mb-10">
                The sophistication of the best AI models with the attentiveness of a team that
                knows your business by name. We build your simulations. We iterate until
                they&apos;re right. And when you need us, we respond in hours — not tickets.
              </p>
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
