'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from './section'
import { Reveal } from '@/components/reveal'

type CropFocus = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
type ImageFilter = 'film-grain' | 'muted-warm' | 'muted-cool' | 'editorial' | 'faded'

const filterClass: Record<ImageFilter, string> = {
  'film-grain': 'filter-film-grain',
  'muted-warm': 'filter-muted-warm',
  'muted-cool': 'filter-muted-cool',
  editorial: 'filter-editorial',
  faded: 'filter-faded',
}

const cropOrigin: Record<CropFocus, string> = {
  'top-left': 'origin-top-left',
  'top-right': 'origin-top-right',
  'bottom-left': 'origin-bottom-left',
  'bottom-right': 'origin-bottom-right',
  center: 'origin-center',
}

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
  textureImage = '/images/textures/feature-texture.jpg',
}: AccordionShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isDark = variant === 'dark'

  const activeItem = items[activeIndex]
  const activeCrop = activeItem?.cropFocus ?? 'center'
  const activeFilter = activeItem?.filter ?? 'editorial'

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
                    className="overflow-hidden transition-all duration-slow"
                    style={{
                      maxHeight: isActive ? '12rem' : '0',
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <p
                      className={`text-body-sm leading-relaxed pb-6 ${
                        isDark ? 'text-copy-faint' : 'text-copy-mid'
                      }`}
                    >
                      {item.description}
                    </p>
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
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isDark
                    ? 'radial-gradient(ellipse at center, transparent 35%, rgba(28, 28, 26, 0.45) 100%)'
                    : 'radial-gradient(ellipse at center, transparent 35%, rgba(255, 255, 255, 0.5) 100%)',
                }}
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
