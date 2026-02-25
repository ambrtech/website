import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { brand } from '@/lib/tokens'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || 'Ambr AI'
  const subtitle = searchParams.get('subtitle') || ''

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: brand.colors.surface.DEFAULT,
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: brand.colors.accent.DEFAULT,
              letterSpacing: brand.letterSpacing.eyebrow,
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            Ambr AI
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 400,
              color: brand.colors.dark.DEFAULT,
              lineHeight: 1.15,
              letterSpacing: brand.letterSpacing.heading,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 24,
                color: brand.colors.copy.mid,
                fontFamily: 'sans-serif',
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: 20,
            color: brand.colors.copy.light,
            fontFamily: 'sans-serif',
          }}
        >
          ambr.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
