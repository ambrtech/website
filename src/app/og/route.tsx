import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

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
          backgroundColor: '#F7F7F5',
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
              color: '#C8842F',
              letterSpacing: '0.12em',
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
              color: '#1C1C1A',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 24,
                color: '#5C5B56',
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
            color: '#8A8983',
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
