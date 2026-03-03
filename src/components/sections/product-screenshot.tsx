import { Reveal } from '@/components/reveal'

interface ProductScreenshotProps {
  children: React.ReactNode
  tint?: boolean
}

/**
 * ProductScreenshot wraps any product UI content in a polished, branded
 * container — chrome bar, subtle shadow, optional warm tinted backdrop.
 * Designed to be passed as `visualContent` to SplitContent or used standalone.
 */
export function ProductScreenshot({ children, tint }: ProductScreenshotProps) {
  return (
    <div className={`relative ${tint ? 'p-6 md:p-10' : ''}`}>
      {/* Optional warm backdrop panel */}
      {tint && (
        <div className="absolute inset-0 rounded-brand-lg bg-accent-whisper -z-10" />
      )}

      <div className="rounded-brand-lg border border-border bg-surface-white overflow-hidden shadow-card">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-dark/[0.02] border-b border-border">
          <div className="w-2 h-2 rounded-full bg-dark/10" />
          <div className="w-2 h-2 rounded-full bg-dark/10" />
          <div className="w-2 h-2 rounded-full bg-dark/10" />
        </div>

        {/* Content area */}
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Pre-built mock panels for common product surfaces.
   Use these as children of ProductScreenshot.
   ───────────────────────────────────────────────────── */

/** A mock feedback panel showing coaching output. */
export function MockFeedbackPanel() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Session Feedback
        </span>
      </div>

      {(['Conversation structure', 'Tone and delivery', 'Word choice', 'Listening and empathy'] as const).map(
        (label, i) => (
          <div key={label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-caption font-body-medium text-copy-mid">{label}</span>
              <span className="text-caption text-copy-light">{['Strong', 'Good', 'Developing', 'Strong'][i]}</span>
            </div>
            <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
              <div
                className="h-full rounded-full bg-accent-soft"
                style={{ width: `${[88, 72, 55, 82][i]}%` }}
              />
            </div>
          </div>
        )
      )}

      <div className="pt-4 border-t border-border">
        <p className="text-caption text-copy-light leading-relaxed">
          You opened with empathy and established rapport well. Consider pausing
          more after the other person responds — allowing silence builds trust.
        </p>
      </div>
    </div>
  )
}

/** A mock scenario card showing a simulation setup. */
export function MockScenarioCard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center">
          <span className="font-heading text-body-sm text-copy-mid">JR</span>
        </div>
        <div>
          <p className="text-body-sm font-body-medium text-dark">James Richardson</p>
          <p className="text-caption text-copy-light">Senior Manager, unhappy with project delays</p>
        </div>
      </div>

      <div className="p-4 rounded-brand-sm bg-surface border border-border">
        <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
          Scenario
        </p>
        <p className="text-body-sm text-copy-mid leading-relaxed">
          Your direct report has missed two consecutive deadlines on a critical project.
          You need to address performance while maintaining the relationship.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-caption text-copy-light">Difficulty:</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`w-1.5 h-4 rounded-sm ${n <= 3 ? 'bg-accent-soft' : 'bg-surface-alt'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/** A mock showing organizational context transformed into a custom simulation. */
export function MockCustomizationFlow() {
  const contextItems = [
    'Return policy',
    'EMEA pricing tiers',
    'Escalation framework',
    'Brand tone guide',
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Customization
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
        <div>
          <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
            Your context
          </p>
          <div className="space-y-1.5">
            {contextItems.map((item) => (
              <div
                key={item}
                className="text-caption px-2.5 py-1.5 rounded-brand-sm border border-border bg-surface text-copy-mid"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center pt-8 text-copy-faint">→</div>

        <div>
          <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
            Your simulation
          </p>
          <div className="p-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
            <p className="text-caption font-body-medium text-dark mb-1">
              Difficult refund negotiation
            </p>
            <p className="text-caption text-copy-light leading-relaxed">
              Customer references your EMEA return policy and escalates using
              company-specific language...
            </p>
          </div>
          <div className="mt-2 p-3 rounded-brand-sm bg-surface border border-border">
            <p className="text-caption font-body-medium text-dark mb-1">
              Enterprise pricing pushback
            </p>
            <p className="text-caption text-copy-light leading-relaxed">
              Prospect questions your tiered pricing and compares to a competitor
              they&apos;ve been evaluating...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/** A mock admin dashboard summary. */
export function MockDashboard() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Team Overview
        </span>
        <span className="text-caption text-copy-faint">Last 30 days</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {([
          { label: 'Sessions', value: '247' },
          { label: 'Avg. Score', value: '74%' },
          { label: 'Completion', value: '89%' },
        ] as const).map(({ label, value }) => (
          <div key={label} className="p-3 rounded-brand-sm bg-surface border border-border text-center">
            <p className="font-heading text-section tracking-heading text-dark leading-none mb-1">{value}</p>
            <p className="text-eyebrow-sm text-copy-light">{label}</p>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1.5 h-16 pt-2">
        {[35, 52, 44, 68, 58, 72, 65, 80, 74, 88, 70, 82].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-accent-soft/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-eyebrow-sm text-copy-faint">
        <span>Week 1</span>
        <span>Week 12</span>
      </div>
    </div>
  )
}
