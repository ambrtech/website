'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsapRevealEase } from '@/lib/easing'

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
 * Clip-path image reveal with parallax: photos unmask from one edge like a
 * curtain pull, with a subtle scale settle, and the inner content drifts at
 * a slower scroll speed to create spatial depth.
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
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      const inner = innerRef.current
      if (!el || !inner) return

      // Clip-path reveal
      const toVars: gsap.TweenVars = {
        clipPath: 'inset(0 0% 0 0)',
        scale: 1,
        duration,
        delay,
        ease: gsapRevealEase,
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

      // Parallax on inner content — image drifts slower than scroll
      gsap.fromTo(
        inner,
        { y: '-8%' },
        {
          y: '8%',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
