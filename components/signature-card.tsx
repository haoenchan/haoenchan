"use client"

import katex from "katex"
import "katex/dist/katex.min.css"
import { ParallaxTilt } from "@/components/effects/parallax-tilt"

export function SignatureCard() {
  const formulaHtml = katex.renderToString("F = k\\,\\frac{q_1\\, q_2}{r^{2}}", {
    displayMode: true,
    throwOnError: false,
  })

  return (
    <div className="signature-card-wrap">
      <ParallaxTilt max={6}>
        <div className="signature-card">
          <div className="signature-card__corner signature-card__corner--tl" />
          <div className="signature-card__corner signature-card__corner--tr" />
          <div className="signature-card__corner signature-card__corner--bl" />
          <div className="signature-card__corner signature-card__corner--br" />
          <div
            className="signature-card__formula"
            dangerouslySetInnerHTML={{ __html: formulaHtml }}
          />
          <div className="signature-card__tags">
            <span className="tag-tick">+q</span>
            <span className="tag-line" />
            <span className="tag-tick tag-tick--neg">−e</span>
          </div>
        </div>
      </ParallaxTilt>
    </div>
  )
}
