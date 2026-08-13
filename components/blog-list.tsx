"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogListProps {
  posts: BlogPost[]
}

const categories = ["All", "Math", "Physics", "Misc"]

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: posts.length }
    for (const post of posts) {
      map[post.category] = (map[post.category] ?? 0) + 1
    }
    return map
  }, [posts])

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  )

  const filteredPosts =
    activeCategory === "All"
      ? sorted
      : sorted.filter((post) => post.category === activeCategory)

  return (
    <>
      <div className="md-filters" role="tablist" aria-label="Categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`md-filter${activeCategory === category ? " is-active" : ""}`}
          >
            <span>{category}</span>
            <span className="md-filter__count">{counts[category] ?? 0}</span>
          </button>
        ))}
      </div>

      <ol className="md-index">
        {filteredPosts.map((post, index) => {
          const num = String(index + 1).padStart(2, "0")
          return (
            <li key={post.slug} className="md-index__row">
              <Link href={`/blog/${post.slug}`} className="md-row">
                <span className="md-row__num">{num}</span>
                <div className="md-row__main">
                  <h3 className="md-row__title">
                    <span>{post.title}</span>
                    <svg
                      className="md-row__arrow"
                      viewBox="0 0 24 24" width="15" height="15"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </h3>
                  <p className="md-row__excerpt">{post.excerpt}</p>
                </div>
                <div className="md-row__meta">
                  <span className="md-row__cat">{post.category}</span>
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}
