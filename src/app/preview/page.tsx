import Image from 'next/image'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Reveal } from '@/components/reveal'

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
import { CustomerStory } from '@/components/sections/customer-story'
import { PartnerShowcase } from '@/components/sections/partner-showcase'
import { SecurityBadges } from '@/components/sections/security-badges'
import { ValueCards } from '@/components/sections/value-cards'
import { GrainCta } from '@/components/sections/grain-cta'
import { LogoCloud } from '@/components/sections/logo-cloud'
import { LogoBar } from '@/components/sections/logo-bar'
import { ContrastSplit } from '@/components/sections/contrast-split'
import { IconFeatureCards } from '@/components/sections/icon-feature-cards'
import { DarkShowcase } from '@/components/sections/dark-showcase'
import { TestimonialStat } from '@/components/sections/testimonial-stat'
import DisplayCards from '@/components/ui/display-cards'
import { MessageCircle, Users, ShieldCheck } from 'lucide-react'
import { PostGrid } from '@/components/blog/post-grid'
import { TagPills } from '@/components/blog/tag-pills'
import { Callout } from '@/components/mdx/callout'
import { StatHighlight } from '@/components/mdx/stat-highlight'
import { ComparisonTable } from '@/components/mdx/comparison-table'
import { CTAInline } from '@/components/mdx/cta-inline'
import { AuthorBio } from '@/components/mdx/author-bio'
import type { PostSummary } from '@/lib/blog'

export const metadata = createMetadata({
  title: 'Component Preview',
  description: 'All section components in one view.',
  path: '/preview',
})

const SAMPLE_POSTS: PostSummary[] = [
  {
    slug: 'why-ai-roleplay-works-for-sales-training',
    title: 'Why AI Roleplay Works for Sales Training',
    description: 'Traditional sales training struggles to build real conversational skill. AI-powered roleplay simulations offer a scalable alternative.',
    publishedAt: '2026-02-18',
    tags: ['sales-training', 'ai-simulation'],
    featuredImage: '/images/blog/ai-roleplay-sales-training.jpg',
    featuredImageAlt: 'A sales professional reviewing notes at a cafe table',
    readingTime: 7,
    author: 'Jamie Wood',
    authorRole: 'CTO & Co-Founder',
  },
  {
    slug: 'example-leadership-post',
    title: 'Building Confident Leaders Through Practice',
    description: 'Leadership development programs often focus on theory. Here is how simulation-based practice closes the gap.',
    publishedAt: '2026-02-10',
    tags: ['leadership-development'],
    readingTime: 5,
    author: 'Jamie Wood',
  },
  {
    slug: 'example-enterprise-post',
    title: 'Scaling Training Across Global Teams',
    description: 'When you need consistent quality across geographies, traditional approaches hit a wall. AI simulation solves the distribution problem.',
    publishedAt: '2026-01-28',
    tags: ['enterprise-training', 'ld-strategy'],
    readingTime: 6,
    author: 'Jamie Wood',
  },
]

const TEXTURE_ORIGINAL = '/images/textures/feature-texture.jpg'
const TEXTURE_ALT = '/images/textures/feature-texture-alt.jpg'

const FILTER_PRESETS = [
  { name: 'None', className: '', crop: 'origin-center', src: TEXTURE_ORIGINAL },
  { name: 'Faded', className: 'filter-faded', crop: 'origin-top-left', src: TEXTURE_ALT },
  { name: 'Duotone', className: 'filter-duotone', crop: 'origin-bottom-right', src: TEXTURE_ORIGINAL },
  { name: 'Duotone Cream', className: 'filter-duotone-cream', crop: 'origin-bottom-left', src: TEXTURE_ALT },
  { name: 'Duotone Blush', className: 'filter-duotone-blush', crop: 'origin-center', src: TEXTURE_ORIGINAL },
  { name: 'Duotone Copper', className: 'filter-duotone-copper', crop: 'origin-top-left', src: TEXTURE_ALT },
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
      {/* ── Page header ── */}
      <div className="pt-32 pb-8 px-container-mobile md:px-container">
        <div className="mx-auto max-w-site">
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent mb-2">Component Preview</p>
          <h1 className="font-heading text-headline tracking-heading">All sections</h1>
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════╗
         ║  DESIGN SYSTEM                                   ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Design System" />

      <SectionLabel name="SVG Filter Presets — Texture" />
      <div className="px-container-mobile md:px-container py-8">
        <div className="mx-auto max-w-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FILTER_PRESETS.map((preset) => (
              <div key={preset.name}>
                <div className="relative w-full aspect-[4/3] rounded-brand-lg overflow-hidden mb-3">
                  <Image
                    src={preset.src}
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

      {/* ╔══════════════════════════════════════════════════╗
         ║  CONTENT & NARRATIVE                             ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Content & Narrative" />

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

      <SectionLabel name="ValueCards" />
      <ValueCards
        items={[
          {
            icon: (
              <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full max-w-40">
                <rect x="10" y="10" width="100" height="100" rx="4" />
                <path d="M10 55h40l10-10 10 10h40" />
                <path d="M10 65h40l10 10 10-10h40" />
                <path d="M75 55l30 0" strokeWidth="2.5" />
                <polygon points="100,50 110,60 100,70" fill="currentColor" stroke="none" />
              </svg>
            ),
            heading: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            filter: 'duotone',
            texture: TEXTURE_ORIGINAL,
            cropFocus: 'origin-top-left',
          },
          {
            icon: (
              <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full max-w-40">
                <circle cx="60" cy="60" r="50" />
                <circle cx="60" cy="60" r="35" />
                <circle cx="60" cy="60" r="20" />
                <circle cx="60" cy="60" r="8" fill="currentColor" stroke="none" />
                <line x1="60" y1="2" x2="60" y2="10" />
                <line x1="60" y1="110" x2="60" y2="118" />
                <line x1="2" y1="60" x2="10" y2="60" />
                <line x1="110" y1="60" x2="118" y2="60" />
              </svg>
            ),
            heading: 'Consectetur adipiscing',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            filter: 'duotone-copper',
            texture: TEXTURE_ALT,
            cropFocus: 'origin-center',
          },
          {
            icon: (
              <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full max-w-40">
                <path d="M60 10l30 17.3v34.6L60 79.2 30 61.9V27.3z" />
                <path d="M60 30l15 8.7v17.3L60 64.7 45 56V38.7z" />
                <path d="M60 10v20M90 27.3L75 38.7M90 61.9L75 56M60 79.2V64.7M30 61.9l15-5.9M30 27.3l15 11.4" />
                <circle cx="60" cy="10" r="3" fill="currentColor" stroke="none" />
                <circle cx="90" cy="27.3" r="3" fill="currentColor" stroke="none" />
                <circle cx="90" cy="61.9" r="3" fill="currentColor" stroke="none" />
                <circle cx="60" cy="79.2" r="3" fill="currentColor" stroke="none" />
                <circle cx="30" cy="61.9" r="3" fill="currentColor" stroke="none" />
                <circle cx="30" cy="27.3" r="3" fill="currentColor" stroke="none" />
              </svg>
            ),
            heading: 'Sed do eiusmod tempor',
            description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
            filter: 'duotone',
            texture: TEXTURE_ALT,
            cropFocus: 'origin-bottom-right',
          },
        ]}
      />

      <SectionLabel name="DisplayCards" />
      <div className="flex min-h-[500px] w-full items-center justify-center py-section-mobile md:py-section">
        <div className="w-full max-w-3xl px-container-mobile md:px-container">
          <DisplayCards cards={[
            {
              icon: <MessageCircle className="size-4 text-accent" />,
              category: 'Management & Leadership',
              title: 'Addressing Underperformance',
              description: 'You are a manager having a conversation with a direct report whose performance has dropped over the past quarter.',
              className: [
                '[grid-area:stack] hover:-translate-y-10',
                'before:absolute before:w-full before:h-full before:rounded-brand before:content-[\'\']',
                'before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border',
                'grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700',
                'hover:grayscale-0 before:left-0 before:top-0',
              ].join(' '),
            },
            {
              icon: <Users className="size-4 text-accent" />,
              category: 'Sales & Negotiations',
              title: 'Handling a Price Objection',
              description: 'You are a sales professional on a call with a prospective client who is pushing back on price.',
              className: [
                '[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1',
                'before:absolute before:w-full before:h-full before:rounded-brand before:content-[\'\']',
                'before:bg-blend-overlay before:bg-surface/50 before:outline-1 before:outline-border',
                'grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700',
                'hover:grayscale-0 before:left-0 before:top-0',
              ].join(' '),
            },
            {
              icon: <ShieldCheck className="size-4 text-accent" />,
              category: 'Customer Service',
              title: 'De-escalating a Frustrated Customer',
              description: 'A customer has experienced repeated issues with their account. They are frustrated and considering leaving.',
              className: '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10',
            },
          ]} />
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════╗
         ║  CUSTOMIZATION PAGE COMPONENTS                  ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Customization Page Components" />

      <SectionLabel name="ContrastSplit" />
      <ContrastSplit
        leftHeading={<>The most effective training reflects the exact nuances of <em className="text-accent">your</em> business.</>}
        leftBody="Generic simulations teach generic skills. But real conversations are shaped by your terminology, your culture, your products, and the specific dynamics your people navigate every day."
        rightHeading="Ambr AI bridges this gap."
        rightBody="We build every simulation from your world — your playbooks, your objection guides, your escalation paths, your tone of voice. The result is practice that feels so real, your team forgets it's a simulation."
      />

      <SectionLabel name="IconFeatureCards" />
      <IconFeatureCards
        heading={<>What you can customize <span className="text-copy-light">(and how easy it is)</span></>}
        subtitle="Share your materials. We handle the rest."
        items={[
          {
            icon: (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="24" height="24" rx="3" />
                <path d="M4 12h24" />
                <path d="M12 12v16" />
                <path d="M8 8h2" />
              </svg>
            ),
            title: 'Context & Objectives',
            description: 'Your industry, your scenarios, your success criteria. Every simulation starts with the context that makes it feel real.',
          },
          {
            icon: (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="10" r="5" />
                <path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" />
              </svg>
            ),
            title: 'AI Character',
            description: 'Personality, communication style, emotional range, and behavior patterns tailored to your world.',
          },
          {
            icon: (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h14l6 6v18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                <path d="M20 4v6h6" />
                <path d="M8 16h12" />
                <path d="M8 20h12" />
                <path d="M8 24h8" />
              </svg>
            ),
            title: 'Real-World Inputs',
            description: 'Playbooks, objection guides, product materials — transformed into simulation intelligence.',
          },
        ]}
      />

      <SectionLabel name="DarkShowcase" />
      <DarkShowcase
        heading={<>Built around your exact <em className="text-accent">needs</em>.</>}
        subtitle="Every deployment is shaped by what matters most to your organization."
        items={[
          { title: 'Your terminology', description: 'Product names, internal jargon, competitor references, industry acronyms — the simulation speaks your language.' },
          { title: 'Your culture', description: 'Tone, formality, escalation norms, regional nuances shaped to match your organization.' },
          { title: 'Your success criteria', description: 'Feedback calibrated to your framework — your competencies, your rubric, your definition of good.' },
        ]}
      />

      <SectionLabel name="TestimonialStat" />
      <TestimonialStat
        stat={{ value: '93%', label: 'of learners rate simulations as realistic' }}
        testimonials={[
          { quote: 'They built everything around our specific needs — our terminology, our escalation paths, our tone of voice.', role: 'Head of L&D', company: 'Enterprise client' },
          { quote: 'The customization process was remarkably fast. Our first scenarios were live within a week.', role: 'Sales Enablement Lead', company: 'Technology company' },
        ]}
      />

      {/* ╔══════════════════════════════════════════════════╗
         ║  SOCIAL PROOF                                    ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Social Proof" />

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

      <SectionLabel name="PullQuote" />
      <PullQuote
        quote="Incredibly realistic, providing a safe and convenient environment for practice."
        role="Director"
        company="Media Company"
      />

      <SectionLabel name="CustomerStory" />
      <CustomerStory
        imageSrc="/images/photography/testimonial-woman-smiling.png"
        imageAlt="A woman mid-laugh, caught in a genuine moment of warmth, looking slightly off-camera"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, et focus on delivering strategic value."
        name="Lorem Ipsum"
        role="Vice President, Learning & Development"
        company="Acme Corporation"
        href="#"
      />

      <SectionLabel name="StatBar" />
      <StatBar
        items={[
          { value: '93%', label: 'of users report feeling better prepared for real conversations', source: 'Ambr AI user survey' },
          { value: '78%', label: 'felt more comfortable navigating difficult conversations', source: 'Skyscanner 12-week pilot' },
          { value: '92%', label: 'manager engagement rate during the pilot programme', source: 'Skyscanner 12-week pilot' },
        ]}
      />

      <SectionLabel name="StatStack" />
      <StatStack
        heading="Lorem ipsum dolor sit amet"
        items={[
          { value: '93%', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore' },
          { value: '78%', label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' },
          { value: '4.8x', label: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
        ]}
      />

      {/* ╔══════════════════════════════════════════════════╗
         ║  PRODUCT                                         ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Product" />

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

      <SectionLabel name="BentoShowcase" />
      <BentoShowcase
        eyebrow="The platform"
        heading={<>Everything your team needs, in <em className="text-accent">one place</em></>}
        subtitle="Voice simulations, structured feedback, team analytics, and 30+ languages — all from a single dashboard."
      />

      <SectionLabel name="VisualFeatureCards" />
      <VisualFeatureCards />

      <SectionLabel name="ShowcaseSplit — left / duotone / top-left" />
      <ShowcaseSplit
        heading={<>Lorem ipsum dolor sit amet, <em className="text-accent">consectetur</em> adipiscing elit</>}
        subtitle="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        filter="duotone"
        cropFocus="top-left"
        visualContent={<MockJourneyGrid />}
        features={[
          { heading: 'Structured feedback', description: 'Receive detailed, actionable coaching after every practice session. Tone, pacing, word choice, and approach — broken down so you know exactly what to work on.' },
          { heading: 'Adaptive scenarios', description: 'Simulations that respond to your choices in real time. No two conversations play out the same way, so every session builds genuine capability.' },
          { heading: 'Custom to your context', description: 'Your terminology, your stakeholders, your version of a difficult conversation. Built around the way your organization actually works.' },
        ]}
      />

      <SectionLabel name="ShowcaseSplit — right / duotone-blush / bottom-right" />
      <ShowcaseSplit
        layout="right"
        filter="duotone-blush"
        cropFocus="bottom-right"
        visualContent={<MockContextSelector />}
        heading={<>Ut enim ad minim veniam, <em className="text-accent">quis nostrud</em> exercitation</>}
        subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        features={[
          { heading: 'Evidence-based insights', description: 'Aggregated data across simulations surfaces patterns in how teams communicate, negotiate, and respond to pressure.' },
          { heading: 'Progressive learning paths', description: 'Sequence simulations into structured development tracks. Each step unlocked by demonstrated capability, not time served.' },
          { heading: 'Global deployment', description: 'Roll out programs across functions, geographies, and 30+ languages from a single dashboard.' },
        ]}
      />

      <SectionLabel name="ShowcaseSplit — left / faded / center" />
      <ShowcaseSplit
        filter="faded"
        cropFocus="center"
        visualContent={<MockFeedbackPanel />}
        heading={<>Excepteur sint occaecat <em className="text-accent">cupidatat</em> non proident</>}
        subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum."
        features={[
          { heading: 'Capability mapping', description: 'Aggregate individual simulation results into team-level capability views. Identify where communication breaks down.' },
          { heading: 'Certifications with substance', description: 'Award certifications based on observed performance, not quiz scores. Reflects what people can actually do.' },
          { heading: 'Engagement visibility', description: 'See who is practicing, how often, and how they are progressing. Spot disengagement early.' },
        ]}
      />

      <SectionLabel name="AccordionShowcase — dark" />
      <AccordionShowcase
        variant="dark"
        heading="Lorem ipsum dolor sit amet consectetur"
        items={[
          { heading: 'Performance conversations', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', cropFocus: 'top-left', filter: 'duotone-cream', visualContent: <MockFeedbackPanel /> },
          { heading: 'Conflict resolution', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', cropFocus: 'top-right', filter: 'duotone-copper', visualContent: <MockContextSelector /> },
          { heading: 'Negotiation practice', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', cropFocus: 'bottom-left', filter: 'faded', visualContent: <MockScenarioCard /> },
          { heading: 'Onboarding conversations', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', cropFocus: 'center', filter: 'duotone' },
          { heading: 'Customer escalations', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', cropFocus: 'bottom-right', filter: 'duotone-blush', visualContent: <MockJourneyGrid /> },
        ]}
      />

      <SectionLabel name="AccordionShowcase — light" />
      <AccordionShowcase
        variant="light"
        heading="Lorem ipsum dolor sit amet consectetur"
        items={[
          { heading: 'Capability mapping', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', cropFocus: 'top-right', filter: 'faded', visualContent: <MockDashboard /> },
          { heading: 'Structured learning paths', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', cropFocus: 'center', filter: 'duotone-cream', visualContent: <MockJourneyGrid /> },
          { heading: 'Engagement analytics', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', cropFocus: 'bottom-left', filter: 'duotone', visualContent: <MockFeedbackPanel /> },
          { heading: 'Certification tracking', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', cropFocus: 'top-left', filter: 'duotone-cream' },
        ]}
      />

      {/* ╔══════════════════════════════════════════════════╗
         ║  TRUST & PARTNERS                                ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Trust & Partners" />

      <SectionLabel name="TrustBadges" />
      <TrustBadges
        badges={[
          { label: 'ISO 27001', description: 'Certified information security management' },
          { label: 'GDPR', description: 'EU data protection compliant' },
          { label: 'EU AI Act', description: 'Aligned with regulatory framework' },
          { label: 'Aikido Security', description: 'Continuous automated auditing' },
        ]}
        cta={{ label: 'Learn more about AI Trust & Safety', href: '/security/compliance' }}
      />

      <SectionLabel name="SecurityBadges — dark" />
      <SecurityBadges
        variant="dark"
        heading="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
        href="#"
        badges={[
          { icon: '/icons/badge-iso.svg', label: 'ISO 27001', href: '#' },
          { icon: '/icons/badge-gdpr.svg', label: 'GDPR', href: '#' },
          { icon: '/icons/badge-eu-ai-act.png', label: 'EU AI Act', href: '#', wide: true },
        ]}
      />

      <SectionLabel name="SecurityBadges — light" />
      <SecurityBadges
        variant="light"
        heading="Lorem ipsum dolor sit amet consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
        href="#"
        badges={[
          { icon: '/icons/badge-iso.svg', label: 'ISO 27001', href: '#' },
          { icon: '/icons/badge-gdpr.svg', label: 'GDPR', href: '#' },
          { icon: '/icons/badge-eu-ai-act.png', label: 'EU AI Act', href: '#', wide: true },
        ]}
      />

      <SectionLabel name="PartnerShowcase" />
      <PartnerShowcase
        heading="Lorem Ipsum Dolor"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
        href="#"
        heroLogo={{ alt: 'Ambr AI', serif: true }}
        partners={[
          { alt: 'Google' },
          { alt: 'Anthropic' },
          { alt: 'Helios' },
          { alt: 'Arcline' },
        ]}
      />

      {/* ╔══════════════════════════════════════════════════╗
         ║  CTA                                             ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="CTA" />

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

      <SectionLabel name="GrainCta — light" />
      <GrainCta
        heading={<>Ready to see it in <em className="text-accent">action</em>?</>}
        subtitle="Book a short conversation with the Ambr AI team. We will show you simulations built for your real scenarios — not a generic demo."
        ctaLabel="Book a Demo"
        ctaHref="/find-out-more"
      />

      <SectionLabel name="GrainCta — dark" />
      <GrainCta
        variant="dark"
        heading={<>See what Ambr AI looks like{'\n'}for <em className="text-accent">your</em> team.</>}
        subtitle="We'll build a custom simulation using your real scenarios. No generic demos."
        ctaLabel="Request a Demo"
        ctaHref="/contact"
      />

      {/* ╔══════════════════════════════════════════════════╗
         ║  BLOG                                            ║
         ╚══════════════════════════════════════════════════╝ */}

      {/* ┌──────────────────────────────────────────────────────────────────┐
         │  WARNING: Everything below this line is for BLOG POSTS ONLY.    │
         │  These components (TagPills, PostGrid, Callout, StatHighlight,  │
         │  ComparisonTable, CTAInline, AuthorBio) live in components/blog │
         │  and components/mdx. They are designed for MDX blog content     │
         │  and must NOT be used on marketing pages or section layouts.    │
         │  For marketing pages, use components from components/sections.  │
         └──────────────────────────────────────────────────────────────────┘ */}

      <GroupLabel name="Blog (blog posts only — not for marketing pages)" />

      <SectionLabel name="TagPills (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-site">
          <TagPills />
        </div>
      </div>

      <SectionLabel name="TagPills — active (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-site">
          <TagPills activeTag="sales-training" />
        </div>
      </div>

      <SectionLabel name="PostGrid (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-site">
          <PostGrid posts={SAMPLE_POSTS} />
        </div>
      </div>

      <SectionLabel name="Callout — info (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <Callout type="info">
            A 12-week pilot with Skyscanner found that 78% of participating managers felt more comfortable navigating difficult conversations after regular AI roleplay practice.
          </Callout>
        </div>
      </div>

      <SectionLabel name="Callout — warning (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <Callout type="warning">
            ROI calculations should account for both direct outcomes and indirect benefits such as reduced manager time spent on remedial coaching.
          </Callout>
        </div>
      </div>

      <SectionLabel name="StatHighlight (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <StatHighlight value="78%" label="of managers felt more comfortable navigating difficult conversations" />
        </div>
      </div>

      <SectionLabel name="ComparisonTable (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <ComparisonTable
            headers={['Factor', 'Traditional', 'AI Simulation']}
            rows={[
              ['Availability', 'Scheduled, limited', 'On-demand, unlimited'],
              ['Consistency', 'Varies by facilitator', 'Standardized scenarios'],
              ['Feedback', 'Subjective, delayed', 'Immediate, structured'],
            ]}
          />
        </div>
      </div>

      <SectionLabel name="CTAInline (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <CTAInline
            text="Every Ambr AI simulation is built around your real scenarios."
            href="/customisation"
            label="See how customization works"
          />
        </div>
      </div>

      <SectionLabel name="AuthorBio (blog only)" />
      <div className="px-container-mobile md:px-container py-6">
        <div className="mx-auto max-w-[720px]">
          <AuthorBio name="Jamie Wood" role="CTO & Co-Founder" />
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════╗
         ║  BRAND EVOLUTION (NEW EXPLORATIONS)              ║
         ╚══════════════════════════════════════════════════╝ */}

      <GroupLabel name="Brand Evolution Explorations" />

      <SectionLabel name="Deep Palette — Quiet Authority" />
      <div className="py-16 mb-24">
        <div className="bg-anchor-pine text-surface-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />
          <div className="px-container-mobile md:px-container relative z-10">
            <div className="max-w-site mx-auto grid md:grid-cols-2 gap-16 items-center">
              <Reveal>
                <h2 className="font-heading text-headline leading-[1.1] mb-6">
                  Trusted by the <em className="italic font-light text-accent-soft">most demanding</em> teams.
                </h2>
                <p className="text-surface-alt/80 text-lg leading-relaxed mb-10 max-w-md">
                  A deep, rich Pine Green grounds the brand in authority and substance.
                </p>
                <div className="inline-block rounded-brand-sm bg-surface-white text-anchor-pine px-8 py-3.5 text-sm font-body-medium">
                  Enterprise Security Review
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative aspect-[4/3] rounded-brand-lg overflow-hidden bg-anchor border border-surface-white/10 shadow-2xl">
                  <Image 
                    src="/images/photography/hero-quiet-reflection.jpeg" 
                    alt="Professional reflection" 
                    fill 
                    className="object-cover opacity-60 filter grayscale mix-blend-overlay"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Logo Components ── */}
      <SectionLabel name="LogoCloud (static)" />
      <LogoCloud />

      <SectionLabel name="LogoBar (infinite ticker)" />
      <div className="py-section-mobile md:py-section">
        <LogoBar />
      </div>

    </>
  )
}

function GroupLabel({ name }: { name: string }) {
  return (
    <div className="px-container-mobile md:px-container pt-20 pb-2">
      <div className="mx-auto max-w-site">
        <p className="font-heading text-label tracking-heading text-dark border-b border-dark/10 pb-3">
          {name}
        </p>
      </div>
    </div>
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
