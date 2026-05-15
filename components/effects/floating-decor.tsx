"use client"

import { useMemo } from "react"

const ITEMS = [
  { kind: "planet", top: "9%",  left: "4%",   size: 64,  dur: 22, delay: 0,    tint: "var(--rainbow-sky)" },
  { kind: "orbit",  top: "22%", left: "92%",  size: 110, dur: 28, delay: 1.2,  tint: "var(--rainbow-purple)" },
  { kind: "atom",   top: "60%", left: "3%",   size: 80,  dur: 30, delay: 0.4,  tint: "var(--accent)" },
  { kind: "planet", top: "76%", left: "94%",  size: 50,  dur: 24, delay: 2.0,  tint: "var(--rainbow-orange)" },
  { kind: "star",   top: "14%", left: "30%",  size: 16,  dur: 6,  delay: 0.5,  tint: "var(--rainbow-yellow)" },
  { kind: "star",   top: "38%", left: "72%",  size: 12,  dur: 7,  delay: 1.8,  tint: "var(--rainbow-green)" },
  { kind: "star",   top: "68%", left: "20%",  size: 18,  dur: 8,  delay: 2.5,  tint: "var(--rainbow-red)" },
  { kind: "star",   top: "85%", left: "50%",  size: 10,  dur: 5,  delay: 0.2,  tint: "var(--rainbow-sky)" },
  { kind: "meteor", top: "44%", left: "88%",  size: 1,   dur: 32, delay: 0.9,  glyph: "∇·E" },
  { kind: "meteor", top: "30%", left: "8%",   size: 1,   dur: 36, delay: 3.0,  glyph: "Σk" },
  { kind: "orbit",  top: "92%", left: "10%",  size: 70,  dur: 26, delay: 1.5,  tint: "var(--rainbow-sky)" },
] as const

type Item = typeof ITEMS[number]

function PlanetSVG({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs>
        <radialGradient id={`pg${i}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="44" rx="38" ry="9" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" transform="rotate(-15 40 44)" />
      <circle cx="40" cy="40" r="20" fill={`url(#pg${i})`} stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.6" />
      <ellipse cx="40" cy="44" rx="38" ry="9" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8" strokeDasharray="2 3" transform="rotate(-15 40 44)" />
    </svg>
  )
}

function OrbitSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <ellipse cx="50" cy="50" rx="46" ry="28" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" transform="rotate(30 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="28" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.8" transform="rotate(-30 50 50)" />
      <circle cx="50" cy="50" r="4" fill="currentColor" fillOpacity="0.7" />
      <g className="orbit-dot">
        <circle cx="96" cy="50" r="2.4" fill="currentColor" />
      </g>
    </svg>
  )
}

function AtomSVG() {
  return (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <ellipse cx="40" cy="40" rx="34" ry="14" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" />
      <ellipse cx="40" cy="40" rx="34" ry="14" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(60 40 40)" />
      <ellipse cx="40" cy="40" rx="34" ry="14" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" transform="rotate(-60 40 40)" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
    </svg>
  )
}

function StarSVG() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M12 2l1.9 6.8L20.8 11l-6.9 2.2L12 22l-1.9-6.8L4.2 11l6.9-2.2L12 2z" fill="currentColor" fillOpacity="0.75" />
    </svg>
  )
}

function DecorItem({ it, i }: { it: Item; i: number }) {
  const style = {
    "--decor-top": it.top,
    "--decor-left": it.left,
    "--decor-size": `${it.size}px`,
    "--decor-dur": `${it.dur}s`,
    "--decor-delay": `${it.delay}s`,
    "--decor-tint": "tint" in it ? it.tint : "var(--primary)",
  } as React.CSSProperties

  return (
    <div className={`decor decor--${it.kind}`} style={style}>
      {it.kind === "planet" && <PlanetSVG i={i} />}
      {it.kind === "orbit" && <OrbitSVG />}
      {it.kind === "atom" && <AtomSVG />}
      {it.kind === "star" && <StarSVG />}
      {it.kind === "meteor" && <span>{"glyph" in it ? it.glyph : ""}</span>}
    </div>
  )
}

export function FloatingDecor({ density = "normal" }: { density?: "normal" | "sparse" }) {
  const visible = density === "sparse" ? ITEMS.filter((_, i) => i % 2 === 0) : ITEMS
  return (
    <div className="floating-decor" aria-hidden="true">
      {visible.map((it, i) => (
        <DecorItem key={i} it={it} i={i} />
      ))}
    </div>
  )
}
