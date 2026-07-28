'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { label: 'Home', href: '/#home' },
    { label: 'Publications', href: '/#publications' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`site-shell mt-3 border border-black/10 bg-[#f4f3ef]/90 px-5 py-3 shadow-[0_10px_40px_rgba(21,21,21,0.04)] backdrop-blur-xl transition-[border-radius] md:mt-5 md:rounded-full md:px-7 ${
          isOpen ? 'rounded-[1.75rem]' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-[-0.02em]">
            Dong-Uk Kim <span className="text-[#ff5c35]">●</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-black/60 transition hover:bg-black hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="h-9 w-9 rounded-full border border-black/15 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>
        {isOpen && (
          <div className="mt-3 grid gap-1 border-t border-black/10 pt-3 md:hidden">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-2xl px-3 py-3 text-base transition hover:bg-black hover:text-white"
              >
                <span>{item.label}</span>
                <span className="text-xs tabular-nums opacity-40">0{index + 1}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
