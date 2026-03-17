'use client'

import { useState, useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  slow?: boolean
  delay?: number
}

export function Reveal({ children, className = '', slow, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all ease-reveal ${
        slow ? 'duration-[1.5s]' : 'duration-[1.2s]'
      } ${
        visible 
          ? 'opacity-100 translate-y-0 [clip-path:inset(-20%_-20%_-20%_-20%)]' 
          : 'opacity-0 translate-y-[15px] [clip-path:inset(0_0_10%_0)]'
      } ${className}`}
    >
      {children}
    </div>
  )
}
