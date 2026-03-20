import { forwardRef } from 'react'

type MockFrameHeight = 'compact' | 'standard' | 'tall' | 'fill'

interface MockFrameProps {
  children: React.ReactNode
  /** Height category based on content density */
  height?: MockFrameHeight
  /** Extra layout classes (e.g. flex, justify-center) */
  className?: string
}

const heightClasses: Record<MockFrameHeight, string> = {
  compact: 'min-h-[280px]',
  standard: 'min-h-[360px]',
  tall: 'min-h-[420px]',
  fill: 'h-[420px]',
}

/**
 * Wrapper for animated mock components. Controls height category
 * and ensures consistent `relative` positioning for GSAP scoping.
 *
 * See MOCK-GUIDE.md for usage instructions.
 */
export const MockFrame = forwardRef<HTMLDivElement, MockFrameProps>(
  function MockFrame({ children, height = 'standard', className }, ref) {
    return (
      <div
        ref={ref}
        className={`relative ${heightClasses[height]}${className ? ` ${className}` : ''}`}
      >
        {children}
      </div>
    )
  }
)
