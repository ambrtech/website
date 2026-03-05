'use client'

import { useState, useEffect, useRef } from 'react'

interface MarginaliaProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down' | 'underline' | 'circle'
  delay?: number
  className?: string
  width?: number
  height?: number
}

export function Marginalia({ 
  children, 
  direction = 'left', 
  delay = 0, 
  className = '',
  width = 100,
  height = 50
}: MarginaliaProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  // A hand-drawn squiggly arrow or underline based on direction
  const renderSVG = () => {
    switch (direction) {
      case 'left':
        return (
          <svg className="absolute -left-12 top-2 overflow-visible" width={width} height={height} viewBox="0 0 100 50" fill="none">
            <path 
              d="M100 40 C70 45, 30 30, 5 15 M5 15 L20 10 M5 15 L15 25" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={visible ? 'animate-draw text-accent/60' : 'opacity-0'} 
            />
          </svg>
        )
      case 'right':
        return (
          <svg className="absolute -right-8 top-1 overflow-visible" width={width} height={height} viewBox="0 0 100 50" fill="none">
            <path 
              d="M0 10 C30 15, 70 30, 95 40 M95 40 L80 35 M95 40 L85 25" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={visible ? 'animate-draw text-accent/60' : 'opacity-0'} 
            />
          </svg>
        )
      case 'underline':
        return (
          <svg className="absolute -bottom-2 left-0 w-full overflow-visible" height="12" preserveAspectRatio="none" viewBox="0 0 100 12" fill="none">
            <path 
              d="M2 5 Q 25 10, 50 6 T 98 8" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className={visible ? 'animate-draw text-accent/60' : 'opacity-0'} 
            />
          </svg>
        )
      case 'circle':
        return (
          <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <path 
              d="M50 5 C 80 5, 95 30, 95 50 C 95 80, 70 95, 50 95 C 20 95, 5 70, 5 50 C 5 20, 30 5, 55 5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className={visible ? 'animate-draw text-accent/60' : 'opacity-0'} 
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
      {renderSVG()}
    </div>
  )
}
