import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { getSortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <section className="blog-header reveal">
        <p className="eyebrow">Stageblog</p>
        <h1>Wekelijkse updates en lessons learned</h1>
        <p>Overzicht van mijn blogposts tijdens de stage.</p>
      </section>

      <section>
        <div className="post-grid">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={index * 60} />
          ))}
        </div>
      </section>
    </>
  );
}
