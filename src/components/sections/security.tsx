import Link from 'next/link'
import { Reveal } from '@/components/reveal'

const badges = [
  { icon: 'ISO', label: 'ISO 27001' },
  { icon: 'SOC', label: 'SOC 2' },
  { icon: 'EU', label: 'EU AI Act' },
  { icon: 'G', label: 'GDPR' },
]

export function Security() {
  return (
    <section className="bg-dark text-surface-white py-section-mobile md:py-section-lg px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading">
                Enterprise-grade security and controls.
              </h2>
            </div>
            <div>
              <div className="text-body text-copy-light leading-[1.75] space-y-4">
                <p>
                  Ambr AI meets the highest industry standards for security and compliance.
                  Complete data isolation, role-based access controls, and full audit trails.
                  Your conversation data is yours — always.
                </p>
                <p>
                  <Link
                    href="/security"
                    className="text-surface-white underline underline-offset-[3px] hover:text-accent transition-colors"
                  >
                    Read our security whitepaper
                  </Link>
                </p>
              </div>

              <div className="flex gap-10 mt-12 flex-wrap">
                {badges.map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="w-12 h-12 rounded-full border border-surface-white/10 flex items-center justify-center mx-auto mb-2 text-eyebrow-sm font-body-medium tracking-wide text-copy-light">
                      {badge.icon}
                    </div>
                    <p className="text-eyebrow text-copy-light tracking-wide">
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/security"
                className="inline-block mt-8 text-nav text-surface-white border border-surface-white/20 rounded-brand-sm px-5 py-2.5 transition-all hover:border-accent hover:text-accent"
              >
                More About Security
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
