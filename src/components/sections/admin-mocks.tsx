/**
 * Mock UI panels for the Admin Experience page.
 * Designed to be used as children of <ProductScreenshot>.
 */

/** A mock usage analytics dashboard focused on outcomes and improvement. */
export function MockUsageAnalytics() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Team Performance
        </span>
        <span className="text-caption text-copy-faint px-2 py-1 rounded-brand-sm border border-border">
          Sales Team &middot; Q1 2026
        </span>
      </div>

      {/* Outcome-focused summary */}
      <div className="grid grid-cols-3 gap-3">
        {([
          { label: 'Avg. score', value: '74%', trend: '+8%' },
          { label: 'Improving', value: '89%', trend: '' },
          { label: 'Active users', value: '142', trend: '' },
        ] as const).map(({ label, value, trend }) => (
          <div key={label} className="p-2.5 rounded-brand-sm bg-surface border border-border">
            <div className="flex items-baseline gap-1.5">
              <p className="font-heading text-label tracking-heading text-dark leading-none">{value}</p>
              {trend && <span className="text-detail text-accent font-body-medium">{trend}</span>}
            </div>
            <p className="text-detail text-copy-faint mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Improvement over time chart */}
      <div>
        <p className="text-caption font-body-medium text-copy-mid mb-2">Average score over time</p>
        <div className="relative h-16">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-px bg-border" />
            ))}
          </div>
          {/* Upward trend line approximation using bars */}
          <div className="relative flex items-end gap-[3px] h-full">
            {[38, 42, 40, 46, 48, 52, 50, 55, 54, 58, 60, 64, 62, 66, 68, 70, 72, 74, 73, 76, 78, 80, 79, 82].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent-soft/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between text-detail text-copy-faint mt-1.5">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
      </div>

      {/* Skills breakdown */}
      <div className="space-y-2">
        <p className="text-caption font-body-medium text-copy-mid">Skill performance</p>
        {([
          { label: 'Active listening', score: 82, change: '+6' },
          { label: 'Objection handling', score: 68, change: '+11' },
          { label: 'Closing', score: 59, change: '+4' },
        ] as const).map((skill) => (
          <div key={skill.label} className="flex items-center gap-3">
            <span className="text-caption text-copy-mid w-28 shrink-0">{skill.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-surface-alt overflow-hidden">
              <div
                className="h-full rounded-full bg-accent-soft"
                style={{ width: `${skill.score}%` }}
              />
            </div>
            <span className="text-caption text-accent font-body-medium w-8 text-right shrink-0">{skill.change}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock learning insights panel showing aggregated team strengths and gaps. */
export function MockLearningInsights() {
  const strengths = [
    { label: 'Building rapport', level: 92 },
    { label: 'Active listening', level: 88 },
    { label: 'Empathy and tone', level: 85 },
  ]

  const gaps = [
    { label: 'Handling objections', level: 52 },
    { label: 'Closing and next steps', level: 48 },
    { label: 'Navigating silence', level: 41 },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Learning Insights
        </span>
        <span className="text-caption text-copy-faint">Sales Team &middot; Q1 2026</span>
      </div>

      {/* Strengths */}
      <div>
        <p className="text-caption font-body-medium text-copy-mid mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Strengths
        </p>
        <div className="space-y-2.5">
          {strengths.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-copy-mid">{item.label}</span>
                <span className="text-caption text-copy-light">{item.level}%</span>
              </div>
              <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
                <div className="h-full rounded-full bg-accent-soft" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gaps */}
      <div>
        <p className="text-caption font-body-medium text-copy-mid mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-copy-faint" />
          Areas for development
        </p>
        <div className="space-y-2.5">
          {gaps.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-copy-mid">{item.label}</span>
                <span className="text-caption text-copy-light">{item.level}%</span>
              </div>
              <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
                <div className="h-full rounded-full bg-copy-faint/40" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trend indicator */}
      <div className="pt-3 border-t border-border flex items-center gap-2">
        <span className="text-caption text-accent font-body-medium">+12%</span>
        <span className="text-caption text-copy-light">overall improvement since last quarter</span>
      </div>
    </div>
  )
}

/** A mock streaks and engagement configuration panel. */
export function MockStreaksConfig() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Engagement Settings
        </span>
      </div>

      {/* Streaks */}
      <div className="p-4 rounded-brand-sm border border-border bg-surface space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-caption font-body-medium text-dark">Streaks</p>
            <p className="text-detail text-copy-faint">Encourage regular engagement</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-accent relative">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm" />
          </div>
        </div>

        <div className="flex gap-2">
          {(['Weekly', 'Fortnightly', 'Monthly'] as const).map((freq, i) => (
            <div
              key={freq}
              className={`flex-1 text-center py-2 rounded-brand-sm text-caption ${
                i === 0
                  ? 'bg-accent-whisper border border-accent-soft/40 font-body-medium text-dark'
                  : 'border border-border text-copy-light'
              }`}
            >
              {freq}
            </div>
          ))}
        </div>

        <div>
          <p className="text-caption text-copy-mid mb-1.5">Target: 2 scenarios per week</p>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div className="h-full rounded-full bg-accent" style={{ width: '40%' }} />
          </div>
        </div>
      </div>

      {/* Reminders */}
      <div className="p-4 rounded-brand-sm border border-border bg-surface space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-caption font-body-medium text-dark">Reminders</p>
            <p className="text-detail text-copy-faint">Via email, Slack, or Microsoft Teams</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-accent relative">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm" />
          </div>
        </div>
        <div className="flex gap-2">
          {(['Email', 'Slack', 'Teams'] as const).map((channel) => (
            <span
              key={channel}
              className="text-detail px-2 py-1 rounded-brand-sm bg-accent-whisper border border-accent-soft/30 text-copy-mid"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      {/* Admin digest */}
      <div className="p-4 rounded-brand-sm border border-border bg-surface">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-caption font-body-medium text-dark">Admin digest</p>
            <p className="text-detail text-copy-faint">Weekly summary of insights and engagement</p>
          </div>
          <div className="w-9 h-5 rounded-full bg-accent relative">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

/** A mock user and group management panel. */
export function MockUserGroups() {
  const groups = [
    { name: 'Sales Team', members: 24, color: 'bg-accent-soft' },
    { name: 'London Office', members: 38, color: 'bg-accent-tint' },
    { name: 'New Managers', members: 12, color: 'bg-accent-whisper' },
  ]

  const users = [
    { initials: 'SK', name: 'Sarah Kim', role: 'Sales Manager', active: '2h ago', groups: 2 },
    { initials: 'JH', name: 'James Hall', role: 'Account Executive', active: '1d ago', groups: 1 },
    { initials: 'RA', name: 'Riya Anand', role: 'Team Lead', active: '3d ago', groups: 3 },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Users &amp; Groups
        </span>
        <span className="text-caption text-copy-faint">142 users</span>
      </div>

      {/* Groups */}
      <div className="flex gap-2">
        {groups.map((group) => (
          <div key={group.name} className={`flex-1 p-3 rounded-brand-sm border border-border ${group.color}`}>
            <p className="text-caption font-body-medium text-dark leading-tight">{group.name}</p>
            <p className="text-detail text-copy-light mt-0.5">{group.members} members</p>
          </div>
        ))}
      </div>

      {/* User list */}
      <div className="space-y-0 border border-border rounded-brand-sm overflow-hidden">
        {users.map((user, i) => (
          <div
            key={user.initials}
            className={`flex items-center gap-3 px-4 py-3 bg-surface-white ${
              i !== users.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0">
              <span className="text-detail font-body-medium text-copy-mid">{user.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-caption font-body-medium text-dark">{user.name}</p>
              <p className="text-detail text-copy-faint">{user.role}</p>
            </div>
            <span className="text-detail text-copy-faint shrink-0">{user.active}</span>
            <span className="text-detail text-copy-light shrink-0 px-1.5 py-0.5 rounded-brand-sm bg-surface border border-border">
              {user.groups} {user.groups === 1 ? 'group' : 'groups'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** A mock module management panel showing toggles per module. */
export function MockModuleManagement() {
  const modules = [
    { name: 'Difficult Conversations', desc: 'Core management scenarios', enabled: true, scope: 'All users' },
    { name: 'AI Coaching', desc: 'Advanced coaching and mentoring', enabled: true, scope: '5 selected users' },
    { name: 'Presentations', desc: 'Presentation practice with AI audience', enabled: false, scope: 'Disabled' },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Module Management
        </span>
      </div>

      <div className="space-y-3">
        {modules.map((mod) => (
          <div key={mod.name} className="p-4 rounded-brand-sm border border-border bg-surface">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-caption font-body-medium text-dark">{mod.name}</p>
                <p className="text-detail text-copy-faint">{mod.desc}</p>
              </div>
              <div className={`w-9 h-5 rounded-full relative flex items-center ${mod.enabled ? 'bg-accent justify-end' : 'bg-surface-alt border border-border justify-start'}`}>
                <div
                  className="w-4 h-4 rounded-full bg-surface-white shadow-sm mx-0.5"
                />
              </div>
            </div>
            <span className={`text-detail ${mod.enabled ? 'text-accent' : 'text-copy-faint'}`}>
              {mod.scope}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
