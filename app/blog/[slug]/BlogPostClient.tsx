'use client';

import Link from 'next/link';
import {PortableText} from '@portabletext/react';
import {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import {fetchPublished} from '../../../sanity/lib/client';
import {blogPostQuery} from '../../../sanity/lib/queries';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  body: any[];
};

export default function BlogPostClient({slug}: {slug: string}) {
  const [post, setPost] = useState<Post | null | undefined>(undefined);

  useEffect(() => {
    fetchPublished<Post>(blogPostQuery, {slug}).then(setPost);
  }, [slug]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-shell pb-24 pt-40 md:pb-36 md:pt-48">
        {post === undefined ? (
          <p className="min-h-[50vh] text-sm text-black/45">Loading post…</p>
        ) : post ? (
          <article className="mx-auto max-w-3xl">
            <p className="section-kicker mb-8">{post.category} · {post.publishedAt}</p>
            <h1 className="mb-8 text-[clamp(3.4rem,8vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]">{post.title}</h1>
            <p className="mb-14 border-b border-black/15 pb-10 text-xl leading-8 text-black/60">{post.excerpt}</p>
            <div className="prose prose-lg max-w-none leading-8">
              <PortableText value={post.body} />
            </div>
          </article>
        ) : (
          <div className="min-h-[50vh]">
            <h1 className="mb-5 text-5xl font-medium tracking-[-0.05em]">Post not found</h1>
            <p className="text-black/55">This post may still be a draft.</p>
          </div>
        )}
        <div className="mt-16 border-t border-black/15 pt-8">
          <Link href="/blog" className="button-pill">Back to blog</Link>
        </div>
      </main>
    </div>
  );
}
