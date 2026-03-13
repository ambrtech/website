'use client'

import { motion } from 'framer-motion'

interface EyebrowLineProps {
  className?: string
  /** Width of the line in px (default: 24) */
  width?: number
  /** Color of the line (default: accent-soft via CSS var) */
  color?: string
}

/**
 * Animated eyebrow hairline: a small accent-colored line that draws
 * itself into existence when it enters the viewport.
 *
 * Replaces the static CSS ::before pseudo-element with an animated SVG.
 */
export function EyebrowLine({
  className,
  width = 24,
  color,
}: EyebrowLineProps) {
  return (
    <motion.svg
      width={width}
      height={2}
      viewBox={`0 0 ${width} 2`}
      className={`mb-3 block ${className ?? ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3 }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2={width}
        y2="1"
        stroke={color ?? 'var(--color-accent-soft)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
      />
    </motion.svg>
  )
}
