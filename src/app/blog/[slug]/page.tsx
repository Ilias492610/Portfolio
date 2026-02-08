import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/format";
import { getPostBySlug, posts } from "@/lib/posts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blogpost niet gevonden"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="blog-post reveal">
      <Link href="/blog" className="inline-link">
        ← Terug naar alle posts
      </Link>

      <p className="eyebrow">{formatDate(post.date)}</p>
      <h1>{post.title}</h1>
      <p className="blog-post__intro">{post.intro}</p>

      <div className="tag-list" aria-label="Tags van dit artikel">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="blog-post__content">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
