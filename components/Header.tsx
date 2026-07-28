'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="site-shell mt-3 rounded-full border border-black/10 bg-[#f4f3ef]/85 px-5 py-3 backdrop-blur-xl md:mt-5 md:px-7">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="text-sm font-semibold tracking-[-0.02em]">
            Dong-Uk Kim <span className="text-[#ff5c35]">●</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {['home', 'publications', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="rounded-full px-4 py-2 text-sm text-black/60 transition hover:bg-black hover:text-white"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
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
          <div className="grid gap-1 border-t border-black/10 pt-3 md:hidden">
            {['home', 'publications', 'projects', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className="rounded-xl px-3 py-3 text-left text-sm hover:bg-black/5">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
