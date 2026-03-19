import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#D47234',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path
            d="M10 2L1 20h3.5l1.8-4h7.4l1.8 4H19L10 2ZM7.6 13.5L10 7.2l2.4 6.3H7.6Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
