import Link from 'next/link';
import StudioClient from './StudioClient';
import {isSanityConfigured} from '../../sanity/env';

export const metadata = {
  title: 'Content Studio — Dong-Uk Kim',
  robots: {index: false, follow: false},
};

export default function StudioPage() {
  if (isSanityConfigured) return <StudioClient />;

  return (
    <main className="min-h-screen bg-[#f4f3ef] px-6 py-16 text-[#151515]">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl md:p-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff5c35]">One-time setup</p>
        <h1 className="mb-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">Connect your Content Studio</h1>
        <p className="mb-8 leading-7 text-black/60">
          The secure editor is installed, but it needs your Sanity project ID. Create a free Sanity project,
          then add the two variables below to Vercel. After the next deployment this page becomes your editor.
        </p>
        <ol className="mb-8 space-y-4 text-sm leading-6">
          <li><strong>1.</strong> Create a project at <a className="underline" href="https://www.sanity.io/manage" target="_blank" rel="noreferrer">sanity.io/manage</a>.</li>
          <li><strong>2.</strong> In Vercel → Settings → Environment Variables, add:</li>
        </ol>
        <pre className="mb-8 overflow-x-auto rounded-2xl bg-black p-5 text-xs leading-6 text-white"><code>{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}</code></pre>
        <p className="mb-8 text-sm leading-6 text-black/55">
          In Sanity → API → CORS origins, add <strong>https://www.donguk-kim.com</strong> with credentials enabled.
          Authentication is always handled by Sanity; the keyboard shortcut never bypasses login.
        </p>
        <Link href="/" className="button-pill">Back to portfolio</Link>
      </div>
    </main>
  );
}
