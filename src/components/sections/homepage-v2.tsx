import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  AudioLines,
  BadgeDollarSign,
  ChartColumnIncreasing,
  Globe2,
  Headset,
  MessageSquareQuote,
  ScanFace,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from 'lucide-react'
import { Grid } from '@/components/grid'
import { Reveal } from '@/components/reveal'

const trustedBy = [
  { name: 'Deloitte', href: '/security/compliance', serif: true },
  { name: 'Skyscanner', href: '#testimonial-skyscanner', serif: false },
  { name: 'IWG', href: '/security/compliance', serif: false },
  { name: 'DXC Technology', href: '/security/compliance', serif: false },
  { name: 'Binance', href: '/security/compliance', serif: false },
  { name: 'Browne Jacobson', href: '#testimonials', serif: true },
  { name: 'Citizen', href: '#testimonials', serif: true },
  { name: 'Design Agency', href: '#testimonial-design-agency', muted: true },
  { name: 'Professional Services Firm', href: '#testimonial-professional-services', muted: true },
  { name: 'Recruitment Company', href: '#testimonial-recruitment-company', muted: true },
  { name: 'Media Company', href: '#testimonial-media-company', muted: true },
  { name: 'Technology company', href: '/customisation', muted: true },
  { name: 'Financial services', href: '/customisation', muted: true },
  { name: 'Manufacturing Company', href: '#testimonials', muted: true },
  { name: 'Enterprise client', href: '/customisation', muted: true },
] as const

const stats = [
  {
    value: '93%',
    label: 'users feel better prepared for real conversations',
  },
  {
    value: 'X%',
    label: 'faster onboarding and ramp-up time',
  },
  {
    value: 'X milliseconds',
    label: 'ultra-fast response time means it feels just like speaking to a real human',
  },
] as const

const customizationMethods = [
  {
    icon: Settings2,
    title: 'Admin Customization',
    description:
      'Create and scale custom simulations yourself, directly in the platform. No technical skills required.',
  },
  {
    icon: Wrench,
    title: 'In-House Customization Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need.',
  },
  {
    icon: Sparkles,
    title: 'Personal Scenario Creator',
    description:
      'Individual team members create their own private scenarios for specific upcoming conversations.',
  },
] as const

type TestimonialItem = {
  id: string
  quote: string
  role: string
  company: string
  name?: string
}

const testimonials: TestimonialItem[] = [
  {
    id: 'testimonial-design-agency',
    quote:
      "It's every HR Leader's dream to have a safe way for managers to train for these conversations.",
    name: 'Hof People',
    role: 'Head of People',
    company: 'Design Agency',
  },
  {
    id: 'testimonial-professional-services',
    quote: "We love it. It's great that we can customize it for our needs.",
    role: 'L&D Manager',
    company: 'Professional Services Firm',
  },
  {
    id: 'testimonial-enterprise-client',
    quote: 'The team is incredibly responsive.',
    role: 'Enterprise client',
    company: 'Ambr AI client',
  },
  {
    id: 'testimonial-recruitment-company',
    quote:
      "We've looked at alternatives but they were just 'meh'... this is a really good product.",
    role: 'Training Manager',
    company: 'Recruitment Company',
  },
  {
    id: 'testimonial-media-company',
    quote: 'Incredibly realistic, providing a safe and convenient environment.',
    role: 'Director',
    company: 'Media Company',
  },
] as const

const useCases = [
  {
    icon: UsersRound,
    title: 'Management & Leadership',
    description:
      'Performance reviews. Team restructures. Sensitive feedback. Give your teams the skills to lead with confidence.',
    href: '/solutions/management-leadership',
  },
  {
    icon: BadgeDollarSign,
    title: 'Sales & Negotiations',
    description:
      'Discovery calls. Objection handling. Contract negotiations. Onboard and upskill your sales teams faster.',
    href: '/solutions/sales-negotiations',
  },
  {
    icon: Headset,
    title: 'Customer Service',
    description:
      'Escalations. Retention calls. Complex inquiries. Drive consistency across every customer interaction.',
    href: '/solutions/customer-service',
  },
  {
    icon: MessageSquareQuote,
    title: 'And more',
    description:
      "Presentations, onboarding, interviewing. If it matters to your business, it's in our product.",
    href: '/solutions/other',
  },
] as const

const differentiators = [
  {
    icon: Settings2,
    title: 'Customization',
    description:
      'Every simulation is built around your specific scenarios, language, and training goals. Start with our pre-built library or create something entirely new.',
  },
  {
    icon: Sparkles,
    title: 'One platform, every use case',
    description:
      'Management, sales, customer service and more. One admin experience, one set of reporting, one vendor. No need to manage multiple solutions.',
  },
  {
    icon: AudioLines,
    title: 'Actionable feedback',
    description:
      'Every session ends with structured, personalized insights on tone, pacing, word choice, structure, and approach. Feed insights back into your training strategy.',
  },
  {
    icon: Globe2,
    title: 'Global training',
    description:
      '30+ languages. Deploy consistent, structured conversation training across every region your teams operate in, all from a single platform.',
  },
  {
    icon: ChartColumnIncreasing,
    title: 'Admin dashboard & reporting',
    description:
      'Track usage, monitor engagement, view aggregated learning insights, and identify capability gaps across your organization.',
  },
] as const

const waveformHeights = [30, 58, 38, 68, 44, 74, 34, 82, 48, 66, 28, 72, 52, 86, 36, 62, 42, 78, 32, 60]

const proofPoints = [
  'Ultra-low latency',
  'Adaptive AI characters',
  'Body language analysis',
] as const

function SectionIntro({
  eyebrow,
  heading,
  description,
  align = 'left',
}: {
  eyebrow?: string
  heading: ReactNode
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal>
      <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        {eyebrow && (
          <p className="mb-5 text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-title md:text-headline leading-[1.08] tracking-heading text-dark">
          {heading}
        </h2>
        {description && (
          <p className={`mt-6 text-body leading-[1.8] text-copy-mid ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
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

function TrustedLogo({
  name,
  href,
  serif,
  muted,
}: {
  name: string
  href: string
  serif?: boolean
  muted?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group flex min-h-16 items-center justify-center rounded-brand border border-border bg-surface-white px-4 py-5 text-center transition-all hover:-translate-y-px hover:border-accent-soft hover:bg-surface ${
        serif
          ? 'font-heading text-lg tracking-heading'
          : muted
            ? 'font-body-medium text-caption uppercase tracking-eyebrow'
            : 'font-body-medium text-body-sm uppercase tracking-eyebrow'
      } text-dark/70 hover:text-dark`}
    >
      <span>{name}</span>
    </Link>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col rounded-brand-lg border border-border bg-surface-white px-6 py-8 md:px-8 md:py-10">
        <p className="font-heading text-title md:text-headline leading-none tracking-tight text-dark">
          {value}
        </p>
        <p className="mt-5 max-w-[24ch] text-body-sm leading-[1.75] text-copy-mid">
          {label}
        </p>
      </div>
    </Reveal>
  )
}

function VoiceWaveform() {
  return (
    <div className="relative overflow-hidden rounded-brand-lg border border-border bg-dark px-6 py-8 text-surface-white shadow-card">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-eyebrow uppercase tracking-eyebrow text-surface-white/45">
        <span>Live simulation</span>
        <span>Near-instant</span>
      </div>
      <div className="relative mt-10 flex h-[240px] items-end justify-between gap-2 md:h-[280px]">
        {waveformHeights.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="w-full rounded-full bg-accent/70"
            style={{
              height: `${height}%`,
              animation: `waveAnim ${0.9 + (index % 5) * 0.12}s ease-in-out ${index * 0.05}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <div className="relative mt-8 grid gap-3 md:grid-cols-3">
        {proofPoints.map((item) => (
          <div
            key={item}
            className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm text-surface-white/80"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export function HomepageV2() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-white pb-section-mobile pt-32 md:pb-section-lg md:pt-40">
        <Grid className="text-dark/[0.03]" dotSize={1} gap={32} />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-soft/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-site gap-12 px-container-mobile md:px-container lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
          <Reveal>
            <div className="max-w-[640px]">
              <p className="mb-6 text-eyebrow font-body-medium uppercase tracking-eyebrow text-accent">
                Voice AI training platform
              </p>
              <h1 className="font-heading text-display leading-[0.94] tracking-tight text-dark">
                Training for the conversations that{' '}
                <em className="text-accent">matter</em> most
              </h1>
              <p className="mt-8 max-w-[58ch] text-body md:text-lg leading-[1.8] text-copy-mid">
                Voice AI training platform for high-stakes workplace conversations. From
                sales negotiations to management feedback, your teams build real skills
                through ultra-realistic conversation simulations, all easily customizable
                to meet your specific training needs.
              </p>
              <div className="mt-10">
                <CtaButtons />
              </div>
            </div>
          </Reveal>

          <Reveal slow>
            <div className="relative">
              <div className="relative overflow-hidden rounded-brand-lg border border-border bg-surface-alt p-4 md:p-6">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-brand-lg">
                    <Image
                      src="/images/photography/hero-quiet-reflection.jpeg"
                      alt="A professional seated by a desk in warm light, reflecting before a conversation"
                      fill
                      priority
                      className="object-cover filter-duotone-cream"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-brand-lg border border-border bg-surface-white p-5">
                      <p className="text-eyebrow uppercase tracking-eyebrow text-copy-light">
                        Why it works
                      </p>
                      <p className="mt-3 font-heading text-section leading-[1.12] tracking-heading text-dark">
                        Practice that feels calm to open, hard to fake.
                      </p>
                    </div>
                    <div className="rounded-brand-lg bg-dark p-5 text-surface-white">
                      <p className="text-eyebrow uppercase tracking-eyebrow text-surface-white/50">
                        Built around you
                      </p>
                      <div className="mt-5 grid gap-3">
                        <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                          Custom scenarios for each team
                        </div>
                        <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                          30+ languages across global rollouts
                        </div>
                        <div className="rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm">
                          Actionable feedback after every session
                        </div>
                      </div>
                    </div>
                    <div className="rounded-brand-lg border border-border bg-surface-white p-5">
                      <p className="text-body-sm leading-[1.7] text-copy-mid">
                        Trusted by enterprise teams that need training to hold up in the
                        real world, not just in a workshop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt px-container-mobile py-10 md:px-container md:py-14">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-sm">
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light">
                  Trusted by
                </p>
                <p className="mt-3 text-body-sm leading-[1.75] text-copy-mid">
                  Named clients where public, anonymized enterprise accounts where not.
                </p>
              </div>
              <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {trustedBy.map((logo) => (
                  <TrustedLogo key={logo.name} {...logo} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Results"
            heading={
              <>
                Results that speak for <em className="text-accent">themselves</em>
              </>
            }
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <SectionIntro
              eyebrow="Customization"
              heading={
                <>
                  Training built around your exact <em className="text-accent">needs</em>
                </>
              }
              description="Ambr AI is fully customizable to match your specific training goals. Choose from a library of ready-made scenarios, or create your own."
            />
            <Reveal slow>
              <div className="grid gap-4 md:grid-cols-3">
                {customizationMethods.map((method, index) => {
                  const Icon = method.icon

                  return (
                    <div
                      key={method.title}
                      className={`flex h-full flex-col rounded-brand-lg border border-border px-6 py-7 ${
                        index === 1 ? 'bg-dark text-surface-white' : 'bg-surface-white text-dark'
                      }`}
                    >
                      <div
                        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border ${
                          index === 1
                            ? 'border-surface-white/10 bg-surface-white/5'
                            : 'border-accent-soft bg-accent-whisper'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${index === 1 ? 'text-surface-white' : 'text-accent'}`} />
                      </div>
                      <h3 className="font-heading text-section leading-[1.16] tracking-heading">
                        {method.title}
                      </h3>
                      <p
                        className={`mt-4 text-body-sm leading-[1.75] ${
                          index === 1 ? 'text-surface-white/75' : 'text-copy-mid'
                        }`}
                      >
                        {method.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex">
              <Link
                href="/customisation"
                className="inline-flex items-center gap-2 text-body font-body-medium text-dark transition-colors hover:text-accent"
              >
                See how customization works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section-lg"
      >
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Testimonials"
            heading={
              <>
                Proof, partnership, and product <em className="text-accent">quality</em>
              </>
            }
            description="The strongest feedback consistently points to the same things: realism, customization, and a team that behaves like a partner."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <Reveal className="h-full">
              <article
                id="testimonial-skyscanner"
                className="grid h-full gap-6 rounded-brand-lg border border-border bg-surface-alt p-6 md:grid-cols-[auto_1fr] md:p-8"
              >
                <div className="relative h-36 w-28 overflow-hidden rounded-brand-lg md:h-full md:min-h-[240px] md:w-44">
                  <Image
                    src="/images/photography/testimonial-woman-smiling.png"
                    alt="Portrait of Tracy Anderson smiling"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 112px, 176px"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-eyebrow uppercase tracking-eyebrow text-copy-light">
                    Featured client
                  </p>
                  <blockquote className="mt-4 font-heading text-quote md:text-section leading-[1.26] tracking-heading text-dark">
                    The realism genuinely caught us off guard. Our team stopped treating it as
                    training and started treating it as practice, which is exactly the shift we
                    needed.
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-body font-body-medium text-dark">Tracy Anderson</p>
                    <p className="mt-1 text-body-sm leading-[1.7] text-copy-mid">
                      Head of Learning &amp; Development, Skyscanner
                    </p>
                  </div>
                  <Link
                    href="/blog/what-makes-difficult-conversations-difficult"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-body font-body-medium text-dark transition-colors hover:text-accent"
                  >
                    Read the Skyscanner pilot story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((item) => (
                <Reveal key={item.id} className="h-full">
                  <article
                    id={item.id}
                    className="flex h-full flex-col rounded-brand-lg border border-border bg-surface-white p-6"
                  >
                    <p className="font-heading text-quote-mark leading-none text-accent/20">&ldquo;</p>
                    <blockquote className="mt-2 flex-1 font-heading text-body leading-[1.55] tracking-heading text-dark">
                      {item.quote}
                    </blockquote>
                    <footer className="mt-6 border-t border-border pt-4">
                      {item.name && (
                        <p className="text-body-sm font-body-medium text-dark">{item.name}</p>
                      )}
                      <p className="text-body-sm leading-[1.7] text-copy-mid">
                        {item.role}
                        {item.company ? `, ${item.company}` : ''}
                      </p>
                    </footer>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Solutions"
            heading={
              <>
                One platform for every conversation that <em className="text-accent">matters</em>
              </>
            }
            description="One training solution across every function, with unified reporting and administration."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((useCase) => {
              const Icon = useCase.icon

              return (
                <Reveal key={useCase.title} className="h-full">
                  <Link
                    href={useCase.href}
                    className="group flex h-full flex-col rounded-brand-lg border border-border bg-surface-white p-6 transition-all hover:-translate-y-px hover:border-accent-soft hover:bg-surface"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft bg-accent-whisper text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-section leading-[1.15] tracking-heading text-dark transition-colors group-hover:text-accent">
                      {useCase.title}
                    </h3>
                    <p className="mt-4 flex-1 text-body-sm leading-[1.75] text-copy-mid">
                      {useCase.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-label font-body-medium text-dark transition-colors group-hover:text-accent">
                      Explore solution
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-16">
          <div>
            <SectionIntro
              eyebrow="Voice realism"
              heading={
                <>
                  Ultra-realistic <em className="text-accent">voice</em> AI
                </>
              }
              description="Ambr AI delivers conversation simulations that feel genuinely human. AI characters listen, adapt to tone and approach, and respond in real time."
            />

            <Reveal delay={100}>
              <div className="mt-8 space-y-5">
                <div className="rounded-brand border border-border bg-surface-alt px-5 py-4">
                  <p className="font-body-medium text-dark">Ultra-low latency.</p>
                  <p className="mt-1 text-body-sm leading-[1.75] text-copy-mid">
                    Responses are near-instant. No awkward pauses. The pacing feels
                    natural, just like a real conversation.
                  </p>
                </div>
                <div className="rounded-brand border border-border bg-surface-alt px-5 py-4">
                  <p className="font-body-medium text-dark">Adaptive AI characters.</p>
                  <p className="mt-1 text-body-sm leading-[1.75] text-copy-mid">
                    The AI responds to what your team members actually say and how they
                    say it. Push back, change direction, try a different tactic, and the
                    AI follows.
                  </p>
                </div>
                <div className="rounded-brand border border-border bg-surface-alt px-5 py-4">
                  <p className="font-body-medium text-dark">Genuine conversational pressure.</p>
                  <p className="mt-1 text-body-sm leading-[1.75] text-copy-mid">
                    Your team has to think on their feet, read the tone, and respond in
                    the moment. That is where real skills are built.
                  </p>
                </div>
                <div className="rounded-brand border border-border bg-surface-alt px-5 py-4">
                  <p className="font-body-medium text-dark">Body language analysis.</p>
                  <p className="mt-1 text-body-sm leading-[1.75] text-copy-mid">
                    Ambr AI reads how people come across visually alongside their voice,
                    providing feedback on the non-verbal signals that shape every interaction.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/try-for-free"
                  className="inline-flex items-center gap-2 text-body font-body-medium text-dark transition-colors hover:text-accent"
                >
                  Try it for yourself
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="max-w-sm text-body-sm leading-[1.7] text-copy-mid">
                  &ldquo;Incredibly realistic, providing a safe and convenient environment.&rdquo; —
                  Director, Media Company
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal slow>
            <div className="space-y-4">
              <VoiceWaveform />
              <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="relative min-h-[220px] overflow-hidden rounded-brand-lg border border-border">
                  <Image
                    src="/images/photography/practice-phone-booth.png"
                    alt="A professional speaking into a phone booth in warm light"
                    fill
                    className="object-cover filter-duotone"
                    sizes="(max-width: 1024px) 100vw, 28vw"
                  />
                </div>
                <div className="rounded-brand-lg border border-border bg-surface-alt p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft bg-accent-whisper text-accent">
                    <ScanFace className="h-5 w-5" />
                  </div>
                  <p className="mt-6 font-heading text-section leading-[1.14] tracking-heading text-dark">
                    Real-time listening, visual analysis, and pressure that feels believable.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt px-container-mobile py-section-mobile md:px-container md:py-section-lg">
        <div className="mx-auto max-w-site">
          <SectionIntro
            eyebrow="Why Ambr AI"
            heading={
              <>
                Why teams choose <em className="text-accent">Ambr AI</em>
              </>
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title} className={index === 0 ? 'xl:col-span-2' : ''}>
                  <div className="h-full rounded-brand-lg border border-border bg-surface-white p-6 md:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft bg-accent-whisper text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-heading text-section leading-[1.14] tracking-heading text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-body-sm leading-[1.8] text-copy-mid">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 flex">
              <Link
                href="/product/languages"
                className="inline-flex items-center gap-2 text-body font-body-medium text-dark transition-colors hover:text-accent"
              >
                See all supported languages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-dark px-container-mobile py-8 md:px-container md:py-10">
        <div className="mx-auto max-w-site">
          <Reveal>
            <div className="grid gap-8 rounded-brand-lg border border-surface-white/10 bg-surface-white/5 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-8">
              <div>
                <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-surface-white/45">
                  Enterprise-grade security
                </p>
                <p className="mt-4 max-w-[42ch] text-body leading-[1.8] text-surface-white/80">
                  Data is isolated, never shared, and never used to train external models.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-[auto_auto_auto_1fr] md:items-center">
                <div className="flex items-center gap-3 rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm text-surface-white/75">
                  <Image
                    src="/icons/badge-iso.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="filter-badge-dark"
                    unoptimized
                  />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-3 rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm text-surface-white/75">
                  <Image
                    src="/icons/badge-gdpr.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="filter-badge-dark"
                    unoptimized
                  />
                  <span>GDPR</span>
                </div>
                <div className="flex items-center gap-3 rounded-brand border border-surface-white/10 bg-surface-white/5 px-4 py-3 text-body-sm text-surface-white/75">
                  <ShieldCheck className="h-4 w-4 text-accent-soft" />
                  <span>EU AI Act</span>
                </div>
                <div className="flex md:justify-end">
                  <Link
                    href="/trust/security-certifications"
                    className="inline-flex items-center gap-2 text-body font-body-medium text-surface-white transition-colors hover:text-accent-soft"
                  >
                    Learn more about AI Trust &amp; Safety
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-white px-container-mobile py-section-mobile md:px-container md:py-section-xl">
        <div className="mx-auto max-w-[860px] text-center">
          <SectionIntro
            align="center"
            eyebrow="Closing thought"
            heading={
              <>
                Not replacing humans. Enabling human <em className="text-accent">connection</em>.
              </>
            }
            description="The best training has always been conversational. Ambr AI makes structured, realistic conversation training available to every employee across every team, in over 30 languages. So when the real conversation happens, they are ready."
          />
          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <CtaButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
