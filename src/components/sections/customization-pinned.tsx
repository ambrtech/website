'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ProductScreenshot,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockScenarioCreator,
} from './product-screenshot'
import { EyebrowLine } from '@/components/animations/eyebrow-line'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    step: '01',
    heading: 'Admin Customization',
    description:
      'Easily create custom simulations yourself, directly in the platform. No technical skills required.',
    mock: <MockAdminBuilder />,
  },
  {
    step: '02',
    heading: 'In-House Customization Service',
    description:
      'Our expert team builds fully tailored simulations for you. Share a few minutes of context and we deliver scenarios that match your need.',
    mock: <MockCustomizationDelivery />,
  },
  {
    step: '03',
    heading: 'Individual User Customization',
    description:
      'Individual team members create their own private scenarios for specific upcoming conversations.',
    mock: <MockScenarioCreator />,
  },
] as const

export function CustomizationPinned() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mockRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      // Only apply pinning on desktop (md+)
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: '+=250%',
            snap: {
              snapTo: [0, 0.5, 1],
              duration: 0.3,
              ease: 'power2.inOut',
            },
          },
        })

        // Step 1 is visible initially. Animate through steps 2 and 3.
        // Transition 1→2
        tl.to(textRefs.current[0], { opacity: 0, y: -20, duration: 0.3 }, 0.15)
          .to(mockRefs.current[0], { opacity: 0, scale: 0.96, duration: 0.3 }, 0.15)
          .to(stepRefs.current[0], { opacity: 0.3, duration: 0.2 }, 0.15)
          .fromTo(
            textRefs.current[1],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 },
            0.35,
          )
          .fromTo(
            mockRefs.current[1],
            { opacity: 0, scale: 1.03 },
            { opacity: 1, scale: 1, duration: 0.3 },
            0.35,
          )
          .to(stepRefs.current[1], { opacity: 1, duration: 0.2 }, 0.35)

        // Transition 2→3
        tl.to(textRefs.current[1], { opacity: 0, y: -20, duration: 0.3 }, 0.65)
          .to(mockRefs.current[1], { opacity: 0, scale: 0.96, duration: 0.3 }, 0.65)
          .to(stepRefs.current[1], { opacity: 0.3, duration: 0.2 }, 0.65)
          .fromTo(
            textRefs.current[2],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 },
            0.85,
          )
          .fromTo(
            mockRefs.current[2],
            { opacity: 0, scale: 1.03 },
            { opacity: 1, scale: 1, duration: 0.3 },
            0.85,
          )
          .to(stepRefs.current[2], { opacity: 1, duration: 0.2 }, 0.85)
      })
    },
    { scope: sectionRef },
  )

  return (
    <div className="bg-surface-white">
      <div
        ref={sectionRef}
        className="min-h-screen flex flex-col justify-center py-section-lg md:py-0"
      >
        <div className="mx-auto max-w-site px-container-mobile md:px-container w-full">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <EyebrowLine />
            <p className="text-eyebrow font-body-medium uppercase tracking-eyebrow text-copy-light mb-5">
              Customization
            </p>
            <h2 className="font-heading text-headline leading-[1.1] tracking-heading max-w-[700px] mb-4">
              Training built around your{' '}
              <em className="text-accent">exact</em> needs
            </h2>
            <p className="text-body text-copy-mid leading-[1.75] max-w-[580px]">
              Ambr AI is fully customizable to match your specific training goals
              — and can be done easily, with minimal effort and without huge
              investment.
            </p>
          </div>

          {/* Desktop: two-column pinned layout */}
          <div className="hidden md:grid md:grid-cols-[1fr_1.3fr] gap-16 items-center">
            {/* Left: step indicators + text */}
            <div className="relative">
              {/* Step indicators */}
              <div className="flex gap-3 mb-8">
                {items.map((item, i) => (
                  <div
                    key={item.step}
                    ref={(el) => { stepRefs.current[i] = el }}
                    className={`font-heading text-eyebrow tracking-heading ${
                      i === 0 ? 'opacity-100' : 'opacity-30'
                    } transition-opacity`}
                  >
                    <span className="text-accent">{item.step}</span>
                  </div>
                ))}
              </div>

              {/* Stacked text content */}
              <div className="relative min-h-[120px]">
                {items.map((item, i) => (
                  <div
                    key={item.heading}
                    ref={(el) => { textRefs.current[i] = el }}
                    className={`${i === 0 ? '' : 'absolute inset-0'} ${
                      i === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="font-heading text-section leading-[1.2] tracking-heading text-dark mb-3">
                      {item.heading}
                    </h3>
                    <p className="text-body text-copy-mid leading-[1.75] max-w-[400px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: product mock */}
            <div className="relative min-h-[320px]">
              {items.map((item, i) => (
                <div
                  key={item.heading}
                  ref={(el) => { mockRefs.current[i] = el }}
                  className={`${i === 0 ? '' : 'absolute inset-0'} ${
                    i === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ProductScreenshot>{item.mock}</ProductScreenshot>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: simple stacked layout (no pinning) */}
          <div className="md:hidden space-y-10">
            {items.map((item) => (
              <div key={item.heading} className="space-y-5">
                <div className="h-[240px] overflow-hidden rounded-brand-lg">
                  <div className="transform scale-[0.65] origin-top-left w-[154%]">
                    <ProductScreenshot>{item.mock}</ProductScreenshot>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-label tracking-heading text-dark mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-body-sm text-copy-mid leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
