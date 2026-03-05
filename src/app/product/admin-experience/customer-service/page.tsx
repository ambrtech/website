import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { SplitContent } from '@/components/sections/split-content'
import {
  ProductScreenshot,
  MockFeedbackPanel,
  MockDashboard,
} from '@/components/sections/product-screenshot'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'Admin Experience for Customer Service',
  description:
    'Structured, repeatable training on escalations, complaints, and high-pressure customer interactions. Drive consistency across every shift and every location.',
  path: '/product/admin-experience/customer-service',
})

/* ── Inline mock UIs ── */

function MockEscalationScenario() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          De-escalation Simulation
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-alt border border-border flex items-center justify-center">
          <span className="font-heading text-body-sm text-copy-mid">MC</span>
        </div>
        <div>
          <p className="text-body-sm font-body-medium text-dark">Maria Chen</p>
          <p className="text-caption text-copy-light">Frustrated customer, third contact about same issue</p>
        </div>
      </div>
      <div className="p-3 rounded-brand-sm bg-surface border border-border">
        <p className="text-caption text-copy-mid leading-relaxed italic">
          &ldquo;I&apos;ve called three times now and nobody has fixed this.
          I want to speak to a manager immediately.&rdquo;
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Empathy', score: 'Strong' },
          { label: 'Composure', score: 'Good' },
          { label: 'Resolution', score: 'Developing' },
        ].map((item) => (
          <div key={item.label} className="p-2 rounded-brand-sm bg-surface border border-border text-center">
            <p className="text-caption font-body-medium text-dark">{item.score}</p>
            <p className="text-caption text-copy-light">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockRetentionConversation() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
          Session Feedback
        </span>
      </div>
      {[
        { label: 'Value articulation', score: 88, level: 'Strong' },
        { label: 'Active listening', score: 74, level: 'Good' },
        { label: 'Natural tone', score: 68, level: 'Developing' },
        { label: 'Upsell transition', score: 52, level: 'Developing' },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-caption font-body-medium text-copy-mid">{item.label}</span>
            <span className="text-caption text-copy-light">{item.level}</span>
          </div>
          <div className="h-1 rounded-full bg-surface-alt overflow-hidden">
            <div
              className="h-full rounded-full bg-accent-soft"
              style={{ width: `${item.score}%` }}
            />
          </div>
        </div>
      ))}
      <div className="pt-3 border-t border-border">
        <p className="text-caption text-copy-light leading-relaxed">
          You framed the value well. Try introducing the upsell earlier in
          the conversation — it felt more natural in your second attempt.
        </p>
      </div>
    </div>
  )
}

function MockLanguageGrid() {
  const languages = [
    { code: 'EN', name: 'English', agents: 124 },
    { code: 'ES', name: 'Spanish', agents: 48 },
    { code: 'FR', name: 'French', agents: 32 },
    { code: 'DE', name: 'German', agents: 28 },
    { code: 'PT', name: 'Portuguese', agents: 22 },
    { code: 'JA', name: 'Japanese', agents: 18 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Multilingual Training
        </span>
        <span className="text-caption text-copy-faint">30+ languages</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <div key={lang.code} className="flex items-center gap-3 p-3 rounded-brand-sm bg-surface border border-border">
            <div className="w-8 h-8 rounded-full bg-accent-whisper border border-accent-soft/30 flex items-center justify-center shrink-0">
              <span className="text-caption font-body-medium text-accent">{lang.code}</span>
            </div>
            <div className="min-w-0">
              <p className="text-caption font-body-medium text-dark">{lang.name}</p>
              <p className="text-caption text-copy-light">{lang.agents} agents</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockCertificationTracker() {
  const agents = [
    { name: 'S. Patel', status: 'certified', date: 'Mar 1' },
    { name: 'J. Kim', status: 'certified', date: 'Feb 28' },
    { name: 'R. Okafor', status: 'in-progress', date: '80%' },
    { name: 'L. Müller', status: 'in-progress', date: '45%' },
    { name: 'A. Costa', status: 'not-started', date: '—' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
          Onboarding Certification
        </span>
        <span className="text-caption text-copy-faint">New cohort</span>
      </div>
      <div className="space-y-1.5">
        {agents.map((agent) => (
          <div key={agent.name} className="flex items-center justify-between p-2.5 rounded-brand-sm bg-surface border border-border">
            <span className="text-caption font-body-medium text-dark">{agent.name}</span>
            <span className={`text-caption px-2 py-0.5 rounded-full ${
              agent.status === 'certified'
                ? 'bg-accent-whisper text-accent'
                : agent.status === 'in-progress'
                ? 'bg-surface-alt text-copy-mid'
                : 'bg-surface-alt text-copy-faint'
            }`}>
              {agent.status === 'certified' ? `Certified ${agent.date}` : agent.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CustomerServicePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/how-it-works' },
          { name: 'Admin Experience', href: '/product/admin-experience' },
          {
            name: 'Customer Service',
            href: '/product/admin-experience/customer-service',
          },
        ]}
      />

      {/* ── Hero ── */}
      <PageHero
        compact
        eyebrow="For Customer Service"
        heading={
          <>
            Consistent service starts with consistent{' '}
            <em className="text-accent">practice</em>
          </>
        }
        subtitle="Every customer interaction reflects your brand. But most service training is a one-time onboarding exercise, and the quality of live conversations depends on whoever happens to be on shift. Ambr AI gives customer service teams structured, repeatable training on escalations, complaints, complex inquiries, and the high-pressure moments where consistency matters most."
      />

      {/* ── Stat bar ── */}
      <StatBar
        items={[
          { value: '3x', label: 'More practice conversations than classroom training' },
          { value: '30+', label: 'Languages for multilingual support teams' },
          { value: '100%', label: 'Consistency across shifts, locations, and time zones' },
        ]}
      />

      {/* ── 1. Complaint handling — left text, right mock ── */}
      <SplitContent
        eyebrow="Built for frontline teams"
        heading={
          <>
            Train for the moments that test{' '}
            <em className="text-accent">composure</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockEscalationScenario />
          </ProductScreenshot>
        }
      >
        <p>
          Train your team to stay composed, empathetic, and
          solution-oriented under pressure. Escalations, complaints, and
          complex inquiries — practiced in realistic simulations before
          they face a real frustrated customer.
        </p>
      </SplitContent>

      {/* ── 2. Upsell & retention — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Value-led conversations"
        heading={
          <>
            Upsell and retention that feels{' '}
            <em className="text-accent">natural</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockRetentionConversation />
          </ProductScreenshot>
        }
      >
        <p>
          Build confidence in value-led conversations that feel natural,
          not scripted. Feedback on tone, listening, and transition helps
          agents develop conversations that serve the customer and the
          business.
        </p>
      </SplitContent>

      {/* ── 3. Multilingual — left text, right mock ── */}
      <SplitContent
        eyebrow="Global support"
        heading={
          <>
            Train in 30+ languages, not just{' '}
            <em className="text-accent">translations</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockLanguageGrid />
          </ProductScreenshot>
        }
      >
        <p>
          Culturally adjusted scenarios, not word-for-word translations.
          Capability data rolls up into a single unified view regardless
          of language, so you see the full picture across every region.
        </p>
      </SplitContent>

      {/* ── 4. Onboarding — reversed ── */}
      <SplitContent
        reversed
        eyebrow="Onboarding at speed"
        heading={
          <>
            New agents reach the floor{' '}
            <em className="text-accent">faster</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockCertificationTracker />
          </ProductScreenshot>
        }
      >
        <p>
          New agents start practicing from their first week. Certification
          workflows set and verify standards before they handle live
          interactions. You know exactly who&apos;s ready — and who needs
          more time.
        </p>
        <p>
          Whether you&apos;re running a team of 20 or a contact center of
          2,000, quality stays consistent across every shift and every
          location. No variation based on who runs the session.
        </p>
      </SplitContent>

      {/* ── 5. Visibility — left text, right mock ── */}
      <SplitContent
        eyebrow="Frontline intelligence"
        heading={
          <>
            Visibility into frontline{' '}
            <em className="text-accent">capability</em>
          </>
        }
        visualContent={
          <ProductScreenshot tint>
            <MockDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Aggregated insight into communication patterns across your team:
          where people excel, where consistency breaks down, and which
          conversation types need more attention.
        </p>
        <p>
          Use that data to target development, refine training programs,
          and build evidence for quality assurance reviews.
        </p>
      </SplitContent>

      {/* ── Social proof ── */}
      <PullQuote
        quote="The feedback is really well structured, not overloaded with text like other tools where you don't know where to start."
        role="L&D Manager"
        company="Global Logistics Company"
      />

      {/* ── CTA ── */}
      <section className="py-section-lg md:py-section-xl px-container-mobile md:px-container text-center bg-dark text-surface">
        <Reveal>
          <h2 className="font-heading text-headline leading-[1.1] tracking-heading mb-10 text-surface">
            See it for <em className="text-accent">yourself</em>.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/try-for-free"
              className="inline-block rounded-brand-sm bg-accent text-surface-white px-8 py-3.5 text-sm font-body-medium transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg"
            >
              Try for Free
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-brand-sm border border-surface/20 text-surface px-8 py-3.5 text-sm font-body-medium transition-all hover:border-surface/40 hover:-translate-y-px"
            >
              Find Out More
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
