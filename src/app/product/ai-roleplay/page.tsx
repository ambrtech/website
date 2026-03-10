import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { MethodComparison } from '@/components/sections/method-comparison'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { GrainCta } from '@/components/sections/grain-cta'
import { PullQuote } from '@/components/sections/pull-quote'

export const metadata = createMetadata({
  title: 'What is AI Roleplay',
  description:
    'AI roleplay uses artificial intelligence to simulate realistic workplace conversations, helping teams practice high-stakes moments through structured conversation training.',
  path: '/product/ai-roleplay',
})

export default function AIRoleplayPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        first
        eyebrow="What is AI Roleplay"
        heading="AI roleplay: realistic conversation training for high-stakes workplace conversations"
        subtitle="Ambr AI uses artificial intelligence to simulate realistic workplace conversations. Instead of reading a script, watching a video, or waiting for a scheduled session, your teams train by actually having the conversation, speaking with an AI that listens and responds just like a real person. Scalable. Consistent. Measurable."
      />

      {/* ── The problem it solves ── */}
      <Section>
        <Reveal>
          <div className="max-w-[700px]">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              The problem
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Why conversation skills need structured{' '}
              <em className="text-accent">training</em>
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                High-stakes conversations are the backbone of an organization&apos;s
                success, and up until now, there has been no way to train teams for
                them in a consistent, structured way. Ambr AI roleplays change that.
                Your teams don&apos;t just learn best practice, they build the skills
                to apply it under pressure: finding the right words when a client
                pushes back, a negotiation stalls, or a direct report gets defensive.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── How it works ── */}
      <NumberedSteps
        eyebrow="How it works"
        heading="How Ambr AI works"
        items={[
          {
            title: 'Choose or create scenarios',
            description:
              "Select from a pre-built library, or easily customize simulations to match your organization's specific conversations, language, and training goals.",
          },
          {
            title: 'Roll out to your teams',
            description:
              'Deploy training to specific teams, departments, or the entire organization. Structure learning into guided paths with built-in certifications.',
          },
          {
            title: 'Your teams train through realistic voice conversations',
            description:
              'Team members speak naturally with an AI that listens, adapts, and responds in real time. All simulations fully private. Every session ends with structured feedback on tone, word choice, pacing, and approach.',
          },
          {
            title: 'Track results and shape strategy',
            description:
              'Monitor engagement, view aggregated capability insights across your organization, and identify where to focus development next.',
          },
        ]}
      />

      {/* ── Comparison table ── */}
      <MethodComparison
        eyebrow="The landscape"
        heading={
          <>
            How AI roleplay <em className="text-accent">compares</em>
          </>
        }
        items={[
          {
            method: 'Classroom roleplay',
            available: false,
            description:
              'Hard to scale. Requires scheduling, facilitators, and willing participants.',
          },
          {
            method: 'E-learning and video',
            available: false,
            description:
              'Passive. Watching a video about handling objections does not build the skill.',
          },
          {
            method: 'Mentoring',
            available: false,
            description:
              'Expensive and inconsistent. Not available to every team member.',
          },
          {
            method: 'AI roleplay',
            available: true,
            description:
              'The realism of live conversation with the scalability of digital learning. Consistent quality. Immediate feedback.',
          },
        ]}
      />

      {/* ── Use cases ── */}
      <FeatureGrid
        eyebrow="Use cases"
        heading={
          <>
            Where organizations use AI{' '}
            <em className="text-accent">roleplay</em>
          </>
        }
        items={[
          {
            heading: 'Sales',
            description:
              'Discovery calls, objection handling, negotiation, closing.',
          },
          {
            heading: 'Management',
            description:
              'Performance reviews, sensitive feedback, team conflict, restructures.',
          },
          {
            heading: 'Customer service',
            description: 'Complaint resolution, de-escalation, retention.',
          },
          {
            heading: 'Onboarding',
            description: 'Accelerating time to competence for new hires.',
          },
          {
            heading: 'Presentations',
            description: 'Pitching, handling Q&A under pressure.',
          },
          {
            heading: 'HR',
            description:
              'Sensitive conversations where getting the language right matters.',
          },
        ]}
      />

      {/* ── Results ── */}
      <Section>
        <Reveal>
          <div className="max-w-[700px] mb-12">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Results
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading">
              Does it <em className="text-accent">work</em>?
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <p className="font-heading text-headline text-accent leading-none tracking-heading">
                93%
              </p>
              <p className="text-body-sm text-copy-mid mt-3 leading-relaxed">
                of users report feeling better prepared for real conversations
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-heading text-headline text-accent leading-none tracking-heading">
                X%
              </p>
              <p className="text-body-sm text-copy-mid mt-3 leading-relaxed">
                Placeholder feedback stat
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-heading text-headline text-accent leading-none tracking-heading">
                85%
              </p>
              <p className="text-body-sm text-copy-mid mt-3 leading-relaxed">
                would recommend Ambr AI to peers
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <PullQuote
        quote="I was blown away with the feedback, it was spectacular."
        role="L&D Manager"
        company="Manufacturing Company"
      />

      {/* ── Final CTA ── */}
      <GrainCta
        heading={
          <>
            Ready to try <em className="text-accent">it</em>?
          </>
        }
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
        variant="dark"
      />

      {/* ── Cross-links ── */}
      <Section>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/customization"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Learn more
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                Customization
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                See how every simulation can be tailored to your scenarios, language, and culture.
              </p>
            </Link>
            <Link
              href="/product/how-it-works"
              className="group border border-border rounded-brand-md p-8 transition-all duration-normal hover:border-accent-soft hover:shadow-card"
            >
              <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
                Learn more
              </p>
              <h3 className="font-heading text-label text-dark mb-2 group-hover:text-accent transition-colors duration-normal">
                How It Works
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                A deeper look at the platform, from scenario design to feedback and analytics.
              </p>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
