'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  slow?: boolean
}

export function Reveal({ children, className = '', slow }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-5 transition-all ease-out ${
        slow ? 'duration-reveal' : 'duration-slow'
      } ${className}`}
    >
      {children}
    </div>
  )
}
