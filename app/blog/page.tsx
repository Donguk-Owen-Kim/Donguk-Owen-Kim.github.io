import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import { blogPosts } from '../../data/blogPosts';

export const metadata: Metadata = {
  title: "Blog — Dong-Uk Kim",
  description: "Notes, process, and research updates from Dong-Uk Kim.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-shell pb-24 pt-40 md:pb-36 md:pt-48">
        <div className="grid gap-12 border-b border-black/15 pb-16 md:grid-cols-[1fr_22rem] md:items-end">
          <div>
            <p className="section-kicker mb-8">Notes &amp; Fieldwork</p>
            <h1 className="section-heading">Blog</h1>
          </div>
          <p className="text-sm leading-6 text-black/55">
            Notes on HCI, accessibility, healthcare, making, and the process behind ongoing work.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="border-b border-black/15">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="grid gap-6 border-t border-black/15 py-10 md:grid-cols-[4rem_1fr_18rem_3rem] md:items-center">
                <span className="text-xs tabular-nums text-black/40">0{index + 1}</span>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.13em] text-black/45">
                    {post.category} · {post.publishedAt}
                  </p>
                  <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">{post.title}</h2>
                </div>
                <p className="text-sm leading-6 text-black/55">{post.excerpt}</p>
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-[40vh] place-items-center border-b border-black/15 text-center">
            <div>
              <p className="mb-3 text-sm font-medium">No posts published yet.</p>
              <p className="text-sm text-black/45">The first note will appear here.</p>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-8">
          <Link href="/#contact" className="button-pill">
            Contact <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </main>
    </div>
  );
}
