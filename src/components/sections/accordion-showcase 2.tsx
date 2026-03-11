'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'
import { type CropFocus, type ImageFilter, filterClass, cropOrigin } from '@/lib/image-filters'

interface AccordionShowcaseItem {
  heading: string
  description: string
  visualContent?: React.ReactNode
  cropFocus?: CropFocus
  filter?: ImageFilter
}

interface AccordionShowcaseProps {
  heading: React.ReactNode
  items: AccordionShowcaseItem[]
  variant?: 'light' | 'dark'
  textureImage?: string
}

export function AccordionShowcase({
  heading,
  items,
  variant = 'light',
  textureImage = '/textures/feature-texture.jpg',
}: AccordionShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isDark = variant === 'dark'

  const activeItem = items[activeIndex]
  const activeCrop = activeItem?.cropFocus ?? 'center'
  const activeFilter = activeItem?.filter ?? 'faded'

  return (
    <Section
      className={
        isDark
          ? 'bg-dark border-y border-dark-mid'
          : 'bg-surface-alt border-y border-border'
      }
    >
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — accordion */}
          <div>
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={item.heading}
                  className={`border-t ${
                    isDark ? 'border-dark-mid' : 'border-border'
                  } ${index === items.length - 1 ? `border-b ${isDark ? 'border-dark-mid' : 'border-border'}` : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left py-5 transition-colors duration-normal ${
                      isActive
                        ? isDark
                          ? 'text-surface-white'
                          : 'text-dark'
                        : isDark
                          ? 'text-copy-faint hover:text-surface-white'
                          : 'text-copy-light hover:text-dark'
                    }`}
                  >
                    <h3 className="font-heading text-label tracking-heading">
                      {item.heading}
                    </h3>
                  </button>
                  <div
                    className={`grid transition-all duration-slow ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`text-body-sm leading-relaxed pb-6 ${
                          isDark ? 'text-copy-faint' : 'text-copy-mid'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right — heading + image */}
          <div>
            <h2
              className={`font-heading text-section leading-[1.2] tracking-heading mb-8 md:mb-10 ${
                isDark ? 'text-surface-white' : 'text-dark'
              }`}
            >
              {heading}
            </h2>
            <div className="relative w-full aspect-[4/3] rounded-brand-lg overflow-hidden">
              <Image
                src={textureImage}
                alt=""
                fill
                className={`object-cover scale-[1.5] ${filterClass[activeFilter]} ${cropOrigin[activeCrop]} transition-transform duration-slow`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 pointer-events-none ${
                  isDark ? 'vignette-dark' : 'vignette-light'
                }`}
              />
              {activeItem?.visualContent && (
                <div className="absolute top-[20%] left-4 right-[-15%] bottom-[-10%] transition-opacity duration-normal">
                  <div className="bg-surface-white rounded-brand border border-border shadow-card p-5 md:p-6 h-full overflow-hidden">
                    {activeItem.visualContent}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
