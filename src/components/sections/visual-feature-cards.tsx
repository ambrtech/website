import { Section } from './section'
import { Reveal } from '@/components/reveal'

const practiceScenarios = [
  'Performance Reviews',
  'Objection Handling',
  'Sales Discovery',
  'Salary Negotiation',
  'De-escalation',
  'Client Onboarding',
  'Compliance Training',
]

const capabilities = [
  { icon: '🇬🇧', label: 'English' },
  { icon: '🇩🇪', label: 'German' },
  { icon: 'sf', label: 'Salesforce' },
  { icon: 'W', label: 'Workday' },
  { icon: '🇫🇷', label: 'French' },
  { icon: '🇯🇵', label: 'Japanese' },
]

export function VisualFeatureCards() {
  return (
    <Section className="bg-surface-white">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-headline leading-[1.1] tracking-heading text-dark">
            Why the top performers choose Ambr
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-8">
        <Reveal className="flex flex-col h-full" delay={0}>
          <div className="relative mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-brand bg-dark p-8">
            <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light" />
            <div className="absolute inset-0 bg-noise-coarse opacity-[0.05] mix-blend-overlay" />

            <div className="relative z-10 flex w-full select-none flex-col gap-3 text-center">
              {practiceScenarios.map((scenario) => {
                const isPrimary = scenario === 'Salary Negotiation'
                return (
                  <p
                    key={scenario}
                    className={`font-heading ${
                      isPrimary
                        ? 'text-section tracking-tight text-surface-white'
                        : 'text-body md:text-label text-surface-alt/60'
                    }`}
                  >
                    {scenario}
                  </p>
                )
              })}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-80" />
          </div>

          <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-3">Move fast, stay sharp</h3>
          <p className="text-body text-copy-mid leading-relaxed">
            Streamline your entire process, from researching and drafting to reviewing. Your teams will stay focused on delivering world-class interactions with confidence.
          </p>
        </Reveal>

        <Reveal className="flex flex-col h-full" delay={150}>
          <div className="relative mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-brand bg-dark p-8">
            <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light" />
            <div className="absolute inset-0 bg-noise-coarse opacity-[0.05] mix-blend-overlay" />

            <div className="relative z-10 flex w-full max-w-xs aspect-square flex-col rounded-brand bg-surface-white p-6 shadow-card">
              <div className="absolute left-8 top-8 z-20 flex items-center gap-2 rounded-brand-sm bg-copy-mid px-3 py-1.5 text-caption font-body-medium text-surface-white shadow-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-alt text-detail font-body-medium text-dark">M</div>
                Manager
              </div>

              <svg className="pointer-events-none absolute inset-0 h-full w-full text-border" viewBox="0 0 240 240">
                <path d="M 70 70 L 120 120 L 170 160" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 170 160 L 205 135" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <polygon points="166,157 172,163 162,166" fill="currentColor" />
              </svg>

              <div className="absolute bottom-14 right-6 z-20 flex items-center gap-2 rounded-brand-sm border border-border bg-surface-alt px-3 py-1.5 text-caption font-body-medium text-dark shadow-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-detail font-body-medium text-surface-white">AI</div>
                Employee
              </div>

              <p className="absolute bottom-4 left-6 text-detail font-body-medium uppercase tracking-eyebrow text-copy-light">
                Feedback shared by hr@company.com
              </p>
            </div>
          </div>

          <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-3">Collaborate with confidence</h3>
          <p className="text-body text-copy-mid leading-relaxed">
            One platform for firms and corporations to collaborate securely across every simulation, workflow, and email. Connect internally and externally without sacrificing control.
          </p>
        </Reveal>

        <Reveal className="flex flex-col h-full" delay={300}>
          <div className="relative mb-6 flex aspect-square w-full items-start justify-center overflow-hidden rounded-brand bg-dark px-8 pt-10">
            <div className="absolute inset-0 bg-noise-fine opacity-[0.14] mix-blend-soft-light" />
            <div className="absolute inset-0 bg-noise-coarse opacity-[0.05] mix-blend-overlay" />

            <div className="relative z-10 flex w-full max-w-xs translate-y-4 flex-col gap-3">
              {capabilities.map((capability) => (
                <div key={capability.label} className="flex items-center gap-3 rounded-brand bg-surface-white px-4 py-3 shadow-dropdown">
                  {capability.icon.length <= 2 ? (
                    <span className="text-body">{capability.icon}</span>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-brand-sm bg-accent-tint text-caption font-body-medium text-accent">
                      {capability.icon}
                    </div>
                  )}
                  <span className="text-body-sm font-body-medium text-dark">{capability.label}</span>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark to-transparent" />
          </div>

          <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-3">Put your knowledge to work</h3>
          <p className="text-body text-copy-mid leading-relaxed">
            Your institutional knowledge, from onboarding documents to trusted third-party LMS sources, unified in one environment built for precision.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
