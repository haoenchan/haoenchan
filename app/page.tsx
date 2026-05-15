import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog-data"
import { RecentPosts } from "@/components/recent-posts"
import { MagneticHover } from "@/components/effects/magnetic-hover"
import { SignatureCard } from "@/components/signature-card"
import { FloatingDecor } from "@/components/effects/floating-decor"
import { BlackHole } from "@/components/effects/black-hole"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="page page--wide">
      {/* Black hole background */}
      <div className="black-hole-host" aria-hidden="true">
        <BlackHole opacity={0.9} />
      </div>

      {/* Floating decorations */}
      <FloatingDecor />

      <SiteHeader />

      <main className="main">
        {/* Hero — centered with avatar */}
        <section className="hero hero--centered">
          <div className="hero__glow hero__glow--a" aria-hidden="true" />
          <div className="hero__glow hero__glow--b" aria-hidden="true" />

          <div className="hero__grid">
            <div className="hero__lead hero__lead--centered">
              {/* Avatar */}
              <div className="hero__avatar-wrap animate-fade-in">
                <a
                  href="https://instagram.com/haoenphysics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__avatar"
                  aria-label="haoenphysics on Instagram"
                >
                  <span className="hero__avatar-ring" aria-hidden="true" />
                  <Image
                    src="/images/haoen-v2.jpg"
                    alt="Haoen"
                    width={200}
                    height={200}
                    priority
                    style={{ objectFit: "cover", objectPosition: "center 18%" }}
                  />
                  <span className="hero__avatar-status" aria-hidden="true" />
                </a>
              </div>

              {/* Chip */}
              <div className="chip animate-fade-in">
                <span className="sparkle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l1.9 5.8L19.8 11l-5.9 2.2L12 19l-1.9-5.8L4.2 11l5.9-2.2L12 3z" />
                  </svg>
                </span>
                <span>Math &amp; Physics</span>
              </div>

              {/* Heading */}
              <h1 className="hero__title">
                <span className="hero__title-line animate-fade-in-up">About </span>
                <span className="hero__title-line hero__title-line--accent animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  <em className="text-rainbow text-rainbow--rotating">Me</em>
                </span>
              </h1>

              {/* Lead text */}
              <p className="hero__lead-text animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                {"Hi! I'm Haoen and I am interested in physics and a bit of math. Here, I will post some of my own articles including my own solutions to some problems and also some handouts."}
              </p>

              {/* CTA */}
              <div className="hero__cta-row animate-fade-in-up" style={{ animationDelay: "450ms" }}>
                <MagneticHover strength={0.18} radius={140}>
                  <Link href="/blog" className="cta-pill">
                    <span>Read all articles</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                    <span className="cta-pill__shimmer" aria-hidden="true" />
                  </Link>
                </MagneticHover>
              </div>
            </div>

            <SignatureCard />
          </div>
        </section>

        {/* Divider */}
        <div className="divider-fade" />

        {/* Recent Writing */}
        <section className="recent">
          <div className="section-head">
            <h2 className="recent__title">Recent Articles</h2>
            <Link href="/blog" className="recent__viewall">
              <span>View all</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="recent__sub">{"Here are some of the articles I have recently written in my free time! :pp"}</p>
          </div>
          <RecentPosts posts={recentPosts} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
