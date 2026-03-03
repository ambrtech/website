import { createMetadata } from '@/lib/metadata'
import { ComparisonLayout } from '@/components/sections/comparison-layout'
import { UseCaseCards } from '@/components/sections/use-case-cards'
import { ScenarioCards } from '@/components/sections/scenario-cards'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { TrustBadges } from '@/components/sections/trust-badges'
import { ActionPicker } from '@/components/sections/action-picker'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { DetailCards } from '@/components/sections/detail-cards'
import { PullQuote } from '@/components/sections/pull-quote'

export const metadata = createMetadata({
  title: 'Component Preview',
  description: 'All section components in one view.',
  path: '/preview',
})

export default function PreviewPage() {
  return (
    <>
      {/* ── Label ── */}
      <div className="pt-32 pb-8 px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-2">Component Preview</p>
          <h1 className="font-heading text-headline tracking-heading">All sections</h1>
        </div>
      </div>

      {/* ── 1. Comparison Layout ── */}
      <SectionLabel name="ComparisonLayout" />
      <ComparisonLayout
        eyebrow="The landscape"
        heading="How AI roleplay compares to traditional methods"
        subtitle="Most professionals know what a good conversation looks like. The challenge is doing it under pressure."
        items={[
          { tag: 'Traditional', label: 'Classroom roleplay', description: 'Effective but hard to scale. Requires scheduling, facilitators, and willing participants. Most employees get one or two attempts at best.' },
          { tag: 'Scalable', label: 'E-learning and video', description: 'Easy to distribute but passive. Watching a video about handling objections doesn\'t build the skill of handling objections.' },
          { tag: 'High-touch', label: 'Coaching and mentoring', description: 'High impact but expensive and inconsistent. Reserved for senior leaders or high-performers. Not available on demand.' },
          { tag: 'Best of both', label: 'AI roleplay', description: 'Combines the realism of live practice with the scalability of digital learning. Available anytime, for anyone, as many times as needed.', highlighted: true },
        ]}
      />

      {/* ── 2. Use Case Cards ── */}
      <SectionLabel name="UseCaseCards" />
      <UseCaseCards
        eyebrow="Solutions"
        heading="One platform. Every conversation that matters."
        items={[
          { heading: 'Management & Leadership', description: 'Difficult feedback. Performance reviews. Navigating team conflict. Conversations most managers dread — practiced until they don\'t.', href: '/solutions/management-leadership', ctaLabel: 'Try for Free' },
          { heading: 'Sales & Negotiations', description: 'Discovery calls. Objection handling. Contract negotiations. Build the instinct to respond, not recite.', href: '/solutions/sales-negotiations', ctaLabel: 'Try for Free' },
          { heading: 'Customer Service', description: 'Complaints. Escalations. Retention calls. Consistent quality across every interaction.', href: '/solutions/customer-service', ctaLabel: 'Try for Free' },
          { heading: 'And more', description: 'Presentations, onboarding, compliance conversations — if it matters to your business, we can build it.', href: '/solutions/other', ctaLabel: 'Try for Free' },
        ]}
      />

      {/* ── 3. Scenario Cards ── */}
      <SectionLabel name="ScenarioCards" />
      <ScenarioCards
        heading="Choose a Scenario"
        subtitle="These are example scenarios. Every Ambr AI deployment is fully customized to your organisation."
        items={[
          { category: 'Management & Leadership', scenarioTitle: 'Addressing Underperformance', description: 'You are a manager having a conversation with a direct report whose performance has dropped over the past quarter.', href: '/try-for-free' },
          { category: 'Sales & Negotiations', scenarioTitle: 'Handling a Price Objection', description: 'You are a sales professional on a call with a prospective client who is pushing back on price.', href: '/try-for-free' },
          { category: 'Customer Service', scenarioTitle: 'De-escalating a Frustrated Customer', description: 'A customer has experienced repeated issues with their account. They are frustrated and considering leaving.', href: '/try-for-free' },
        ]}
      />

      {/* ── 4. Testimonial Grid ── */}
      <SectionLabel name="TestimonialGrid" />
      <TestimonialGrid
        eyebrow="What people say"
        heading="How L&D leaders describe working with Ambr AI."
        testimonials={[
          { quote: "It's every HR Leader's dream to have a safe way for managers to practice these conversations.", role: 'Head of People', company: 'Design Agency' },
          { quote: 'We love it. It\'s great that we can customize it for our needs.', role: 'L&D Manager', company: 'Professional Services Firm' },
          { quote: "Wow, it's brilliant. It's fascinating. I've never seen anything like it.", role: 'Training Manager', company: 'Recruitment Company' },
          { quote: 'I was blown away with the coaching and feedback, it was spectacular.', role: 'L&D Manager', company: 'Manufacturing Company' },
          { quote: 'Incredibly realistic, providing a safe and convenient environment for practice.', role: 'Director', company: 'Media Company' },
        ]}
      />

      {/* ── 5. Stat Bar ── */}
      <SectionLabel name="StatBar" />
      <StatBar
        items={[
          { value: '93%', label: 'of users report feeling better prepared for real conversations', source: 'Ambr AI user survey' },
          { value: '78%', label: 'felt more comfortable navigating difficult conversations', source: 'Skyscanner 12-week pilot' },
          { value: '92%', label: 'manager engagement rate during the pilot programme', source: 'Skyscanner 12-week pilot' },
        ]}
      />

      {/* ── 6. Trust Badges ── */}
      <SectionLabel name="TrustBadges" />
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified information security management' },
          { label: 'GDPR', description: 'EU data protection compliant' },
          { label: 'EU AI Act', description: 'Aligned with regulatory framework' },
          { label: 'Aikido Security', description: 'Continuous automated auditing' },
        ]}
        cta={{ label: 'Learn more about AI Trust & Safety', href: '/trust/security-certifications' }}
      />

      {/* ── 7. Action Picker ── */}
      <SectionLabel name="ActionPicker" />
      <ActionPicker
        heading="Let's Talk"
        subtitle="Whether you are exploring AI roleplay training for the first time or ready to discuss a specific deployment, we are here to help."
        items={[
          { heading: 'Book a Meeting', description: 'A 30-minute conversation with someone from the Ambr AI team.', href: '/find-out-more', ctaLabel: 'Book a Meeting' },
          { heading: 'Ask Us a Question', description: 'Not ready for a meeting? Send us a question and we\'ll get back to you within one business day.', href: '/find-out-more', ctaLabel: 'Ask a Question' },
          { heading: 'Get a Quote', description: 'If you have a clear sense of your requirements, we can put together a proposal.', href: '/find-out-more', ctaLabel: 'Request a Quote' },
        ]}
      />

      {/* ── 8. Numbered Steps ── */}
      <SectionLabel name="NumberedSteps" />
      <NumberedSteps
        eyebrow="Getting started"
        heading="What the buying process looks like"
        items={[
          { title: 'Tell us what you need', description: 'A short conversation about your use cases, team size, and goals. We listen first.' },
          { title: 'See it in action', description: 'Try customized simulations built for your actual scenarios. Not a generic demo.' },
          { title: 'Go live', description: 'Rollout support, admin setup, and your first scenarios — ready in days, not months.' },
        ]}
      />

      {/* ── 9. Detail Cards ── */}
      <SectionLabel name="DetailCards" />
      <DetailCards
        eyebrow="Built for consulting"
        heading="Scenarios your consultants will practice"
        items={[
          { heading: 'Client pitch preparation', description: 'Practice presenting recommendations, handling pushback, and defending methodology — before the real meeting.' },
          { heading: 'New joiner acceleration', description: 'Get junior consultants client-ready faster. Realistic practice with partner-level feedback, without tying up senior staff.' },
          { heading: 'Difficult client conversations', description: 'Scope creep. Budget overruns. Missed expectations. Your people need to handle these with confidence, not scripts.' },
          { heading: 'Business development', description: 'From initial chemistry meetings to formal proposals — practice the conversations that grow your pipeline.' },
        ]}
      />

      {/* ── 10. Pull Quote ── */}
      <SectionLabel name="PullQuote" />
      <PullQuote
        quote="Incredibly realistic, providing a safe and convenient environment for practice."
        role="Director"
        company="Media Company"
      />
    </>
  )
}

function SectionLabel({ name }: { name: string }) {
  return (
    <div className="px-container-mobile md:px-container pt-16 pb-4">
      <div className="mx-auto max-w-site">
        <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-faint border-t border-border pt-4">
          {name}
        </p>
      </div>
    </div>
  )
}
