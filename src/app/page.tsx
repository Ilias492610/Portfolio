import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { formatDate } from "@/lib/format";
import { getSortedPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getSortedPosts();
  const latestPost = posts[0];
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <section className="hero reveal">
        <p className="eyebrow">WPL Stageportfolio</p>
        <h1>
          Mijn stagejournaal als developer bij <span>TheValueChain</span>
        </h1>
        <p className="hero__text">
          Ik ben Ilias Hamdaoui. Op deze website deel ik wekelijks mijn voortgang,
          technische uitdagingen, lessons learned en momenten waar ik trots op ben.
        </p>
        <div className="hero__actions">
          <Link href="/blog" className="button button--primary">
            Bekijk blogposts
          </Link>
          <Link href="/about" className="button button--ghost">
            Over mij en mijn stage
          </Link>
        </div>
      </section>

      <section className="latest-post reveal" style={{ animationDelay: "120ms" }}>
        <div>
          <p className="eyebrow">Nieuwste blog</p>
          <h2>{latestPost.title}</h2>
          <p className="latest-post__meta">{formatDate(latestPost.date)}</p>
          <p>{latestPost.excerpt}</p>
          <Link href={`/blog/${latestPost.slug}`} className="inline-link">
            Lees de volledige post
          </Link>
        </div>
      </section>

      <section className="reveal" style={{ animationDelay: "180ms" }}>
        <div className="section-title-row">
          <h2>Recente highlights</h2>
          <Link href="/blog" className="inline-link">
            Alle posts
          </Link>
        </div>
        <div className="post-grid">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={index * 70} />
          ))}
        </div>
      </section>

      <section className="why reveal" style={{ animationDelay: "240ms" }}>
        <h2>Waarom dit portfolio?</h2>
        <ul>
          <li>Transparant overzicht voor mentor en stagebegeleider.</li>
          <li>Reflectie op code, samenwerking en professionele groei.</li>
          <li>Herbruikbaar als professioneel portfolio na mijn stage.</li>
        </ul>
      </section>
    </>
  );
}
