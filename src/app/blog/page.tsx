import type { Metadata } from "next";

import { BlogFilter } from "@/components/blog-filter";
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
        <h1>Wekelijkse updates, wins en lessons learned</h1>
        <p>
          Filter posts op tags zoals <strong>code</strong>, <strong>reflectie</strong>,
          <strong> wins</strong> of <strong>teambuilding</strong>.
        </p>
      </section>

      <BlogFilter posts={posts} />
    </>
  );
}
