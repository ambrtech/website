import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  Headset,
  LayoutGrid,
  MessageSquareQuote,
  Mic,
  Presentation,
  Route,
  UsersRound,
  X,
} from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { Grid } from '@/components/grid'
import { Reveal } from '@/components/reveal'

export const metadata = createMetadata({
  title: 'What is AI Roleplay',
  description:
    'AI roleplay uses artificial intelligence to simulate realistic workplace conversations, helping teams practice high-stakes moments through structured conversation training.',
  path: '/product/ai-roleplay',
})

const steps = [
  {
    icon: BookOpen,
    title: 'Choose or create scenarios',
    description:
      "Select from a pre-built library, or customize simulations to match your organization's specific conversations, language, and training goals.",
  },
  {
    icon: Route,
    title: 'Roll out to your teams',
    description:
      'Deploy training to specific teams, departments, or the entire organization. Structure learning into guided paths with built-in certifications.',
  },
  {
    icon: Mic,
    title: 'Your teams train through realistic voice conversations',
    description:
      'Team members speak naturally with an AI that listens, adapts, and responds in real time. Every session ends with structured feedback on tone, word choice, pacing, and approach.',
  },
  {
    icon: BarChart3,
    title: 'Track results and shape strategy',
    description:
      'Monitor engagement, view aggregated capability insights across your organization, and identify where to focus development next.',
  },
] as const

const comparisonRows = [
  {
    method: 'Classroom roleplay',
    outcome: 'Hard to scale. Requires scheduling, facilitators, and willing participants.',
    positive: false,
  },
  {
    method: 'E-learning and video',
    outcome: 'Passive. Watching a video about handling objections does not build the skill.',
    positive: false,
  },
  {
    method: 'Mentoring',
    outcome: 'Expensive and inconsistent. Not available to every team member.',
    positive: false,
  },
  {
    method: 'AI roleplay',
    outcome:
      'The realism of live conversation with the scalability of digital learning. Consistent quality. Immediate feedback.',
    positive: true,
  },
] as const

const useCases = [
  {
    icon: BriefcaseBusiness,
    title: 'Sales',
    description: 'Discovery calls, objection handling, negotiation, closing',
  },
  {
    icon: UsersRound,
    title: 'Management',
    description: 'Performance reviews, sensitive feedback, team conflict, restructures',
  },
  {
    icon: Headset,
    title: 'Customer service',
    description: 'Complaint resolution, de-escalation, retention',
  },
  {
    icon: GraduationCap,
    title: 'Onboarding',
    description: 'Accelerating time to competence for new hires',
  },
  {
    icon: Presentation,
    title: 'Presentations',
    description: 'Pitching, storytelling, handling Q&A under pressure',
  },
  {
    icon: MessageSquareQuote,
    title: 'HR',
    description: 'Conversations where getting the language right matters',
  },
] as const

const stats = [
  {
    value: '93%',
    label: 'of users report feeling better prepared for real conversations',
  },
  {
    value: '92%',
    label: 'engagement rate in Skyscanner pilot (50 managers, 12 weeks)',
  },
  {
    value: '85%',
    label: 'would recommend Ambr AI to peers',
  },
] as const

function SectionIntro({
  eyebrow,
  heading,
  description,
}: {
  eyebrow?: string
  heading: ReactNode
  description?: string
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="mb-5 text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-title md:text-headline leading-[1.08] tracking-heading text-dark">
          {heading}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-body leading-[1.8] text-copy-mid">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href="/try-for-free"
        className="inline-flex items-center justify-center rounded-brand-sm bg-dark px-6 py-3.5 text-sm font-body-medium text-surface-white transition-all hover:-translate-y-px hover:bg-accent"
      >
        Try for Free
      </Link>
      <Link
        href="/product/how-it-works"
        className="inline-flex items-center justify-center gap-2 rounded-brand-sm border border-border bg-surface-white px-6 py-3.5 text-sm font-body-medium text-dark transition-all hover:-translate-y-px hover:border-accent-soft hover:text-accent"
      >
        Find Out More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

export default function AIRoleplayPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Product', href: '/product/ai-roleplay' },
          { name: 'What is AI Roleplay', href: '/product/ai-roleplay' },
        ]}
      />

      <section className="relative overflow-hidden bg-surface-white pb-section-mobile pt-14 md:pb-section md:pt-20">
        <Grid className="text-dark/[0.03]" dotSize={1} gap={32} />
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-site gap-12 px-container-mobile md:px-container lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <Reveal>
            <div className="max-w-[680px]">
              <p className="mb-6 text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent">
                What is AI roleplay
              </p>
              <h1 className="font-heading text-headline md:text-display leading-[0.96] tracking-tight text-dark">
                AI roleplay: realistic conversation training for high-stakes workplace conversations
              </h1>
              <p className="mt-8 max-w-[60ch] text-body md:text-lg leading-[1.85] text-copy-mid">
                AI roleplay uses artificial intelligence to simulate realistic workplace
                conversations. Instead of reading a script, watching a video, or waiting
                for a scheduled session, your teams train by actually having the
                conversation, speaking with an AI that listens and responds just like a
                real person.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Scalable', 'Consistent', 'Measurable'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent-soft bg-accent-whisper px-4 py-2 text-body-sm font-body-medium text-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal slow>
            <div className="rounded-brand-lg border border-border bg-surface-alt p-4 md:p-6">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <div className="relative min-h-[380px] overflow-hidden rounded-brand-lg">
                  <Image
                    src="/images/photography/editorial-light-window.png"
                    alt="A professional preparing for a conversation in warm window light"
                    fill
                    className="object-cover filter-duotone-cream"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="rounded-brand-lg border border-border bg-surface-white p-5">
                    <p className="text-eyebrow uppercase tracking-eyebrow text-copy-light">
                      Category overview
                    </p>
                    <p className="mt-3 font-heading text-section leading-[1.14] tracking-heading text-dark">
                      Practice, not content consumption.
                    </p>
                  </div>
                  <div className="rounded-brand-lg bg-dark p-5 text-surface-white">
                    <p className="text-eyebrow uppercase tracking-eyebrow text-surface-white/50">
                      What buyers care about
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                        Consistent training quality at scale
                      </div>
                      <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                        Realistic practice without facilitator bottlenecks
                      </div>
                      <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                        Structured feedback and measurable rollout data
                      </div>
                    </div>
                  </div>
                  <div className="rounded-brand-lg border border-border bg-surface-white p-5">
                    <p className="text-body-sm leading-[1.75] text-copy-mid">
                      This page is designed for buyers understanding the category first,
                      then evaluating how it works in practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt px-container-mobile py-section-mobile md:px-container md:py-section">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
          <SectionIntro
            eyebrow="The problem"
            heading={
              <>
                Why conversation skills need structured <em className="text-accent">training</em>
              </>
            }
          />
          <Reveal slow>
            <div className="rounded-brand-lg border border-border bg-surface-white p-6 md:p-8">
              <p className="font-heading text-section leading-[1.2] tracking-heading text-dark">
                High-stakes conversations are the backbone of an organization&apos;s success,
                and up until now, there has been no way to train teams for them in a
                consistent, structured way.
              </p>
              <p className="mt-6 text-body leading-[1.8] text-copy-mid">
                AI roleplay changes that. Your teams don&apos;t just learn best practice,
                they build the skills to apply it under pressure: finding the right
                words when a client pushes back, a negotiation stalls, or a direct
                report gets defensive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="How it works"
            heading={
              <>
                How it works for your <em className="text-accent">organization</em>
              </>
            }
          />

          <div className="mt-12 grid gap-4 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal key={step.title} delay={index * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-brand-lg border border-border bg-surface-alt p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft bg-accent-whisper text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-heading text-title leading-none tracking-heading text-accent-soft">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-6 font-heading text-section leading-[1.14] tracking-heading text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-body-sm leading-[1.8] text-copy-mid">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Comparison"
            heading={
              <>
                How AI roleplay <em className="text-accent">compares</em>
              </>
            }
          />

          <Reveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-brand-lg border border-border bg-surface-white">
              <div className="grid grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] border-b border-border bg-surface-alt px-6 py-4 text-body-sm font-body-medium text-copy-light md:px-8">
                <span>Method</span>
                <span>What that means in practice</span>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.method}
                  className={`grid grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-4 border-b border-border px-6 py-5 last:border-b-0 md:px-8 ${
                    row.positive ? 'bg-accent-whisper/60' : 'bg-surface-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
                        row.positive ? 'bg-accent text-surface-white' : 'bg-surface-alt text-copy-mid'
                      }`}
                    >
                      {row.positive ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    </span>
                    <p className="font-heading text-label leading-[1.4] tracking-heading text-dark">
                      {row.method}
                    </p>
                  </div>
                  <p className="text-body-sm leading-[1.8] text-copy-mid">{row.outcome}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Use cases"
            heading={
              <>
                Where organizations use AI <em className="text-accent">roleplay</em>
              </>
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon

              return (
                <Reveal key={useCase.title} delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-brand-lg border border-border bg-surface-alt p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft bg-accent-whisper text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-section leading-[1.14] tracking-heading text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-4 text-body-sm leading-[1.8] text-copy-mid">
                      {useCase.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-dark px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Results"
            heading={
              <span className="text-surface-white">
                Does it <em className="text-accent-soft">work</em>?
              </span>
            }
            description="Proof matters most when a category is still being understood. These are the kinds of outcomes buyers look for first."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60} className="h-full">
                <div className="flex h-full flex-col rounded-brand-lg border border-surface-white/10 bg-surface-white/5 p-6 md:p-8">
                  <p className="font-heading text-title md:text-headline leading-none tracking-tight text-surface-white">
                    {stat.value}
                  </p>
                  <p className="mt-5 max-w-[24ch] text-body-sm leading-[1.75] text-surface-white/70">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-10 grid gap-8 rounded-brand-lg border border-surface-white/10 bg-surface-white/5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
              <blockquote className="font-heading text-quote leading-[1.3] tracking-heading text-surface-white">
                I was blown away with the feedback, it was spectacular.
              </blockquote>
              <div className="md:text-right">
                <p className="text-body font-body-medium text-surface-white">L&amp;D Manager</p>
                <p className="mt-1 text-body-sm text-surface-white/70">Manufacturing Company</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex justify-start">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
