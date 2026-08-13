import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog-data"
import { ArticleContent } from "@/components/article-content"
import { BackToTop } from "@/components/back-to-top"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} - Haoenchan`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="page md">
      <SiteHeader />

      <main className="main">
        <div className="article-shell">
          <div className="article-shell__back">
            <Link href="/blog" className="back-link">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to writing
            </Link>
          </div>

          <header className="article-header">
            <div className="article-header__meta">
              <span className={`article-header__cat article-header__cat--${post.category.toLowerCase()}`}>{post.category}</span>
              <span className="article-header__sep">/</span>
              <time className="article-header__date">{post.date}</time>
              <span className="article-header__sep">/</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="article-header__title">{post.title}</h1>
            <p className="article-header__excerpt">{post.excerpt}</p>
          </header>

          <div className="divider-fade" />

          <ArticleContent content={post.content} />

          <div className="divider-fade" />

          <div className="article-shell__footer">
            <Link href="/blog" className="back-link">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to writing
            </Link>
            <a
              href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://haoenchan.vercel.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-link"
            >
              Share on X
            </a>
          </div>
        </div>
      </main>

      <BackToTop />
      <SiteFooter />
    </div>
  )
}
