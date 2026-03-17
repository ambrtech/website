import { brand } from './tokens'

/**
 * Brand reveal easing as a [x1, y1, x2, y2] tuple.
 * Used by Framer Motion and other JS animation libraries.
 * Source of truth: tailwind.config.ts → brand.animation.easeRevealArray
 *
 * Note: GSAP does not accept CSS cubic-bezier functions directly.
 * GSAP animations (ImageReveal, customization-flow-animated) use
 * 'power2.out' as the nearest named approximation.
 */
export const EASE_REVEAL = brand.animation.easeRevealArray
