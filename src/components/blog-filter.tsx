"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/blog-card";
import type { BlogPost } from "@/lib/posts";

const ALL_TAGS = "alle";

type BlogFilterProps = {
  posts: BlogPost[];
};

export function BlogFilter({ posts }: BlogFilterProps) {
  const [activeTag, setActiveTag] = useState(ALL_TAGS);

  const tags = useMemo(() => {
    const uniqueTags = new Set(posts.flatMap((post) => post.tags));
    return [ALL_TAGS, ...Array.from(uniqueTags)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeTag === ALL_TAGS) {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <section>
      <div className="tag-filter" aria-label="Filter blogposts op tag">
        {tags.map((tag) => {
          const isActive = tag === activeTag;

          return (
            <button
              type="button"
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`tag-filter__button ${isActive ? "is-active" : ""}`}
            >
              {tag === ALL_TAGS ? "Alle tags" : tag}
            </button>
          );
        })}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="empty-state">Geen blogposts gevonden voor deze tag.</p>
      ) : (
        <div className="post-grid">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={index * 60} />
          ))}
        </div>
      )}
    </section>
  );
}
