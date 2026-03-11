'use client'

import { useRef, useId, useEffect, type CSSProperties, type ReactNode } from 'react'
import { animate, useMotionValue, type AnimationPlaybackControls } from 'framer-motion'

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number,
): number {
  if (fromLow === fromHigh) return toLow
  const pct = (value - fromLow) / (fromHigh - fromLow)
  return toLow + pct * (toHigh - toLow)
}

interface EtherealGrainProps {
  /** CSS color value for the shadow tint */
  color?: string
  /** Animation intensity (1–100) and speed (1–100) */
  animation?: { scale: number; speed: number }
  /** 'fill' preserves aspect, 'stretch' distorts to fit */
  sizing?: 'fill' | 'stretch'
  /** Extra classes on the outer wrapper */
  className?: string
  /** Inline styles on the outer wrapper */
  style?: CSSProperties
  /** Show static noise overlay layers (default true, disable on dark backgrounds) */
  noiseOverlay?: boolean
  /** Content rendered above the grain effect */
  children?: ReactNode
}

export function EtherealGrain({
  color = 'rgba(196, 160, 128, 1)',
  animation = { scale: 80, speed: 70 },
  sizing = 'fill',
  noiseOverlay = true,
  className = '',
  style,
  children,
}: EtherealGrainProps) {
  const rawId = useId().replace(/:/g, '')
  const filterId = `grain-${rawId}`

  const animationEnabled = animation.scale > 0
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null)
  const hueRotateMotionValue = useMotionValue(180)
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null)

  const displacementScale = mapRange(animation.scale, 1, 100, 15, 60)
  const animationDuration = mapRange(animation.speed, 1, 100, 1000, 50)

  useEffect(() => {
    if (!feColorMatrixRef.current || !animationEnabled) return

    if (hueRotateAnimation.current) {
      hueRotateAnimation.current.stop()
    }

    hueRotateMotionValue.set(0)
    hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
      duration: animationDuration / 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      ease: 'linear',
      delay: 0,
      onUpdate: (value: number) => {
        feColorMatrixRef.current?.setAttribute('values', String(value))
      },
    })

    return () => {
      hueRotateAnimation.current?.stop()
    }
  }, [animationEnabled, animationDuration, hueRotateMotionValue])

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {/* Animated shadow layer */}
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${filterId}) blur(12px)` : 'none',
        }}
      >
        {animationEnabled && (
          <svg style={{ position: 'absolute' }}>
            <defs>
              <filter id={filterId}>
                <feTurbulence
                  result="undulation"
                  numOctaves={4}
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed={0}
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            backgroundColor: color,
            maskImage: `url('/textures/shadow-mask.png')`,
            WebkitMaskImage: `url('/textures/shadow-mask.png')`,
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            WebkitMaskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Noise overlay — uses project's existing grain pattern */}
      {noiseOverlay && (
        <>
          <div className="absolute inset-0 bg-noise-fine opacity-[0.18] mix-blend-soft-light" />
          <div className="absolute inset-0 bg-noise-coarse opacity-[0.06] mix-blend-overlay" />
        </>
      )}

      {/* Content */}
      {children && (
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  )
}
