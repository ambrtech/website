import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { NumberedSteps } from '@/components/sections/numbered-steps'
import { MethodComparison } from '@/components/sections/method-comparison'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { StatBar } from '@/components/sections/stat-bar'
import { PullQuote } from '@/components/sections/pull-quote'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'What is AI Roleplay',
  description:
    'AI roleplay uses artificial intelligence to simulate realistic workplace conversations, helping teams practice high-stakes moments through structured conversation training.',
  path: '/product/ai-roleplay',
})

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

      <PageHero
        compact
        heading="AI roleplay: realistic conversation training for high-stakes workplace conversations"
        subtitle="AI roleplay uses artificial intelligence to simulate realistic workplace conversations. Instead of reading a script, watching a video, or waiting for a scheduled session, your teams train by actually having the conversation, speaking with an AI that listens and responds just like a real person. Scalable. Consistent. Measurable."
      />

      <Section>
        <Reveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Why conversation skills need structured{' '}
              <em className="text-accent">training</em>
            </h2>
            <div className="text-body text-copy-mid leading-[1.75] space-y-4">
              <p>
                High-stakes conversations are the backbone of an organization&apos;s
                success, and up until now, there has been no way to train teams for
                them in a consistent, structured way. AI roleplay changes that. Your
                teams don&apos;t just learn best practice, they build the skills to
                apply it under pressure: finding the right words when a client pushes
                back, a negotiation stalls, or a direct report gets defensive.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <NumberedSteps
        eyebrow="How it works"
        heading="How it works"
        items={[
          {
            title: 'Choose or create scenarios',
            description:
              "Select from a pre-built library, or customize simulations to match your organization's specific conversations, language, and training goals.",
          },
          {
            title: 'Roll out to your teams',
            description:
              'Deploy training to specific teams, departments, or the entire organization. Structure learning into guided paths with built-in certifications.',
          },
          {
            title: 'Your teams train through realistic voice conversations',
            description:
              'Team members speak naturally with an AI that listens, adapts, and responds in real time. Every session ends with structured feedback on tone, word choice, pacing, and approach.',
          },
          {
            title: 'Track results and shape strategy',
            description:
              'Monitor engagement, view aggregated capability insights across your organization, and identify where to focus development next.',
          },
        ]}
      />

      <MethodComparison
        eyebrow="Comparison"
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
              'Discovery calls, objection handling, negotiation, closing',
          },
          {
            heading: 'Management',
            description:
              'Performance reviews, sensitive feedback, team conflict, restructures',
          },
          {
            heading: 'Customer service',
            description: 'Complaint resolution, de-escalation, retention',
          },
          {
            heading: 'Onboarding',
            description: 'Accelerating time to competence for new hires',
          },
          {
            heading: 'Presentations',
            description:
              'Pitching, storytelling, handling Q&A under pressure',
          },
          {
            heading: 'HR',
            description:
              'Sensitive conversations where getting the language right matters',
          },
        ]}
      />

      <StatBar
        items={[
          {
            value: '93%',
            label: 'feel better prepared for real conversations',
          },
          {
            value: '92%',
            label: 'engagement rate',
            source: 'Skyscanner pilot',
          },
          {
            value: '85%',
            label: 'would recommend to peers',
          },
        ]}
      />

      <PullQuote
        quote="I was blown away with the feedback, it was spectacular."
        role="L&D Manager"
        company="Manufacturing Company"
      />

      <GrainCta
        heading={
          <>
            See it for <em className="text-accent">yourself</em>
          </>
        }
        subtitle="Try a live AI roleplay conversation. No commitment, no setup."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        variant="dark"
      />
    </>
  )
}
