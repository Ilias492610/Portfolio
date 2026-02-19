import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

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

const getBlocks = (content: string) => {
  return content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
};

const looksLikeHeading = (block: string) => {
  const words = block.split(/\s+/).length;
  return words <= 5 && block.length <= 44 && !/[.:!?]/.test(block);
};

const looksLikeListItem = (block: string) => {
  const words = block.split(/\s+/).length;
  return words >= 1 && words <= 6 && block.length <= 48 && !/[.:!?]$/.test(block);
};

const renderContent = (content: string) => {
  const blocks = getBlocks(content);
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    const nextBlock = blocks[index + 1];

    if (block.endsWith(":") && nextBlock && looksLikeListItem(nextBlock)) {
      const items: string[] = [];
      let cursor = index + 1;

      while (cursor < blocks.length && looksLikeListItem(blocks[cursor])) {
        items.push(blocks[cursor]);
        cursor += 1;
      }

      nodes.push(
        <div className="blog-post__list-block" key={`list-${index}`}>
          <p className="blog-post__list-intro">{block}</p>
          <ul className="blog-post__list">
            {items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        </div>
      );

      index = cursor;
      continue;
    }

    if (looksLikeHeading(block)) {
      nodes.push(
        <h2 className="blog-post__section-title" key={`heading-${index}`}>
          {block}
        </h2>
      );
    } else {
      nodes.push(
        <p className="blog-post__paragraph" key={`paragraph-${index}`}>
          {block}
        </p>
      );
    }

    index += 1;
  }

  return nodes;
};

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

      <div className="blog-post__content">{renderContent(post.content)}</div>
    </article>
  );
}
