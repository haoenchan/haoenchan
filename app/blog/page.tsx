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
    <div className="page md">
      <SiteHeader />

      <main className="main">
        <section className="md-pagehead md-wrap">
          <h1 className="md-pagehead__title">Articles</h1>
          <p className="md-pagehead__sub">
            {"Here are some articles I have written in my free time! If there are any errors you may contact me on my "}
            <a
              href="https://instagram.com/haoenphysics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </section>

        <section className="md-section md-wrap">
          <BlogList posts={posts} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
