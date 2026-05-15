"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10)
    f()
    window.addEventListener("scroll", f, { passive: true })
    return () => window.removeEventListener("scroll", f)
  }, [])

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="logo">
          <span className="logo__word">Haoenchan</span>
          <span className="logo__underline" aria-hidden="true" />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/" className={`site-nav__link${pathname === "/" ? " is-active" : ""}`}>About</Link>
          <Link href="/blog" className={`site-nav__link${pathname === "/blog" || pathname?.startsWith("/blog/") ? " is-active" : ""}`}>Articles</Link>
        </nav>
        <button className="site-header__mobile" aria-label="Toggle navigation menu" onClick={() => setOpen(o => !o)}>
          <span className={`mobile-icon${open ? " is-open" : ""}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>
      <div className={`site-header__drawer${open ? " is-open" : ""}`}>
        <div className="site-header__drawer-inner">
          <Link href="/" onClick={() => setOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Articles</Link>
        </div>
      </div>
    </header>
  )
}
