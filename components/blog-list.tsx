"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import type { BlogPost } from "@/lib/blog-data"
import { cn } from "@/lib/utils"

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

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-8">
      {/* Category filter */}
      <div className="filter-chips pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn("filter-chip", activeCategory === category && "is-active")}
          >
            {category}
            <span className="filter-chip__count">{counts[category] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* Posts */}
      <ol className="article-list article-list--numbered mt-4">
        {filteredPosts.map((post, index) => {
          const num = String(index + 1).padStart(2, "0")
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="article-row">
                <div className="article-row__num-col">
                  <span className="article-row__num"><em>{num}</em></span>
                </div>
                <div className="article-row__meta-col">
                  <span className={`article-row__cat article-row__cat--${post.category.toLowerCase()}`}>
                    {post.category}
                  </span>
                  <span className="article-row__sep">/</span>
                  <time className="article-row__date">{post.date}</time>
                  <span className="article-row__sep">/</span>
                  <span className="article-row__read">{post.readTime}</span>
                </div>
                <div className="article-row__body">
                  <h2 className="article-row__title">
                    <span>{post.title}</span>
                    <svg
                      className="article-row__arrow"
                      viewBox="0 0 24 24" width="16" height="16"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </h2>
                  <p className="article-row__excerpt">{post.excerpt}</p>
                </div>
                <span className="article-row__hover-rule" aria-hidden />
              </Link>
            </li>
          )
        })}
      </ol>

      {filteredPosts.length === 0 && (
        <p className="py-12 text-center text-muted-foreground italic">
          No posts in this category yet.
        </p>
      )}
    </section>
  )
}
