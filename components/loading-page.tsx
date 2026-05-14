'use client'

import { useEffect, useState } from 'react'

const PIXEL_SIZE = 10

const colorMap: Record<number, string> = {
  0: 'transparent',
  1: '#f0f4f8',   // hair highlight
  2: '#c8d3de',   // hair main
  3: '#fde8cc',   // skin light
  4: '#f0b07a',   // skin shadow
  5: '#1e2d3d',   // dark (eyes, outline)
  6: '#6b7280',   // eyebrow
  7: '#b0bec5',   // mustache
  8: '#f87171',   // tongue
  9: '#475569',   // jacket (slate-600, visible on dark bg)
  10: '#f8fafc',  // collar / shirt white
  11: '#ffffff',  // eye white
  12: '#dc2626',  // tie red
}

const faceOpen: number[][] = [
  // Hair
  [0,0,0,1,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0],
  [0,0,1,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0],
  [0,1,2,2,2,1,2,2,2,2,2,2,1,2,2,1,0,0,0,0],
  [0,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,0,0,0],
  // Forehead
  [0,2,2,2,2,3,3,3,3,3,3,3,3,3,2,2,2,0,0,0],
  [0,2,2,2,3,3,3,3,3,3,3,3,3,3,3,2,2,0,0,0],
  [0,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,0,0],
  [0,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,0,0],
  // Eye socket shadow
  [0,2,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,2,0,0],
  // Eyebrows
  [0,0,3,6,6,6,3,3,3,3,3,3,6,6,6,3,3,0,0,0],
  // Eyes open
  [0,0,3,5,11,11,5,3,3,3,3,3,5,11,11,5,3,0,0,0],
  [0,0,3,5,11,5,5,3,3,3,3,3,5,5,11,5,3,0,0,0],
  // Under eyes
  [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
  // Nose
  [0,0,2,3,3,3,3,3,3,4,4,3,3,3,3,3,2,0,0,0],
  [0,0,2,3,3,3,3,3,4,4,4,4,3,3,3,3,2,0,0,0],
  [0,0,2,3,3,3,3,3,3,4,4,3,3,3,3,3,2,0,0,0],
  // Mustache
  [0,0,2,7,7,7,7,7,7,7,7,7,7,7,7,7,2,0,0,0],
  [0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0],
  // Tongue out
  [0,0,0,3,3,3,8,8,8,8,8,8,3,3,3,3,0,0,0,0],
  [0,0,0,3,3,3,8,8,8,8,8,8,3,3,3,0,0,0,0,0],
  // Chin
  [0,0,0,0,3,3,3,3,4,4,4,3,3,3,0,0,0,0,0,0],
  // Neck
  [0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0],
  // Collar with red tie
  [0,0,9,10,10,10,9,9,9,12,12,9,10,10,10,9,9,0,0,0],
  // Jacket upper + tie
  [0,9,9,9,9,9,9,9,9,12,12,9,9,9,9,9,9,9,0,0],
  // Jacket full + tie continues
  [9,9,9,9,9,9,9,9,9,12,12,9,9,9,9,9,9,9,9,9],
  // Jacket base
  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
]

const faceBlink: number[][] = faceOpen.map((row, i) => {
  if (i === 10) return [0,0,3,3,5,5,5,3,3,3,3,3,5,5,5,3,3,0,0,0]
  if (i === 11) return [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0]
  return row
})

const EQUATIONS = [
  { text: 'E = mc²',       left: '7%',  top: '11%' },
  { text: 'F = ma',        left: '74%', top: '17%' },
  { text: 'λ = h/p',       left: '14%', top: '71%' },
  { text: 'Δx·Δp ≥ ℏ/2',  left: '66%', top: '64%' },
  { text: '∇·B = 0',       left: '4%',  top: '40%' },
  { text: 'G_μν = 8πT_μν', left: '70%', top: '41%' },
]

export function LoadingPage() {
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 150)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  const frame = blink ? faceBlink : faceOpen
  const ROWS = faceOpen.length

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a] overflow-hidden">
      {/* Floating equations */}
      {EQUATIONS.map((eq, i) => (
        <span
          key={i}
          className="absolute font-mono pointer-events-none select-none text-indigo-400/40 text-sm"
          style={{
            left: eq.left,
            top: eq.top,
            animation: `floatEq ${5 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {eq.text}
        </span>
      ))}

      {/* Pixel Einstein */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(20, ${PIXEL_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${PIXEL_SIZE}px)`,
          imageRendering: 'pixelated',
          animation: 'floatBob 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.3))',
        }}
      >
        {frame.flat().map((pixel, i) => (
          <div
            key={i}
            style={{
              width: PIXEL_SIZE,
              height: PIXEL_SIZE,
              backgroundColor: colorMap[pixel] ?? 'transparent',
            }}
          />
        ))}
      </div>

      <p
        className="mt-6 font-mono text-slate-500 text-xs tracking-[0.4em] uppercase"
        style={{ animation: 'pulse 2s ease-in-out infinite' }}
      >
        Loading...
      </p>

      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatEq {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          33% { transform: translateY(-8px) rotate(1deg); opacity: 0.7; }
          66% { transform: translateY(5px) rotate(-1deg); opacity: 0.3; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  )
}
