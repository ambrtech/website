import { createMetadata } from '@/lib/metadata'
import { TestimonialGrid } from '@/components/sections/testimonial-grid'

export const metadata = createMetadata({
  title: 'Preview: Testimonial Grid',
  description: 'Component preview.',
  path: '/preview/testimonial-grid',
})

export default function Preview() {
  return (
    <TestimonialGrid
      eyebrow="What people say"
      heading="How L&D leaders describe working with Ambr AI."
      testimonials={[
        {
          quote: "It's every HR Leader's dream to have a safe way for managers to practice these conversations.",
          role: 'Head of People',
          company: 'Design Agency',
        },
        {
          quote: 'We love it. It\'s great that we can customize it for our needs.',
          role: 'L&D Manager',
          company: 'Professional Services Firm',
        },
        {
          quote: "Wow, it's brilliant. It's fascinating. I've never seen anything like it.",
          name: 'Training Manager',
          role: 'Training Manager',
          company: 'Recruitment Company',
        },
        {
          quote: 'I was blown away with the coaching and feedback, it was spectacular.',
          role: 'L&D Manager',
          company: 'Manufacturing Company',
        },
        {
          quote: 'Incredibly realistic, providing a safe and convenient environment for practice.',
          role: 'Director',
          company: 'Media Company',
        },
      ]}
    />
  )
}
