import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import BlogList from '../../components/BlogList';

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

        <BlogList />

        <div className="flex justify-end pt-8">
          <Link href="/#contact" className="button-pill">
            Contact <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </main>
    </div>
  );
}
