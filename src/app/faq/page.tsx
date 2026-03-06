import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { FaqSection } from '@/components/sections/faq-section'
import { GrainCta } from '@/components/sections/grain-cta'

export const metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Common questions about Ambr AI, including how the platform works, customization, security, pricing, and getting started.',
  path: '/faq',
})

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />

      <PageHero
        compact
        heading={
          <>
            Frequently asked <em className="text-accent">questions</em>
          </>
        }
        subtitle="Everything you need to know about Ambr AI and realistic AI roleplay training."
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
            Still have <em className="text-accent">questions</em>?
          </>
        }
        subtitle="Get in touch with our team. We are happy to help."
        ctaLabel="Find Out More"
        ctaHref="/find-out-more"
        variant="light"
      />
    </>
  )
}
