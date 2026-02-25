import { Reveal } from '@/components/reveal'
import { Waveform } from '@/components/waveform'

const scenarios = [
  { label: 'Enterprise pitch — Q2 pricing', active: true, custom: true },
  { label: 'Objection handling: Budget concerns', active: false, custom: false },
  { label: 'Client renewal negotiation', active: false, custom: false },
  { label: 'New product cross-sell', active: false, custom: false },
]

const management = [
  { label: 'Performance review', active: false },
  { label: 'Difficult feedback conversation', active: false },
]

export function ProductMock() {
  return (
    <section className="py-section-mobile md:py-section-lg px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
            <div>
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
                The Platform
              </p>
              <h2 className="font-heading text-section leading-[1.2] tracking-heading">
                Practice that mirrors <em>reality.</em>
              </h2>
            </div>
            <p className="text-body text-copy-mid leading-[1.75]">
              No avatars. No text chat. Voice-only simulations that replicate the cognitive
              pressure of a real conversation — the pauses, the objections, the moments where
              preparation meets improvisation.
            </p>
          </div>
        </Reveal>

        <Reveal slow>
          <div className="rounded-brand-lg border border-border bg-surface overflow-hidden shadow-card">
            {/* Chrome bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-dark/[0.02] border-b border-border">
              <div className="w-2 h-2 rounded-full bg-dark/10" />
              <div className="w-2 h-2 rounded-full bg-dark/10" />
              <div className="w-2 h-2 rounded-full bg-dark/10" />
            </div>

            <div className="grid md:grid-cols-[220px_1fr] min-h-[400px]">
              {/* Sidebar */}
              <div className="hidden md:block p-6 border-r border-border">
                <p className="text-detail uppercase tracking-eyebrow text-copy-light mb-3">
                  Your Scenarios
                </p>
                {scenarios.map((s) => (
                  <div
                    key={s.label}
                    className={`text-ui px-2.5 py-2 rounded-brand-sm mb-px ${
                      s.active
                        ? 'bg-accent/[0.08] text-accent font-body-medium'
                        : 'text-copy-mid'
                    }`}
                  >
                    {s.label}
                    {s.custom && (
                      <span className="inline-block ml-1.5 text-badge bg-accent text-surface-white rounded-brand-sm px-1 py-px uppercase tracking-wide font-body-medium align-middle">
                        Custom
                      </span>
                    )}
                  </div>
                ))}
                <p className="text-detail uppercase tracking-eyebrow text-copy-light mb-3 mt-6">
                  Management
                </p>
                {management.map((s) => (
                  <div
                    key={s.label}
                    className="text-ui px-2.5 py-2 rounded-brand-sm mb-px text-copy-mid"
                  >
                    {s.label}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
                <div className="flex items-center gap-1.5 text-detail uppercase tracking-eyebrow text-accent font-body-medium mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Simulation in progress
                </div>
                <div className="w-14 h-14 rounded-full bg-surface border border-copy-faint flex items-center justify-center font-heading text-xl text-copy-mid mb-3">
                  M
                </div>
                <p className="font-heading text-body mb-0.5">Maria Chen</p>
                <p className="text-caption text-copy-light mb-8">
                  VP Procurement &middot; Fortune 500 Client
                </p>
                <Waveform />
                <div className="bg-surface-white border border-border rounded-brand px-5 py-4 text-nav text-copy-mid italic leading-relaxed max-w-[380px]">
                  &ldquo;That&apos;s interesting, but we&apos;ve been consolidating our vendor
                  relationships. Walk me through why we&apos;d add another platform at this
                  stage?&rdquo;
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
