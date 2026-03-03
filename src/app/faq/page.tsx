import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'
import { FaqSection } from '@/components/sections/faq-section'
import { CTA } from '@/components/sections/cta'

export const metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Common questions about Ambr AI\'s conversation simulation platform. Learn about implementation, pricing, security, and customisation.',
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
            Frequently asked{' '}
            <em className="text-accent">questions</em>
          </>
        }
        subtitle="Everything you need to know about Ambr AI's conversation simulation platform."
      />

      <FaqSection
        items={[
          {
            question: 'How long does it take to set up custom simulations?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question: 'What makes Ambr AI different from other training platforms?',
            answer:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.',
          },
          {
            question: 'Is my data secure with Ambr AI?',
            answer:
              'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.',
          },
          {
            question: 'Which languages does Ambr AI support?',
            answer:
              'Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.',
          },
          {
            question: 'Can I integrate Ambr AI with our existing LMS?',
            answer:
              'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna.',
          },
          {
            question: 'How does pricing work?',
            answer:
              'Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.',
          },
          {
            question: 'What types of conversations can be simulated?',
            answer:
              'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.',
          },
          {
            question: 'Do you offer a pilot programme?',
            answer:
              'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac.',
          },
        ]}
      />

      <CTA />
    </>
  )
}
