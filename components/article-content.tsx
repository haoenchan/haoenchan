"use client"

import katex from "katex"
import "katex/dist/katex.min.css"
import { useEffect, useRef, useState } from "react"

interface ArticleContentProps {
  content: string
}

function renderMath(text: string): string {
  let result = text.replace(/\$\$([^$]+?)\$\$/g, (_, math) => {
    try { return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false }) }
    catch { return math }
  })
  result = result.replace(/\$([^$]+?)\$/g, (_, math) => {
    try { return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false }) }
    catch { return math }
  })
  return result
}

function RichText({ text }: { text: string }) {
  const html = renderMath(
    text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  )
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); o.disconnect() } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    o.observe(el)
    return () => o.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      willChange: "opacity, transform",
    }}>
      {children}
    </div>
  )
}

export function ArticleContent({ content }: ArticleContentProps) {
  const blocks = content.split("\n\n")

  return (
    <article className="article-body">
      <div className="article-body__flow">
        {blocks.map((block, i) => {
          const trimmed = block.trim()
          if (!trimmed) return null

          if (trimmed.startsWith("### ")) {
            return (
              <Reveal key={i} y={16}>
                <h3 className="article-body__h3"><RichText text={trimmed.replace("### ", "")} /></h3>
              </Reveal>
            )
          }
          if (trimmed.startsWith("## ")) {
            return (
              <Reveal key={i} y={16}>
                <h2 className="article-body__h2"><RichText text={trimmed.replace("## ", "")} /></h2>
              </Reveal>
            )
          }
          if (trimmed.startsWith("#### ")) {
            return (
              <Reveal key={i} y={16}>
                <h4 className="article-body__h4"><RichText text={trimmed.replace("#### ", "")} /></h4>
              </Reveal>
            )
          }
          if (trimmed.startsWith("$$") && trimmed.endsWith("$$")) {
            const math = trimmed.slice(2, -2).trim()
            try {
              const html = katex.renderToString(math, { displayMode: true, throwOnError: false })
              return (
                <Reveal key={i} delay={50} y={16}>
                  <div className="article-body__math" dangerouslySetInnerHTML={{ __html: html }} />
                </Reveal>
              )
            } catch {
              return <Reveal key={i}><p className="article-body__p">{math}</p></Reveal>
            }
          }
          if (trimmed.startsWith("- ")) {
            const items = trimmed.split("\n").filter(l => l.startsWith("- ")).map(l => l.slice(2))
            return (
              <Reveal key={i}>
                <ul className="article-body__ul">
                  {items.map((it, j) => <li key={j}><RichText text={it} /></li>)}
                </ul>
              </Reveal>
            )
          }
          if (/^\d+\.\s/.test(trimmed)) {
            const items = trimmed.split("\n").filter(l => /^\d+\.\s/.test(l)).map(l => l.replace(/^\d+\.\s+/, ""))
            return (
              <Reveal key={i}>
                <ol className="article-body__ol">
                  {items.map((it, j) => <li key={j}><RichText text={it} /></li>)}
                </ol>
              </Reveal>
            )
          }
          if (trimmed.startsWith("<")) {
            const html = renderMath(trimmed)
            return (
              <Reveal key={i} y={16}>
                <div className="article-body__figure" dangerouslySetInnerHTML={{ __html: html }} />
              </Reveal>
            )
          }
          return (
            <Reveal key={i}>
              <p className="article-body__p"><RichText text={trimmed} /></p>
            </Reveal>
          )
        })}
      </div>
    </article>
  )
}
