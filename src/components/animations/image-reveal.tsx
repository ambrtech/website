'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  /** Direction the reveal unmasks from: "left", "right", "bottom" (default: "left") */
  direction?: 'left' | 'right' | 'bottom'
  /** Animation duration in seconds (default: 1.4) */
  duration?: number
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number
  /** Play immediately on mount instead of waiting for scroll (for above-fold content) */
  immediate?: boolean
}

function getClipPath(direction: 'left' | 'right' | 'bottom') {
  switch (direction) {
    case 'left':
      return 'inset(0 100% 0 0)'
    case 'right':
      return 'inset(0 0 0 100%)'
    case 'bottom':
      return 'inset(0 0 100% 0)'
  }
}

/**
 * Clip-path image reveal: photos unmask from one edge like a curtain pull,
 * with a subtle scale settle. Feels like analog photo development.
 *
 * Wraps any content (typically a next/image) in an overflow-hidden container.
 */
export function ImageReveal({
  children,
  className,
  direction = 'left',
  duration = 1.4,
  delay = 0,
  immediate = false,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const toVars: gsap.TweenVars = {
        clipPath: 'inset(0 0% 0 0)',
        scale: 1,
        duration,
        delay,
        ease: 'power2.out',
      }

      if (!immediate) {
        toVars.scrollTrigger = {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }

      gsap.fromTo(
        el,
        {
          clipPath: getClipPath(direction),
          scale: 1.04,
        },
        toVars,
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      {children}
    </div>
  )
}
