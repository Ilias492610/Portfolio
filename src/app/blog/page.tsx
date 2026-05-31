import type { Metadata } from "next";
import Image from "next/image";

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
        <div className="blog-header__layout">
          <Image
            src="/ilias-profile.jpg"
            alt="Ilias Hamdaoui"
            className="blog-header__image"
            width={120}
            height={120}
          />
          <div>
            <p className="eyebrow">Stageblog</p>
            <h1>Wekelijkse updates, code, fails en lessons learned</h1>
            <p>
              Mijn stage bij TheValueChain, van CPQ-training tot een BTP-app met
              CAP, Fiori, HANA, scheduling en notificaties. Je kan filteren op
              tags of alle posts volledig onder elkaar lezen.
            </p>
            <a
              href="https://www.linkedin.com/in/ilias-h-670a6a17a/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              LinkedIn-profiel
            </a>
          </div>
        </div>
      </section>

      <section>
        <BlogFilter posts={posts} />
      </section>
    </>
  );
}
