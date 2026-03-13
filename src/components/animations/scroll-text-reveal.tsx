'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

interface ScrollTextRevealProps {
  children: React.ReactNode
  className?: string
  /** ScrollTrigger start position (default: "top 85%") */
  start?: string
  /** ScrollTrigger end position (default: "top 35%") */
  end?: string
  /** Stagger delay between words in seconds (default: 0.04) */
  stagger?: number
}

/**
 * Scroll-scrubbed text reveal: words materialize from low opacity
 * as the user scrolls, creating an editorial reading experience.
 *
 * Wrap any heading or paragraph — SplitText handles the DOM splitting
 * and preserves inner elements like <em>.
 */
export function ScrollTextReveal({
  children,
  className,
  start = 'top 85%',
  end = 'top 35%',
  stagger = 0.04,
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const split = SplitText.create(el, { type: 'words' })

      gsap.fromTo(
        split.words,
        { opacity: 0.15, y: 6 },
        {
          opacity: 1,
          y: 0,
          stagger,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            scrub: 1,
            start,
            end,
          },
        },
      )

      return () => {
        split.revert()
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
