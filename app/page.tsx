import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog-data"
import { RecentPosts } from "@/components/recent-posts"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const recentPosts = [...getAllPosts()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="page md">
      <SiteHeader />

      <main className="main">
        {/* Hero */}
        <section className="md-hero md-wrap">
          <a
            href="https://instagram.com/haoenphysics"
            target="_blank"
            rel="noopener noreferrer"
            className="md-hero__avatar"
            aria-label="haoenphysics on Instagram"
          >
            <Image src="/images/haoen-v2.jpg" alt="Haoen" width={136} height={136} priority />
          </a>

          <span className="md-hero__eyebrow">Math &amp; Physics</span>

          <h1 className="md-hero__title">Haoen</h1>

          <p className="md-hero__bio">
            {"Hi! I'm Haoen and I am interested in physics and a bit of math. Here, I will post some of my own articles including my own solutions to some problems and also some handouts."}
          </p>

          <p className="md-hero__note">
            {"If you're wondering, this webpage is hosted by an AI web builder, as I have no clue on how to code (yet). The articles are entirely written by me and uploaded onto this page by Claude!"}
          </p>

          <div className="md-hero__actions">
            <Link href="/blog" className="md-btn">
              <span>Read all articles</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://instagram.com/haoenphysics"
              target="_blank"
              rel="noopener noreferrer"
              className="md-link"
            >
              Instagram
            </a>
          </div>
        </section>

        {/* Recent */}
        <section className="md-section md-wrap">
          <div className="md-section__head">
            <h2 className="md-section__title">Recent</h2>
            <Link href="/blog" className="md-section__link">
              <span>View all</span>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <RecentPosts posts={recentPosts} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
