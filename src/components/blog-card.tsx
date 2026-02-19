import Link from "next/link";

import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/lib/posts";

type BlogCardProps = {
  post: BlogPost;
  delay?: number;
};

export function BlogCard({ post, delay = 0 }: BlogCardProps) {
  return (
    <article className="post-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <div className="post-card__meta">
        <span>{formatDate(post.date)}</span>
      </div>

      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="inline-link">
        Lees blogpost
      </Link>
    </article>
  );
}
