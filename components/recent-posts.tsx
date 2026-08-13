import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface RecentPostsProps {
  posts: BlogPost[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <ol className="md-index">
      {posts.map((post, index) => {
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
  )
}
