'use client'

import { useEffect, useRef } from 'react'

export function Waveform() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    for (let i = 0; i < 50; i++) {
      const bar = document.createElement('div')
      bar.className = 'rounded-sm bg-accent/35'
      bar.style.width = '2px'
      bar.style.height = `${2 + Math.sin(i * 0.3) * 14 + Math.random() * 10}px`
      bar.style.animation = `waveAnim ${0.7 + Math.random() * 0.5}s ease-in-out ${i * 0.035}s infinite alternate`
      container.appendChild(bar)
    }
  }, [])

  return <div ref={ref} className="flex items-center gap-[1.5px] mb-8" />
}
