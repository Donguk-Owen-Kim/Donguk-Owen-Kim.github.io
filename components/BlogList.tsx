'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {blogPosts as fallbackPosts, type BlogPost} from '../data/blogPosts';
import {fetchPublished} from '../sanity/lib/client';
import {blogPostsQuery} from '../sanity/lib/queries';

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);

  useEffect(() => {
    fetchPublished<BlogPost[]>(blogPostsQuery).then((items) => {
      if (items?.length) setPosts(items);
    });
  }, []);

  if (!posts.length) {
    return (
      <div className="grid min-h-[40vh] place-items-center border-b border-black/15 text-center">
        <div>
          <p className="mb-3 text-sm font-medium">No posts published yet.</p>
          <p className="text-sm text-black/45">The first note will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-black/15">
      {posts.map((post, index) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
          <article className="grid gap-6 border-t border-black/15 py-10 md:grid-cols-[4rem_1fr_18rem_3rem] md:items-center">
            <span className="text-xs tabular-nums text-black/40">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.13em] text-black/45">{post.category} · {post.publishedAt}</p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] transition group-hover:text-[#ff5c35] md:text-5xl">{post.title}</h2>
            </div>
            <p className="text-sm leading-6 text-black/55">{post.excerpt}</p>
            <i className="ri-arrow-right-up-line text-2xl transition-transform group-hover:rotate-45"></i>
          </article>
        </Link>
      ))}
    </div>
  );
}
