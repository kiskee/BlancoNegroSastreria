import { ImageResponse } from 'next/og'

export const alt = 'Blanco y Negro Sastrería — Trajes a la medida en Envigado'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 90,
              height: 2,
              backgroundColor: '#a855f7',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 10,
              color: '#c4b5fd',
              margin: '0 24px',
            }}
          >
            SASTRERÍA
          </div>
          <div
            style={{
              width: 90,
              height: 2,
              backgroundColor: '#a855f7',
              opacity: 0.6,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 36,
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 300 }}>Blanco &amp; Negro</div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 300,
              color: '#c4b5fd',
              marginTop: 16,
            }}
          >
            Trajes a la medida
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 48,
          }}
        >
          Envigado, Antioquia
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
