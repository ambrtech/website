import { SimulationCard } from '@/components/ui/simulation-card'

const scenarios = [
  {
    characterName: 'Mark',
    characterRole: 'Senior Manager',
    characterInitials: 'MR',
    title: 'Practice giving tough feedback without damaging the relationship',
    description:
      'Your direct report has missed two consecutive deadlines on a critical project. Can you address performance while keeping them motivated?',
    socialProof: '2,847 conversations this week',
  },
  {
    characterName: 'Sarah',
    characterRole: 'VP of Operations',
    characterInitials: 'SC',
    title: 'Win over a skeptical buyer in under 15 minutes',
    description:
      'A VP with 15 minutes and no context. Qualify the opportunity and build enough interest for a follow-up.',
    socialProof: '1,204 conversations this week',
  },
  {
    characterName: 'Laura',
    characterRole: 'Frustrated customer',
    characterInitials: 'LM',
    title: 'Resolve a complaint before it escalates further',
    description:
      'A customer has called three times about the same issue. They want to speak to a manager. Can you turn it around?',
    socialProof: '3,112 conversations this week',
  },
]

export default function SimulationCardPreview() {
  return (
    <div className="min-h-screen bg-surface py-16 px-container-mobile md:px-container">
      <div className="mx-auto max-w-site space-y-20">
        {/* ── Pill variants ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Pill layout
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Ultra-compact. Floats in a corner, sits in a sidebar, or
            anchors to the bottom of a page. One tap to start.
          </p>
          <div className="flex flex-wrap gap-4">
            {scenarios.map((s) => (
              <SimulationCard
                key={s.title}
                layout="pill"
                characterName={s.characterName}
                characterInitials={s.characterInitials}
                characterRole={s.characterRole}
                title={s.title}
              />
            ))}
          </div>
        </section>

        {/* ── Scenario variants ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Scenario layout
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Full context with interactive demo badge, mic CTA, social
            proof, and friction reducers. Best for dedicated demo sections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.slice(0, 2).map((s) => (
              <SimulationCard key={s.title} layout="scenario" {...s} />
            ))}
          </div>
        </section>

        {/* ── Live call variant ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Live call layout
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Dark, immersive, full-width. Simulates the feel of entering a
            live call. Best used as a hero-level CTA or full-width banner.
          </p>
          <div className="max-w-2xl mx-auto">
            <SimulationCard layout="live-call" {...scenarios[0]} />
          </div>
        </section>

        {/* ── Horizontal variants ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Horizontal layout
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Full-width inline cards with online status, social proof, and
            friction reducers. Good for embedding in content flow.
          </p>
          <div className="space-y-4">
            {scenarios.map((s) => (
              <SimulationCard key={s.title} layout="horizontal" {...s} />
            ))}
          </div>
        </section>

        {/* ── Horizontal without description ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Horizontal — compact (no description)
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Tighter for inline embedding where space is limited.
          </p>
          <div className="space-y-4">
            {scenarios.map((s) => (
              <SimulationCard
                key={s.title}
                layout="horizontal"
                characterName={s.characterName}
                characterRole={s.characterRole}
                characterInitials={s.characterInitials}
                title={s.title}
              />
            ))}
          </div>
        </section>

        {/* ── Stacked variants ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Stacked layout
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Vertical cards for grids, sidebars, or placing alongside other
            components.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((s) => (
              <SimulationCard key={s.title} layout="stacked" {...s} />
            ))}
          </div>
        </section>

        {/* ── Stacked alongside content ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Stacked — alongside content
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            How it looks placed next to a text block or other component.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start">
            <div className="space-y-4">
              <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                Practice the conversations that{' '}
                <em className="text-accent">matter</em>
              </h3>
              <p className="text-body text-copy-mid leading-[1.75]">
                Every high-stakes conversation your team faces — performance
                feedback, sales negotiations, customer escalations — available
                as a realistic simulation you can try right now.
              </p>
            </div>
            <SimulationCard layout="stacked" {...scenarios[0]} />
          </div>
        </section>

        {/* ── Horizontal alongside content ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Horizontal — alongside content
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            Horizontal cards placed below a heading in a split layout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div className="space-y-4">
              <SimulationCard layout="horizontal" {...scenarios[1]} />
              <SimulationCard layout="horizontal" {...scenarios[2]} />
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                Try it <em className="text-accent">yourself</em>
              </h3>
              <p className="text-body text-copy-mid leading-[1.75]">
                Pick a scenario and start a conversation. No account required.
                You&apos;ll be speaking with an AI character that responds
                naturally to whatever you say.
              </p>
            </div>
          </div>
        </section>

        {/* ── Live call — full width ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Live call — full width
          </h2>
          <p className="text-body-sm text-copy-light mb-8">
            As a full-bleed CTA banner.
          </p>
          <SimulationCard layout="live-call" {...scenarios[1]} />
        </section>
      </div>
    </div>
  )
}
