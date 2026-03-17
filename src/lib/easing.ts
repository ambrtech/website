import { brand } from './tokens'

/**
 * Brand reveal easing as a [x1, y1, x2, y2] tuple.
 * Used by Framer Motion and other JS animation libraries.
 * Source of truth: tailwind.config.ts → brand.animation.easeRevealArray
 */
export const EASE_REVEAL = brand.animation.easeRevealArray

/**
 * GSAP-compatible ease function derived from the brand reveal curve.
 * Uses Newton-Raphson iteration to solve the cubic bezier.
 */
export const gsapRevealEase = createCubicBezier(...EASE_REVEAL)

function createCubicBezier(x1: number, y1: number, x2: number, y2: number) {
  return (t: number): number => {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by

    let x = t
    for (let i = 0; i < 8; i++) {
      const r = ((ax * x + bx) * x + cx) * x - t
      if (Math.abs(r) < 1e-6) break
      const d = (3 * ax * x + 2 * bx) * x + cx
      if (Math.abs(d) < 1e-6) break
      x -= r / d
    }

    return ((ay * x + by) * x + cy) * x
  }
}
