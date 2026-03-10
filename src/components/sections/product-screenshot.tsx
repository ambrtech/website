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
    'Sales methodology',
    'Buyer personas',
    'Pricing & packaging',
    'Competitive landscape',
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
              Enterprise renewal negotiation
            </p>
            <p className="text-caption text-copy-light leading-relaxed">
              CFO pushes back on pricing using your competitor&apos;s offer,
              referencing your packaging structure by name...
            </p>
          </div>
          <div className="mt-2 p-3 rounded-brand-sm bg-surface border border-border">
            <p className="text-caption font-body-medium text-dark mb-1">
              Discovery call — cold prospect
            </p>
            <p className="text-caption text-copy-light leading-relaxed">
              VP of Ops has 15 minutes and no context. Qualify the opportunity
              using your methodology...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/** A mock journey grid showing training categories — 2x2 card layout. */
export function MockJourneyGrid() {
  const journeys = [
    {
      title: 'Performance Feedback',
      description: 'Deliver constructive feedback that drives improvement.',
      items: ['Address underperformance', 'Set clear expectations', 'Recognize strong work'],
      progress: 7,
    },
    {
      title: 'Conflict Resolution',
      description: 'Handle team tensions with confidence.',
      items: ['Mediate disagreements', 'Clarify responsibilities', 'Manage difficult dynamics'],
      progress: 2,
    },
    {
      title: 'Difficult Conversations',
      description: 'Navigate sensitive situations with professionalism.',
      items: ['Deliver hard news', 'Manage emotional responses', 'Maintain trust'],
      progress: 0,
    },
    {
      title: 'Inclusive Leadership',
      description: 'Build a culture where every voice is heard.',
      items: ['Challenge assumptions', 'Create psychological safety', 'Adapt your approach'],
      progress: 1,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {journeys.map((journey) => (
        <div
          key={journey.title}
          className="rounded-brand bg-surface border border-border p-5 space-y-3"
        >
          <p className="text-body-sm font-body-medium text-dark leading-snug">
            {journey.title}
          </p>
          <p className="text-caption text-copy-light leading-relaxed">
            {journey.description}
          </p>
          <ul className="space-y-1">
            {journey.items.map((item) => (
              <li
                key={item}
                className="text-caption text-copy-mid pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-soft/50"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-caption text-copy-faint pt-1.5 border-t border-border">
            {journey.progress} {journey.progress === 1 ? 'scenario' : 'scenarios'} completed
          </p>
        </div>
      ))}
    </div>
  )
}

/** A mock context selector showing simulation configuration options. */
export function MockContextSelector() {
  const options = [
    { label: 'First meeting', detail: 'No prior history', selected: false },
    { label: 'Ongoing relationship', detail: 'Regular contact', selected: true },
    { label: 'Escalated situation', detail: 'Previous attempts failed', selected: false },
    { label: 'Custom context', detail: 'Define your own', selected: false },
  ]

  return (
    <div className="space-y-5">
      <p className="text-body-sm font-body-medium text-dark">
        Relationship Context
      </p>
      <div className="space-y-2.5">
        {options.map((option) => (
          <div
            key={option.label}
            className={`flex items-center gap-4 px-5 py-4 rounded-brand border ${
              option.selected
                ? 'border-accent-soft bg-accent-whisper'
                : 'border-border bg-surface'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                option.selected ? 'border-accent' : 'border-copy-faint'
              }`}
            >
              {option.selected && (
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              )}
            </div>
            <div className="min-w-0">
              <span className="text-body-sm font-body-medium text-dark">
                {option.label}
              </span>
              <span className="text-caption text-copy-light ml-3">
                {option.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock screensharing UI during a product walkthrough. */
export function MockScreensharing() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Screen Share Active
        </span>
        <span className="ml-auto text-caption text-copy-faint flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Live
        </span>
      </div>

      {/* Mock shared screen area */}
      <div className="rounded-brand-sm bg-dark/[0.03] border border-border p-4 space-y-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-2 w-20 rounded bg-dark/10" />
          <div className="h-2 w-12 rounded bg-dark/5" />
          <div className="h-2 w-16 rounded bg-dark/5" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] rounded-brand-sm bg-accent-whisper border border-accent-soft/30 flex items-center justify-center">
            <span className="text-caption text-accent/50">Dashboard</span>
          </div>
          <div className="aspect-[4/3] rounded-brand-sm bg-surface border border-border flex items-center justify-center">
            <span className="text-caption text-copy-faint">Analytics</span>
          </div>
          <div className="aspect-[4/3] rounded-brand-sm bg-surface border border-border flex items-center justify-center">
            <span className="text-caption text-copy-faint">Reports</span>
          </div>
        </div>
      </div>

      {/* Conversation overlay */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-brand-sm bg-surface border border-border">
        <div className="w-8 h-8 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0">
          <span className="text-caption font-body-medium text-accent">AI</span>
        </div>
        <p className="text-caption text-copy-mid leading-relaxed">
          &ldquo;Can you walk me through the pricing for the enterprise tier?&rdquo;
        </p>
      </div>
    </div>
  )
}

/** A mock body language analysis feedback panel. */
export function MockBodyLanguage() {
  const signals = [
    { label: 'Eye contact', score: 85, note: 'Consistent and confident' },
    { label: 'Posture', score: 72, note: 'Open but consider leaning in' },
    { label: 'Gestures', score: 68, note: 'Use more hand movement for emphasis' },
    { label: 'Facial expression', score: 90, note: 'Warm and engaged throughout' },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Body Language Analysis
        </span>
      </div>

      {/* Video preview placeholder */}
      <div className="relative aspect-video rounded-brand-sm bg-dark/[0.04] border border-border overflow-hidden flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-surface border-2 border-accent-soft flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-accent-soft/50" />
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-surface-white/90 rounded-brand-sm px-3 py-1.5 border border-border">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-caption text-copy-mid">Analyzing...</span>
        </div>
      </div>

      {signals.map((signal) => (
        <div key={signal.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-caption font-body-medium text-copy-mid">{signal.label}</span>
            <span className="text-caption text-copy-light">{signal.score}%</span>
          </div>
          <div className="h-1 rounded-full bg-surface-alt overflow-hidden mb-1">
            <div
              className="h-full rounded-full bg-accent-soft"
              style={{ width: `${signal.score}%` }}
            />
          </div>
          <p className="text-caption text-copy-faint">{signal.note}</p>
        </div>
      ))}
    </div>
  )
}

/** A mock chat-based training interface for text channel agents. */
export function MockChatTraining() {
  const messages = [
    { sender: 'customer', text: "I've been waiting 3 days for a response about my refund. This is unacceptable." },
    { sender: 'agent', text: "I completely understand your frustration, and I'm sorry for the delay. Let me look into this right now." },
    { sender: 'customer', text: "I've already explained the issue twice to different people." },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Chat Simulation
        </span>
      </div>

      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-brand-sm text-caption leading-relaxed ${
                msg.sender === 'agent'
                  ? 'bg-accent-whisper border border-accent-soft/30 text-copy-mid'
                  : 'bg-surface border border-border text-copy-mid'
              }`}
            >
              <p className="text-eyebrow-sm font-body-medium text-copy-light mb-1">
                {msg.sender === 'agent' ? 'You' : 'Customer'}
              </p>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-brand-sm border border-border bg-surface">
        <span className="text-caption text-copy-faint flex-1">Type your response...</span>
        <span className="text-caption text-accent font-body-medium">Send</span>
      </div>
    </div>
  )
}

/** A mock presentation training interface with AI audience. */
export function MockPresentationTraining() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Presentation Mode
        </span>
        <span className="ml-auto text-caption text-copy-faint">4:32 / 15:00</span>
      </div>

      {/* Slide area */}
      <div className="aspect-[16/9] rounded-brand-sm bg-dark/[0.03] border border-border flex items-center justify-center relative">
        <div className="text-center space-y-2">
          <div className="h-3 w-32 mx-auto rounded bg-dark/10" />
          <div className="h-2 w-48 mx-auto rounded bg-dark/5" />
          <div className="h-2 w-40 mx-auto rounded bg-dark/5" />
        </div>
        <div className="absolute bottom-3 right-3 text-caption bg-surface-white/90 border border-border rounded-brand-sm px-2 py-1 text-copy-faint">
          Slide 3 / 8
        </div>
      </div>

      {/* AI audience reactions */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: 'Sarah (CFO)', reaction: 'Nodding, engaged' },
          { name: 'Mark (CTO)', reaction: 'Wants more detail' },
          { name: 'Lisa (VP Ops)', reaction: 'Taking notes' },
        ].map((audience) => (
          <div key={audience.name} className="p-3 rounded-brand-sm bg-surface border border-border">
            <div className="w-6 h-6 rounded-full bg-accent-soft/30 mx-auto mb-2" />
            <p className="text-caption font-body-medium text-copy-mid text-center leading-tight">{audience.name}</p>
            <p className="text-caption text-copy-faint text-center mt-1">{audience.reaction}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
        <p className="text-caption text-copy-mid">
          <span className="font-body-medium text-accent">Mark:</span> &ldquo;Can you elaborate on the implementation timeline?&rdquo;
        </p>
      </div>
    </div>
  )
}

/** A mock personal scenario creator interface. */
export function MockScenarioCreator() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Create Scenario
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-caption font-body-medium text-copy-mid block mb-2">
            What conversation do you want to practice?
          </label>
          <div className="px-4 py-3 rounded-brand-sm border border-border bg-surface">
            <span className="text-body-sm text-copy-mid">
              I need to give feedback to a team member about missed deadlines
            </span>
          </div>
        </div>

        <div>
          <label className="text-caption font-body-medium text-copy-mid block mb-2">
            What should the other person be like?
          </label>
          <div className="px-4 py-3 rounded-brand-sm border border-border bg-surface">
            <span className="text-body-sm text-copy-mid">
              Defensive at first, but ultimately open to feedback
            </span>
          </div>
        </div>

        <div>
          <label className="text-caption font-body-medium text-copy-mid block mb-2">
            Any specific context?
          </label>
          <div className="px-4 py-3 rounded-brand-sm border border-border bg-surface">
            <span className="text-body-sm text-copy-faint italic">
              Optional — add details about your situation
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-caption text-copy-faint">Private — only visible to you</span>
        <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-5 py-2 text-caption font-body-medium">
          Start Conversation
        </span>
      </div>
    </div>
  )
}

/** A mock admin scenario builder interface. */
export function MockAdminBuilder() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Scenario Builder
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
          <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-caption text-accent">1</span>
          <div className="flex-1">
            <p className="text-caption font-body-medium text-dark">Scenario context</p>
            <p className="text-caption text-copy-light">Performance review — underperforming team member</p>
          </div>
          <span className="text-caption text-accent">✓</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
          <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-caption text-accent">2</span>
          <div className="flex-1">
            <p className="text-caption font-body-medium text-dark">AI character behavior</p>
            <p className="text-caption text-copy-light">Defensive, avoids direct answers, becomes emotional</p>
          </div>
          <span className="text-caption text-accent">✓</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface">
          <span className="w-6 h-6 rounded-full bg-surface-alt border border-border flex items-center justify-center text-caption text-copy-faint">3</span>
          <div className="flex-1">
            <p className="text-caption font-body-medium text-copy-mid">Feedback criteria</p>
            <p className="text-caption text-copy-faint">Define what good looks like</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface opacity-50">
          <span className="w-6 h-6 rounded-full bg-surface-alt border border-border flex items-center justify-center text-caption text-copy-faint">4</span>
          <div className="flex-1">
            <p className="text-caption font-body-medium text-copy-faint">Assign to team</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/** A mock in-house customization delivery flow. */
export function MockCustomizationDelivery() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Customization Service
        </span>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-brand-sm bg-surface border border-border">
        <div className="w-10 h-10 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0">
          <span className="text-caption font-body-medium text-accent">AB</span>
        </div>
        <div>
          <p className="text-caption font-body-medium text-dark">Brief received</p>
          <p className="text-caption text-copy-light">
            &ldquo;We need scenarios for our Q2 sales kickoff covering new pricing...&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-copy-faint justify-center">
        <div className="h-px w-8 bg-border" />
        <span className="text-caption">48 hours</span>
        <div className="h-px w-8 bg-border" />
      </div>

      <div className="space-y-2">
        {[
          { title: 'Enterprise renewal — CFO pushback', status: 'Ready' },
          { title: 'Discovery call — cold prospect', status: 'Ready' },
          { title: 'Competitive displacement — VP Ops', status: 'In review' },
        ].map((scenario) => (
          <div key={scenario.title} className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface-white">
            <span className={`text-caption font-body-medium ${scenario.status === 'Ready' ? 'text-accent' : 'text-copy-faint'}`}>
              {scenario.status === 'Ready' ? '✓' : '○'}
            </span>
            <span className="text-caption text-copy-mid flex-1">{scenario.title}</span>
            <span className={`text-caption ${scenario.status === 'Ready' ? 'text-accent' : 'text-copy-faint'}`}>
              {scenario.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock voice AI conversation in progress. */
export function MockVoiceConversation() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Live Conversation
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-caption text-copy-faint">2:34</span>
        </span>
      </div>

      {/* Waveform visualization */}
      <div className="flex items-center justify-center gap-1 h-12 px-4">
        {[20, 45, 30, 65, 85, 55, 70, 40, 60, 80, 35, 50, 75, 45, 30, 55, 70, 40, 25, 50].map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-accent-soft/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      {/* Conversation transcript */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0">
            <span className="text-caption text-copy-faint">AI</span>
          </div>
          <div className="px-4 py-3 rounded-brand-sm bg-surface border border-border flex-1">
            <p className="text-caption text-copy-mid leading-relaxed">
              &ldquo;I appreciate you raising this, but I don&apos;t think my performance has dropped. I&apos;ve been handling a lot of additional work.&rdquo;
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-end">
          <div className="px-4 py-3 rounded-brand-sm bg-accent-whisper border border-accent-soft/30 flex-1 max-w-[80%]">
            <p className="text-caption text-copy-mid leading-relaxed">
              &ldquo;I hear you, and I want to understand. Let&apos;s talk about the workload first...&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Response time indicator */}
      <div className="flex items-center justify-center gap-2 py-2">
        <span className="text-caption text-copy-faint">Response time:</span>
        <span className="text-caption font-body-medium text-accent">340ms</span>
      </div>
    </div>
  )
}

/** A mock Slack-style notification nudging someone to complete a simulation. */
export function MockTrainingNudge() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center shrink-0">
        <span className="text-caption font-body-medium text-accent">A</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-caption font-body-medium text-dark">Ambr AI</span>
          <span className="text-caption text-copy-faint">10:24 AM</span>
        </div>
        <div className="p-3 rounded-brand-sm bg-surface border border-border space-y-2.5">
          <p className="text-caption text-copy-mid leading-relaxed">
            Hi Sarah - you&apos;re 2 scenarios away from completing the
            <span className="font-body-medium text-dark"> Performance Feedback</span> journey.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden">
              <div className="h-full rounded-full bg-accent-soft" style={{ width: '71%' }} />
            </div>
            <span className="text-caption text-copy-light shrink-0">5/7</span>
          </div>
          <p className="text-caption text-copy-light">
            Next up: <span className="text-copy-mid">Delivering feedback to a defensive team member</span>
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-3.5 py-1.5 text-caption font-body-medium">
              Start scenario
            </span>
            <span className="inline-block rounded-brand-sm border border-border px-3.5 py-1.5 text-caption text-copy-mid">
              Remind me later
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** A mock LMS interface showing Ambr AI embedded as a training module. */
export function MockLmsEmbed() {
  const modules = [
    { title: 'Performance Feedback', type: 'AI Simulation', status: 'In progress', progress: 71 },
    { title: 'Conflict Resolution', type: 'AI Simulation', status: 'Not started', progress: 0 },
    { title: 'Difficult Conversations', type: 'AI Simulation', status: 'Completed', progress: 100 },
  ]

  return (
    <div className="space-y-4">
      {/* LMS nav bar */}
      <div className="flex items-center gap-4 pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-dark/10" />
          <span className="text-caption font-body-medium text-copy-light">Your LMS</span>
        </div>
        <div className="flex gap-3 ml-auto">
          <span className="text-caption text-copy-faint">Catalog</span>
          <span className="text-caption text-dark font-body-medium">My Learning</span>
          <span className="text-caption text-copy-faint">Reports</span>
        </div>
      </div>

      {/* Course header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center shrink-0">
          <span className="text-caption font-body-medium text-accent">A</span>
        </div>
        <div>
          <p className="text-caption font-body-medium text-dark">Leadership Development</p>
          <p className="text-caption text-copy-faint">Ambr AI &middot; 7 simulations</p>
        </div>
      </div>

      {/* Module list */}
      <div className="space-y-2">
        {modules.map((mod) => (
          <div
            key={mod.title}
            className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface"
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                mod.progress === 100
                  ? 'border-accent bg-accent'
                  : mod.progress > 0
                    ? 'border-accent-soft'
                    : 'border-copy-faint/30'
              }`}
            >
              {mod.progress === 100 && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {mod.progress > 0 && mod.progress < 100 && (
                <div className="w-2 h-2 rounded-full bg-accent-soft" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-caption font-body-medium text-dark">{mod.title}</p>
              <p className="text-caption text-copy-faint">{mod.type}</p>
            </div>
            {mod.progress > 0 && mod.progress < 100 && (
              <div className="w-16 h-1.5 rounded-full bg-surface-alt overflow-hidden shrink-0">
                <div className="h-full rounded-full bg-accent-soft" style={{ width: `${mod.progress}%` }} />
              </div>
            )}
            <span className={`text-caption shrink-0 ${
              mod.progress === 100 ? 'text-accent' : 'text-copy-faint'
            }`}>
              {mod.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock deployment timeline showing brief → build → practice. */
export function MockDeploymentTimeline() {
  const steps = [
    { label: 'Brief received', time: 'Day 1', done: true },
    { label: 'Simulation built', time: 'Day 3', done: true },
    { label: 'Team practicing', time: 'Day 5', done: false },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Deployment Timeline
        </span>
      </div>

      <div className="relative">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-start gap-4 mb-6 last:mb-0">
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  step.done
                    ? 'border-accent bg-accent-whisper'
                    : 'border-accent-soft bg-surface'
                }`}
              >
                {step.done && (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-8 bg-border mt-1" />
              )}
            </div>
            <div className="pt-0.5">
              <p className="text-caption font-body-medium text-dark">{step.label}</p>
              <p className="text-caption text-copy-light">{step.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock evaluation rubric showing scored competencies. */
export function MockEvaluationRubric() {
  const criteria = [
    { label: 'Objection Handling', score: 92 },
    { label: 'Product Knowledge', score: 88 },
    { label: 'Empathy & Tone', score: 95 },
    { label: 'Closing Methodology', score: 85 },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Evaluation Rubric
        </span>
      </div>

      {criteria.map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption font-body-medium text-copy-mid">{item.label}</span>
            <span className="text-caption text-copy-light">{item.score}%</span>
          </div>
          <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-accent-soft"
              style={{ width: `${item.score}%` }}
            />
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-border">
        <p className="text-caption text-copy-light leading-relaxed">
          Scored against your internal sales competency framework. Calibrated to your
          methodology and language.
        </p>
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
