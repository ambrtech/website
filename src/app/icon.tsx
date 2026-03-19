import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const aMarkPath = join(process.cwd(), 'public', 'ambr', 'a-mark-white.png')
  const aMarkBase64 = readFileSync(aMarkPath).toString('base64')
  const aMarkSrc = `data:image/png;base64,${aMarkBase64}`

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={aMarkSrc}
          alt=""
          width={22}
          height={24}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  )
}
