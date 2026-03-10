import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { OrganizationJsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/sections/section'
import { Reveal } from '@/components/reveal'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'
import { FaqSection } from '@/components/sections/faq-section'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Company',
  description:
    'Ambr AI was founded to help people get better at the most human skill of all: talking to each other. Meet the team behind the platform.',
  path: '/company',
})

export default function CompanyPage() {
  return (
    <>
      <OrganizationJsonLd />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Company', href: '/company' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Built for the conversations that{' '}
            <em className="text-accent">matter</em> most
          </>
        }
        subtitle="Ambr AI was founded on a straightforward observation: the most important conversations in any organization are the ones people get the least opportunity to train for. We set out to change that, using AI to help people get better at the most human skill of all: talking to each other."
      />

      <Section>
        <Reveal>
          <div className="max-w-[700px]">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              Who we are
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Our team
            </h2>
            <p className="text-body text-copy-mid leading-[1.75]">
              Ambr AI (Ambr Technologies Limited) was founded in 2022 by former
              executives at Uber, Accenture, and Spotify. The team is London
              based, operating globally. Our clients include Deloitte,
              Skyscanner, and IWG.
            </p>
          </div>
        </Reveal>
      </Section>

      <FeatureGrid
        eyebrow="What we believe"
        heading="Our principles"
        items={[
          {
            heading: 'Generic training does not work',
            description:
              'Customization is at the center of everything we build.',
          },
          {
            heading:
              'Technology should enable the conversation, not dominate it',
            description:
              'Voice-first because real conversations happen in real time.',
          },
          {
            heading: 'AI should make us better at being human',
            description:
              'Our purpose is to strengthen human connection, not replace it.',
          },
        ]}
      />

      <Section>
        <Reveal>
          <div className="max-w-[700px]">
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
              What we stand for
            </p>
            <h2 className="font-heading text-section leading-[1.2] tracking-heading mb-6">
              Our approach
            </h2>
            <p className="text-body text-copy-mid leading-[1.75]">
              AI is the enabler, not the end goal. The real value is in the
              confidence and empathy your people bring to their next real
              conversation. We pride ourselves on being a specialist training
              partner, not just a software vendor.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5 eyebrow-hairline">
            Global reach
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                GDPR compliance
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                GDPR compliance is foundational to how we build and operate.
              </p>
            </div>
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                EU AI Act alignment
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                EU AI Act alignment is built in from the ground up.
              </p>
            </div>
            <div className="py-6 border-t border-border">
              <h3 className="font-heading text-label text-dark mb-2">
                30+ languages
              </h3>
              <p className="text-body-sm text-copy-light leading-relaxed">
                Over 30 languages supported for global deployment.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <TestimonialGrid
        testimonials={[
          {
            quote: 'They built everything around our specific needs.',
            role: 'Enterprise client',
            company: '',
          },
          {
            quote:
              "We've looked at alternatives but they were just 'meh'... this is a really good product.",
            role: 'Training Manager',
            company: 'Recruitment Company',
          },
        ]}
      />

      <FaqSection
        items={[
          {
            question: 'What is AI roleplay training?',
            answer:
              'AI roleplay is a training method where employees build conversation skills by speaking with an AI that responds naturally in real time via voice.',
          },
          {
            question: 'How does Ambr AI work?',
            answer:
              'Choose a scenario, have a realistic voice conversation with an AI character, and receive detailed feedback. The AI adapts to tone and approach in real time.',
          },
          {
            question:
              'What makes Ambr AI different from other AI training tools?',
            answer:
              'Deep customization based on your specific organization, ultra-realistic voice interaction, and a hands-on service model with a dedicated team.',
          },
          {
            question: 'What kind of feedback do users receive?',
            answer:
              'Personalized feedback covering structure, word choice, approach, tone, pacing, and delivery.',
          },
          {
            question: 'Can users train on presentations?',
            answer:
              'Yes. Ambr AI includes Presentation Training with an AI audience that provides feedback on delivery and impact.',
          },
          {
            question: 'How long does it take to get started?',
            answer:
              'Customized scenarios can be created in minutes, and our team supports you through setup and rollout.',
          },
          {
            question:
              "Is my organization's data used to train AI models?",
            answer:
              'No. Your data is never used to train any AI model outside the Ambr AI platform. This is a contractual commitment.',
          },
          {
            question: 'How is Ambr AI priced?',
            answer:
              "Ambr AI uses a license-based pricing model based on your organization's scale. Contact us for a quote.",
          },
        ]}
      />

      <GrainCta
        heading={
          <>
            Try Ambr AI for <em className="text-accent">free</em>
          </>
        }
        subtitle="Experience realistic AI roleplay training. No commitment required."
        ctaLabel="Try for Free"
        ctaHref="/try-for-free"
        secondaryLabel="Find Out More"
        secondaryHref="/find-out-more"
        variant="dark"
      />
    </>
  )
}
