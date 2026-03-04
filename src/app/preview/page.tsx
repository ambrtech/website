import Image from 'next/image'
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
import { ProductScreenshot, MockFeedbackPanel, MockScenarioCard, MockDashboard, MockJourneyGrid, MockContextSelector } from '@/components/sections/product-screenshot'
import { BentoShowcase } from '@/components/sections/bento-showcase'
import { SplitContent } from '@/components/sections/split-content'
import { VisualFeatureCards } from '@/components/sections/visual-feature-cards'
import { ShowcaseSplit } from '@/components/sections/showcase-split'
import { StatStack } from '@/components/sections/stat-stack'
import { AccordionShowcase } from '@/components/sections/accordion-showcase'

export const metadata = createMetadata({
  title: 'Component Preview',
  description: 'All section components in one view.',
  path: '/preview',
})

const FILTER_PRESETS = [
  { name: 'None', className: '', crop: 'origin-center' },
  { name: 'Muted Cool', className: 'filter-muted-cool', crop: 'origin-top-right' },
  { name: 'Faded', className: 'filter-faded', crop: 'origin-top-left' },
  { name: 'Duotone', className: 'filter-duotone', crop: 'origin-bottom-right' },
  { name: 'Duotone Cream', className: 'filter-duotone-cream', crop: 'origin-bottom-left' },
  { name: 'Duotone Blush', className: 'filter-duotone-blush', crop: 'origin-center' },
  { name: 'Duotone Copper', className: 'filter-duotone-copper', crop: 'origin-top-left' },
] as const

const PHOTO_FILTERS = [
  {
    label: 'editorial-hands-detail.png',
    src: '/images/photography/editorial-hands-detail.png',
    filters: [
      { name: 'None', className: '' },
      { name: 'Duotone', className: 'filter-duotone' },
      { name: 'Duotone Cream', className: 'filter-duotone-cream' },
      { name: 'Duotone Blush', className: 'filter-duotone-blush' },
      { name: 'Duotone Copper', className: 'filter-duotone-copper' },
      { name: 'Faded', className: 'filter-faded' },
    ],
  },
  {
    label: 'practice-phone-booth.png',
    src: '/images/photography/practice-phone-booth.png',
    filters: [
      { name: 'None', className: '' },
      { name: 'Duotone', className: 'filter-duotone' },
      { name: 'Duotone Cream', className: 'filter-duotone-cream' },
      { name: 'Duotone Blush', className: 'filter-duotone-blush' },
      { name: 'Duotone Copper', className: 'filter-duotone-copper' },
      { name: 'Faded', className: 'filter-faded' },
    ],
  },
] as const

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

      {/* ── SVG Filter Comparison — texture ── */}
      <SectionLabel name="SVG Filter Presets — Texture" />
      <div className="px-container-mobile md:px-container py-8">
        <div className="mx-auto max-w-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FILTER_PRESETS.map((preset) => (
              <div key={preset.name}>
                <div className="relative w-full aspect-[4/3] rounded-brand-lg overflow-hidden mb-3">
                  <Image
                    src="/images/textures/feature-texture.jpg"
                    alt=""
                    fill
                    className={`object-cover scale-[1.5] ${preset.crop} ${preset.className}`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-caption text-copy-mid font-body">{preset.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SVG Filter Comparison — photography ── */}
      <SectionLabel name="SVG Filter Presets — Photography" />
      <div className="px-container-mobile md:px-container py-8">
        <div className="mx-auto max-w-site">
          {PHOTO_FILTERS.map((group) => (
            <div key={group.src} className="mb-12 last:mb-0">
              <p className="text-caption text-copy-light font-body mb-4">{group.label}</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {group.filters.map((f) => (
                  <div key={f.name}>
                    <div className="relative w-full aspect-[3/4] rounded-brand-lg overflow-hidden mb-3">
                      <Image
                        src={group.src}
                        alt=""
                        fill
                        className={`object-cover ${f.className}`}
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                    <p className="text-caption text-copy-mid font-body">{f.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

      {/* ── 11. Product Screenshot (3 variants via SplitContent) ── */}
      <SectionLabel name="ProductScreenshot — Feedback Panel" />
      <SplitContent
        eyebrow="Coaching"
        heading={<>Feedback that actually changes <em className="text-accent">behaviour</em></>}
        visualContent={
          <ProductScreenshot tint>
            <MockFeedbackPanel />
          </ProductScreenshot>
        }
      >
        <p>
          Every conversation ends with structured, personalised coaching: tone, pacing,
          word choice, approach, and delivery. Not a score. Actionable insight your
          people can apply immediately.
        </p>
      </SplitContent>

      <SectionLabel name="ProductScreenshot — Scenario Card" />
      <SplitContent
        reversed
        eyebrow="Simulations"
        heading={<>Scenarios built around <em className="text-accent">your</em> reality</>}
        visualContent={
          <ProductScreenshot>
            <MockScenarioCard />
          </ProductScreenshot>
        }
      >
        <p>
          Every simulation is bespoke. Your terminology, your stakeholders, your
          version of a difficult conversation — not generic templates.
        </p>
      </SplitContent>

      <SectionLabel name="ProductScreenshot — Dashboard" />
      <SplitContent
        eyebrow="Admin"
        heading={<>Visibility across your <em className="text-accent">entire</em> team</>}
        visualContent={
          <ProductScreenshot tint>
            <MockDashboard />
          </ProductScreenshot>
        }
      >
        <p>
          Track engagement, monitor capability trends, and identify where
          targeted coaching will have the biggest impact.
        </p>
      </SplitContent>

      {/* ── 12. Bento Showcase ── */}
      <SectionLabel name="BentoShowcase" />
      <BentoShowcase
        eyebrow="The platform"
        heading={<>Everything your team needs, in <em className="text-accent">one place</em></>}
        subtitle="Voice simulations, structured feedback, team analytics, and 30+ languages — all from a single dashboard."
      />

      {/* ── 13. Visual Feature Cards ── */}
      <SectionLabel name="VisualFeatureCards" />
      <VisualFeatureCards />

      {/* ── 14a. ShowcaseSplit — duotone, top-left crop ── */}
      <SectionLabel name="ShowcaseSplit — left / duotone / top-left" />
      <ShowcaseSplit
        heading={
          <>
            Lorem ipsum dolor sit amet,{' '}
            <em className="text-accent">consectetur</em> adipiscing elit
          </>
        }
        subtitle="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        filter="duotone"
        cropFocus="top-left"
        visualContent={<MockJourneyGrid />}
        features={[
          {
            heading: 'Structured feedback',
            description:
              'Receive detailed, actionable coaching after every practice session. Tone, pacing, word choice, and approach — broken down so you know exactly what to work on.',
          },
          {
            heading: 'Adaptive scenarios',
            description:
              'Simulations that respond to your choices in real time. No two conversations play out the same way, so every session builds genuine capability.',
          },
          {
            heading: 'Custom to your context',
            description:
              'Your terminology, your stakeholders, your version of a difficult conversation. Built around the way your organization actually works.',
          },
        ]}
      />

      {/* ── 14b. ShowcaseSplit — duotone-blush, bottom-right crop ── */}
      <SectionLabel name="ShowcaseSplit — right / duotone-blush / bottom-right" />
      <ShowcaseSplit
        layout="right"
        filter="duotone-blush"
        cropFocus="bottom-right"
        visualContent={<MockContextSelector />}
        heading={
          <>
            Ut enim ad minim veniam,{' '}
            <em className="text-accent">quis nostrud</em> exercitation
          </>
        }
        subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        features={[
          {
            heading: 'Evidence-based insights',
            description:
              'Aggregated data across simulations surfaces patterns in how teams communicate, negotiate, and respond to pressure.',
          },
          {
            heading: 'Progressive learning paths',
            description:
              'Sequence simulations into structured development tracks. Each step unlocked by demonstrated capability, not time served.',
          },
          {
            heading: 'Global deployment',
            description:
              'Roll out programs across functions, geographies, and 30+ languages from a single dashboard.',
          },
        ]}
      />

      {/* ── 14c. ShowcaseSplit — faded, center crop ── */}
      <SectionLabel name="ShowcaseSplit — left / faded / center" />
      <ShowcaseSplit
        filter="faded"
        cropFocus="center"
        visualContent={<MockFeedbackPanel />}
        heading={
          <>
            Excepteur sint occaecat{' '}
            <em className="text-accent">cupidatat</em> non proident
          </>
        }
        subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum."
        features={[
          {
            heading: 'Capability mapping',
            description:
              'Aggregate individual simulation results into team-level capability views. Identify where communication breaks down.',
          },
          {
            heading: 'Certifications with substance',
            description:
              'Award certifications based on observed performance, not quiz scores. Reflects what people can actually do.',
          },
          {
            heading: 'Engagement visibility',
            description:
              'See who is practicing, how often, and how they are progressing. Spot disengagement early.',
          },
        ]}
      />

      {/* ── 15. Stat Stack ── */}
      <SectionLabel name="StatStack" />
      <StatStack
        heading="Lorem ipsum dolor sit amet"
        items={[
          {
            value: '93%',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
          },
          {
            value: '78%',
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
          },
          {
            value: '4.8x',
            label: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
          },
        ]}
      />

      {/* ── 16a. Accordion Showcase — dark ── */}
      <SectionLabel name="AccordionShowcase — dark" />
      <AccordionShowcase
        variant="dark"
        heading="Lorem ipsum dolor sit amet consectetur"
        items={[
          {
            heading: 'Performance conversations',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cropFocus: 'top-left',
            filter: 'muted-cool',
            visualContent: <MockFeedbackPanel />,
          },
          {
            heading: 'Conflict resolution',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cropFocus: 'top-right',
            filter: 'duotone-copper',
            visualContent: <MockContextSelector />,
          },
          {
            heading: 'Negotiation practice',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            cropFocus: 'bottom-left',
            filter: 'faded',
            visualContent: <MockScenarioCard />,
          },
          {
            heading: 'Onboarding conversations',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            cropFocus: 'center',
            filter: 'duotone',
          },
          {
            heading: 'Customer escalations',
            description:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            cropFocus: 'bottom-right',
            filter: 'duotone-blush',
            visualContent: <MockJourneyGrid />,
          },
        ]}
      />

      {/* ── 16b. Accordion Showcase — light ── */}
      <SectionLabel name="AccordionShowcase — light" />
      <AccordionShowcase
        variant="light"
        heading="Lorem ipsum dolor sit amet consectetur"
        items={[
          {
            heading: 'Capability mapping',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cropFocus: 'top-right',
            filter: 'faded',
            visualContent: <MockDashboard />,
          },
          {
            heading: 'Structured learning paths',
            description:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cropFocus: 'center',
            filter: 'duotone-cream',
            visualContent: <MockJourneyGrid />,
          },
          {
            heading: 'Engagement analytics',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            cropFocus: 'bottom-left',
            filter: 'duotone',
            visualContent: <MockFeedbackPanel />,
          },
          {
            heading: 'Certification tracking',
            description:
              'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            cropFocus: 'top-left',
            filter: 'muted-cool',
          },
        ]}
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
