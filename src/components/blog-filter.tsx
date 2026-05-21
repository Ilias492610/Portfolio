"use client";

import { useMemo, useState } from "react";

import { BlogContent } from "@/components/blog-content";
import { BlogCard } from "@/components/blog-card";
import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/lib/posts";

const ALL_TAGS = "alle";
const CARD_VIEW = "cards";
const FULL_VIEW = "full";

type BlogFilterProps = {
  posts: BlogPost[];
};

export function BlogFilter({ posts }: BlogFilterProps) {
  const [activeTag, setActiveTag] = useState(ALL_TAGS);
  const [viewMode, setViewMode] = useState(CARD_VIEW);

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
      <div className="blog-controls">
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

        <div className="view-toggle" aria-label="Kies blogweergave">
          <button
            type="button"
            onClick={() => setViewMode(CARD_VIEW)}
            className={`view-toggle__button ${viewMode === CARD_VIEW ? "is-active" : ""}`}
          >
            Kaarten
          </button>
          <button
            type="button"
            onClick={() => setViewMode(FULL_VIEW)}
            className={`view-toggle__button ${viewMode === FULL_VIEW ? "is-active" : ""}`}
          >
            Alles lezen
          </button>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="empty-state">Geen blogposts gevonden voor deze tag.</p>
      ) : viewMode === FULL_VIEW ? (
        <div className="full-post-list">
          {filteredPosts.map((post) => (
            <article className="blog-post blog-post--inline" key={post.slug}>
              <p className="eyebrow">{formatDate(post.date)}</p>
              <h2>{post.title}</h2>
              <p className="blog-post__intro">{post.intro}</p>
              <div className="tag-list">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag tag--solid">
                    {tag}
                  </span>
                ))}
              </div>
              <BlogContent content={post.content} />
            </article>
          ))}
        </div>
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
