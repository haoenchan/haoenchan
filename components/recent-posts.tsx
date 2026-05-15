import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface RecentPostsProps {
  posts: BlogPost[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <ol className="article-list mt-6">
      {posts.map((post, index) => {
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
                <h3 className="article-row__title">
                  <span>{post.title}</span>
                  <svg
                    className="article-row__arrow"
                    viewBox="0 0 24 24" width="16" height="16"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </h3>
                <p className="article-row__excerpt">{post.excerpt}</p>
              </div>
              <span className="article-row__hover-rule" aria-hidden />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
