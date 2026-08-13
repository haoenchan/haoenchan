export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="hero__rule">
        <span className="hero__rule-line" />
      </div>
      <div className="site-footer__inner">
        <div className="site-footer__bottom">
          <span className="site-footer__copy">2026 Haoenchan. All rights reserved.</span>
          <nav className="site-footer__nav" aria-label="Footer">
            <a href="/">About</a>
            <a href="/blog">Articles</a>
            <a href="https://instagram.com/haoenphysics" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
