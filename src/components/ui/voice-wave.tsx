'use client'

import { useRef, useEffect, useCallback, useMemo } from 'react'
import { createNoise2D } from 'simplex-noise'

interface VoiceWaveProps {
  /** Width of the canvas in px */
  width?: number
  /** Height of the canvas in px */
  height?: number
  /** Primary color — defaults to Ambr accent */
  color?: string
  /** Animation intensity: 0 = frozen, 1 = full animation */
  intensity?: number
  /** CSS class for the container */
  className?: string
}

/**
 * Parse a hex color string into [r, g, b].
 * Supports #RGB, #RRGGBB, and bare variants.
 */
function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace('#', '')
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16)
    const g = parseInt(cleaned[1] + cleaned[1], 16)
    const b = parseInt(cleaned[2] + cleaned[2], 16)
    return [r, g, b]
  }
  const r = parseInt(cleaned.slice(0, 2), 16)
  const g = parseInt(cleaned.slice(2, 4), 16)
  const b = parseInt(cleaned.slice(4, 6), 16)
  return [r, g, b]
}

/**
 * Attempt to parse any CSS color into [r, g, b].
 * Falls back to the accent orange if parsing fails.
 */
function parseColor(color: string): [number, number, number] {
  if (color.startsWith('#')) return hexToRgb(color)
  // For rgb/rgba strings
  const match = color.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)
  if (match) return [Number(match[1]), Number(match[2]), Number(match[3])]
  return [212, 114, 52] // fallback: #D47234
}

export function VoiceWave({
  width = 600,
  height = 120,
  color = '#D47234',
  intensity = 1,
  className,
}: VoiceWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const timeRef = useRef(0)
  const noise2DRef = useRef<ReturnType<typeof createNoise2D> | null>(null)

  // Memoize the parsed color so the reference is stable across renders
  const rgb = useMemo(() => parseColor(color), [color])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (!noise2DRef.current) return

    const noise2D = noise2DRef.current

    // Logical dimensions
    const w = width
    const h = height

    // Advance time — fast enough for speech-like movement
    const baseSpeed = 0.007
    timeRef.current += baseSpeed * (0.05 + intensity * 0.95)

    const time = timeRef.current
    const [r, g, b] = rgb

    // Clear
    ctx.clearRect(0, 0, w, h)

    // === Calculate wave points ===
    const step = 2
    const centerY = h / 2

    // === Speech rhythm: aggressive, erratic, with brief pauses ===
    // Phrase-level: mostly speaking, brief pauses
    const speaking = 0.35 + 0.65 * Math.max(0, noise2D(time * 0.8, 20))
    // Syllable-level: very rapid energy (higher freq = more erratic)
    const syllableRaw = Math.abs(noise2D(time * 24, 0))
    // Combined: high-energy with brief dips
    const speechEnergy = syllableRaw * speaking

    // Occasional spike: amplitude surges 2-3x, ~20% of the time
    const spikeNoise = noise2D(time * 0.45, 50)
    const spikeActive = spikeNoise > 0.5
    const spikeMagnitude = spikeActive ? 2.0 + (spikeNoise - 0.5) * 4.0 : 1.0 // 2x–4x when active

    // Amplitude: minimum 18px swing regardless of canvas height, then scales up for taller canvases
    // This ensures short canvases (32px) still look energetic
    const minAmplitude = 18
    const maxAmplitude = Math.max(minAmplitude, h * 0.46)
    const amplitude = maxAmplitude * (0.1 + speechEnergy * 0.9) * spikeMagnitude * (0.2 + intensity * 0.8)

    // Collect wave sample points
    const points: Array<{ x: number; y: number }> = []

    for (let x = 0; x <= w; x += step) {
      const nx = x / w

      // Primary: very fast noise — aggressive speech-like oscillation
      const primary = noise2D(nx * 7.0 + time * 18.0, time * 9.0)

      // Secondary: rapid detail
      const detail = noise2D(nx * 16.0 + 100 + time * 12.0, time * 6.0 + 50)

      // Tertiary: slower macro shape
      const macro = noise2D(nx * 2.5 + 200, time * 1.2 + 100)

      // Combine layers
      const displacement = primary * 0.55 + detail * 0.25 + macro * 0.2

      const y = centerY + displacement * amplitude

      points.push({ x, y })
    }

    // === Edge fade envelope ===
    // Compute an alpha envelope so the wave emerges from nothing at
    // the edges and is full brightness in the center third.
    // This is a smooth bell-ish curve, not a linear ramp.
    const edgeFade = (x: number): number => {
      const t = x / w // 0..1
      // Fade in over the first 15%, fade out over the last 15%
      const fadeZone = 0.15
      if (t < fadeZone) {
        const s = t / fadeZone
        return s * s * (3 - 2 * s) // smoothstep
      }
      if (t > 1 - fadeZone) {
        const s = (1 - t) / fadeZone
        return s * s * (3 - 2 * s)
      }
      return 1
    }

    // === Helper: draw the wave path with quadratic bezier smoothing ===
    const tracePath = (ctx: CanvasRenderingContext2D) => {
      if (points.length < 2) return
      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      // Use quadratic bezier between midpoints for silk-smooth interpolation
      for (let i = 0; i < points.length - 1; i++) {
        const curr = points[i]
        const next = points[i + 1]
        const mx = (curr.x + next.x) / 2
        const my = (curr.y + next.y) / 2
        ctx.quadraticCurveTo(curr.x, curr.y, mx, my)
      }

      // End at the last point
      const last = points[points.length - 1]
      ctx.lineTo(last.x, last.y)
    }

    // === Draw glow layer (soft, wide, low opacity) ===
    ctx.save()

    // We'll draw the glow in segments to apply the edge fade as
    // varying alpha along the stroke. For performance, we use a
    // gradient stroke instead of per-segment drawing.

    // Create a horizontal gradient for the glow
    const glowGrad = ctx.createLinearGradient(0, 0, w, 0)
    const glowBaseAlpha = 0.12 * intensity
    // Build gradient stops with edge fade baked in
    const stopCount = 10
    for (let i = 0; i <= stopCount; i++) {
      const t = i / stopCount
      const fade = edgeFade(t * w)
      const a = glowBaseAlpha * fade
      glowGrad.addColorStop(t, `rgba(${r}, ${g}, ${b}, ${a})`)
    }

    ctx.strokeStyle = glowGrad
    ctx.lineWidth = 18 * (h / 120) // scale glow width with canvas height
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    // Soft blur for the glow
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${0.2 * intensity})`
    ctx.shadowBlur = 25 * (h / 120)

    tracePath(ctx)
    ctx.stroke()

    ctx.restore()

    // === Draw secondary bloom (medium width, medium opacity) ===
    ctx.save()

    const bloomGrad = ctx.createLinearGradient(0, 0, w, 0)
    const bloomBaseAlpha = 0.18 * intensity
    for (let i = 0; i <= stopCount; i++) {
      const t = i / stopCount
      const fade = edgeFade(t * w)
      bloomGrad.addColorStop(t, `rgba(${r}, ${g}, ${b}, ${bloomBaseAlpha * fade})`)
    }

    ctx.strokeStyle = bloomGrad
    ctx.lineWidth = 8 * (h / 120)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${0.1 * intensity})`
    ctx.shadowBlur = 10 * (h / 120)

    tracePath(ctx)
    ctx.stroke()

    ctx.restore()

    // === Draw main stroke ===
    ctx.save()

    // Main stroke gradient: full color in center, fading at edges
    const mainGrad = ctx.createLinearGradient(0, 0, w, 0)
    // Center of the wave is slightly brighter than the accent —
    // we boost alpha to 0.95 for warmth, taper at edges
    for (let i = 0; i <= stopCount; i++) {
      const t = i / stopCount
      const fade = edgeFade(t * w)
      // Slight brightness boost in the center third
      const centerBoost = 1 - 0.15 * Math.abs(t - 0.5) * 2
      const a = 0.92 * fade * centerBoost * (0.3 + intensity * 0.7)
      mainGrad.addColorStop(t, `rgba(${r}, ${g}, ${b}, ${a})`)
    }

    ctx.strokeStyle = mainGrad
    // Stroke width tapers with canvas height, stays substantial
    const baseStrokeWidth = Math.max(2.5, 4 * (h / 120))
    ctx.lineWidth = baseStrokeWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    tracePath(ctx)
    ctx.stroke()

    ctx.restore()

    // === Draw highlight core (thin, bright, creates depth) ===
    ctx.save()

    const coreGrad = ctx.createLinearGradient(0, 0, w, 0)
    const coreBaseAlpha = 0.3 * intensity
    for (let i = 0; i <= stopCount; i++) {
      const t = i / stopCount
      const fade = edgeFade(t * w)
      // Use a lighter, warmer version of the accent for the core
      const lr = Math.min(255, r + 60)
      const lg = Math.min(255, g + 40)
      const lb = Math.min(255, b + 20)
      coreGrad.addColorStop(t, `rgba(${lr}, ${lg}, ${lb}, ${coreBaseAlpha * fade})`)
    }

    ctx.strokeStyle = coreGrad
    ctx.lineWidth = Math.max(1, 1.5 * (h / 120))
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    tracePath(ctx)
    ctx.stroke()

    ctx.restore()

    // Schedule next frame
    rafRef.current = requestAnimationFrame(render)
  }, [width, height, rgb, intensity])

  useEffect(() => {
    // Create noise function once
    noise2DRef.current = createNoise2D()

    const canvas = canvasRef.current
    if (!canvas) return

    // Set up canvas for retina
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }

    // Start the render loop
    rafRef.current = requestAnimationFrame(render)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [width, height, render])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={className}
    />
  )
}
