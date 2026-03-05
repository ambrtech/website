import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import { ProductScreenshot } from '@/components/sections/product-screenshot'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Admin Experience for L&D Teams',
  description:
    'Aggregated, anonymized data on how your people communicate under pressure. Capability mapping, structured learning paths, and certifications that reshape how you invest in development.',
  path: '/product/admin-experience/ld-teams',
})

/* ── Inline mock UIs ── */

function MockCapabilityMap() {
  const teams = [
    { name: 'Sales — EMEA', strengths: ['Rapport', 'Active listening'], gap: 'Objection handling' },
    { name: 'Sales — APAC', strengths: ['Discovery', 'Rapport'], gap: 'Closing' },
    { name: 'CS — Global', strengths: ['Empathy', 'De-escalation'], gap: 'Upsell conversations' },
    { name: 'Leadership', strengths: ['Feedback delivery', 'Coaching'], gap: 'Difficult conversations' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Capability Overview
        </span>
        <span className="text-caption text-copy-faint">Q1 2026</span>
      </div>
      {teams.map((team) => (
        <div key={team.name} className="p-3 rounded-brand-sm bg-surface border border-border">
          <p className="text-caption font-body-medium text-dark mb-2">{team.name}</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {team.strengths.map((s) => (
              <span key={s} className="text-caption px-2 py-0.5 rounded-full bg-accent-whisper text-accent border border-accent-soft/30">
                {s}
              </span>
            ))}
          </div>
          <p className="text-caption text-copy-light">
            Gap: <span className="text-copy-mid">{team.gap}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

function MockLearningPath() {
  const steps = [
    { title: 'Foundation', scenarios: 3, status: 'complete' },
    { title: 'Intermediate', scenarios: 4, status: 'active' },
    { title: 'Advanced', scenarios: 3, status: 'locked' },
    { title: 'Certification', scenarios: 1, status: 'locked' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Journey: Performance Feedback
        </span>
      </div>
      {steps.map((step, i) => (
        <div
          key={step.title}
          className={`flex items-center gap-4 p-3 rounded-brand-sm border ${
            step.status === 'active'
              ? 'border-accent-soft bg-accent-whisper'
              : step.status === 'complete'
              ? 'border-border bg-surface'
              : 'border-border bg-surface opacity-50'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-caption font-body-medium shrink-0 ${
            step.status === 'complete'
              ? 'bg-accent-soft text-surface-white'
              : step.status === 'active'
              ? 'bg-accent text-surface-white'
              : 'bg-surface-alt text-copy-faint'
          }`}>
            {step.status === 'complete' ? '✓' : String(i + 1).padStart(2, '0')}
          </div>
          <div className="min-w-0">
            <p className="text-caption font-body-medium text-dark">{step.title}</p>
            <p className="text-caption text-copy-light">{step.scenarios} scenarios</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function MockCertification() {
  const certs = [
    { name: 'Feedback Foundations', earned: 14, total: 18, status: 'active' },
    { name: 'Conflict Resolution', earned: 9, total: 12, status: 'active' },
    { name: 'Inclusive Leadership', earned: 0, total: 15, status: 'upcoming' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Certifications
        </span>
        <span className="text-caption text-copy-faint">44 team members</span>
      </div>
      {certs.map((cert) => (
        <div key={cert.name} className="p-4 rounded-brand-sm bg-surface border border-border">
          <div className="flex items-center justify-between mb-3">
            <p className="text-caption font-body-medium text-dark">{cert.name}</p>
            <span className={`text-caption px-2 py-0.5 rounded-full ${
              cert.status === 'active'
                ? 'bg-accent-whisper text-accent'
                : 'bg-surface-alt text-copy-faint'
            }`}>
              {cert.status === 'active' ? 'In progress' : 'Upcoming'}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-accent-soft"
              style={{ width: `${(cert.earned / cert.total) * 100}%` }}
            />
          </div>
          <p className="text-caption text-copy-light mt-2">
            {cert.earned} of {cert.total} certified
          </p>
        </div>
      ))}
    </div>
  )
}

function MockEngagementDashboard() {
  const weeks = [
    { label: 'W1', active: 32 },
    { label: 'W2', active: 28 },
    { label: 'W3', active: 41 },
    { label: 'W4', active: 38 },
    { label: 'W5', active: 45 },
    { label: 'W6', active: 42 },
  ]
  const maxActive = Math.max(...weeks.map((w) => w.active))

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Engagement
        </span>
        <span className="text-caption text-copy-faint">Last 6 weeks</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-brand-sm bg-surface border border-border text-center">
          <p className="font-heading text-section tracking-heading text-dark leading-none mb-1">89%</p>
          <p className="text-eyebrow-sm text-copy-light">Completion</p>
        </div>
        <div className="p-3 rounded-brand-sm bg-surface border border-border text-center">
          <p className="font-heading text-section tracking-heading text-dark leading-none mb-1">3.2</p>
          <p className="text-eyebrow-sm text-copy-light">Avg. sessions/wk</p>
        </div>
        <div className="p-3 rounded-brand-sm bg-surface border border-border text-center">
          <p className="font-heading text-section tracking-heading text-dark leading-none mb-1">↑12%</p>
          <p className="text-eyebrow-sm text-copy-light">vs. last period</p>
        </div>
      </div>
      <div className="flex items-end gap-2 h-20">
        {weeks.map((w) => (
          <div key={w.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-sm bg-accent-soft/60"
              style={{ height: `${(w.active / maxActive) * 100}%` }}
            />
            <span className="text-caption text-copy-faint">{w.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LDTeamsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
          { name: 'L&D Teams', href: '/product/admin-experience/ld-teams' },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        compact
        eyebrow="For L&D Teams"
        heading={
          <>
            The <em className="text-accent">insight</em> behind your
            development strategy
          </>
        }
        subtitle="Aggregated, anonymized data on how your people communicate under pressure: where they hesitate, where they excel, and what patterns emerge across cohorts. Not just completion rates. The kind of insight that reshapes how you invest in capability."
      />

      {/* ── Stat bar ── */}
      <StatBar
        items={[
          { value: '30+', label: 'Languages for global rollout' },
          { value: '100%', label: 'Of sessions produce structured capability data' },
          { value: 'Real-time', label: 'Aggregated insights across teams and regions' },
        ]}
      />

      {/* ── 1. Capability mapping — left text, right mock ── */}
      <SplitContent
        eyebrow="From insight to action"
        heading={
          <>
            See where capability{' '}
            <em className="text-accent">clusters</em> and where it gaps
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockCapabilityMap />
          </ProductScreenshot>
        }
      >
        <p>
          See where communication strengths and weaknesses cluster across
          teams, levels, or regions. Ambr AI aggregates individual simulation
          results into team-level capability views, so you can design
          interventions that target real gaps, not assumed ones.
        </p>
        <p>
          Your competency models. Your behavioral indicators. Your language.
          Simulations are built around the way your organization actually
          talks about development. Build scenarios yourself in the platform,
          or brief our team and we&apos;ll create them for you.
        </p>
      </SplitContent>

      {/* ── 2. Structured learning paths — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Structured development"
        heading={
          <>
            Learning paths that build skills{' '}
            <em className="text-accent">progressively</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockLearningPath />
          </ProductScreenshot>
        }
      >
        <p>
          Use Journeys to move people from foundational to advanced scenarios
          in a logical, progressive sequence. Each step is unlocked by
          demonstrated capability, not just attendance.
        </p>
      </SplitContent>

      {/* ── 3. Certifications — left text, right mock ── */}
      <SplitContent
        eyebrow="Verified competency"
        heading={
          <>
            Certifications that{' '}
            <em className="text-accent">mean</em> something
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockCertification />
          </ProductScreenshot>
        }
      >
        <p>
          Set competency thresholds, track completion, and provide
          stakeholders with clear evidence of capability. When someone earns
          a certification, it reflects what they can actually do in a live
          conversation.
        </p>
      </SplitContent>

      {/* ── 4. Engagement visibility — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Engagement visibility"
        heading={
          <>
            Know who&apos;s training and where to{' '}
            <em className="text-accent">intervene</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockEngagementDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Know who&apos;s training, who&apos;s falling behind, and where to
          intervene. Spot disengagement early and understand which programs
          drive repeat usage and real improvement.
        </p>
        <p>
          Roll out across functions, geographies, and languages from a
          single dashboard. Your teams in Singapore, S&atilde;o Paulo, and
          Stockholm get the same quality of training — and the data rolls
          up into one unified view.
        </p>
      </SplitContent>

      {/* ── Social proof ── */}
      <PullQuote
        quote="The feedback is really well structured, not overloaded with text like other tools where you don't know where to start."
        role="L&D Manager"
        company="Global Logistics Company"
      />

      <CTA />
    </>
  )
}
