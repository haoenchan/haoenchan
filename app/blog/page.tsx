import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog-data"
import { BlogList } from "@/components/blog-list"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Articles - Haoenchan",
  description: "Articles on math and physics, problem solutions and handouts.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="page page--wide">
      <SiteHeader />

      <main className="main">
        <section className="page-header">
          <h1 className="page-header__title">Articles</h1>
          <p className="page-header__sub">
            {"Here are some articles I have written in my free time! If there are any errors you may contact me on my "}
            <a
              href="https://instagram.com/haoenphysics"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              Instagram
            </a>
          </p>
        </section>

        <div className="divider-fade" />

        <section className="articles-section">
          <BlogList posts={posts} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
