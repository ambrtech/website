'use client'

import { useRef, useState, useEffect } from 'react'

interface MockDisplayProps {
  children: React.ReactNode
  /** Design width of the mock content in px. Default 470. */
  authoredWidth?: number
  className?: string
}

/**
 * Placement wrapper for animated mock illustrations.
 * Measures its container and scales the content proportionally
 * when the available width is narrower than the authored width.
 *
 * Use this around animated mocks when embedding them on pages
 * (inside ProductScreenshot). Not needed for static mocks.
 *
 * See MOCK-GUIDE.md for usage instructions.
 */
export function MockDisplay({
  children,
  authoredWidth = 470,
  className,
}: MockDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ro = new ResizeObserver(([entry]) => {
      const available = entry.contentBoxSize[0].inlineSize
      setScale(Math.min(1, available / authoredWidth))
    })

    ro.observe(el)
    return () => ro.disconnect()
  }, [authoredWidth])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? ''}`}>
      <div
        style={
          scale < 1
            ? {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: `${100 / scale}%`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </div>
  )
}
