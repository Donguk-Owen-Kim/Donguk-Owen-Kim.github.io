'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Art&Tech Grad Show: The Film Series",
      category: "VIDEO EDITING",
      description: "Three video styles for promoting the graduation exhibition: PR, documentary, and vlog",
      image: "/images/id_1_preview.png",
      tags: ["Shooting", "Editing", "Promotion Video", "Documentary Video"],
      year: "2024"
    },
    {
      id: 2,
      title: "Rubik's WCA World Championship 2023",
      category: "GLOBAL EVENT BRANDING & PRODUCTION",
      description: "Organized and designed one of the most prestigious global competitions in the world of cubing",
      image: "/images/id_4_preview.png",
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2023"
    },
    {
      id: 3,
      title: "Air Force Band Annual Concert",
      category: "Event Design & Protocol Coordination",
      description: "Supported event logistics and visual design for the Air Force Band Annual Concert in partnership with the Eighth U.S. Army Band",
      image: "/images/id_5_preview.png",
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2022"
    },
    {
      id: 4,
      title: "8th National Pilot Contest in ADEX 2021",
      category: "EVENT DESIGN",
      description: "Planned and designed an Air Force experience program that allowed civilians to take part in a fighter jet pilot training simulation",
      image: "/images/id_6_preview.png",
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2021"
    },
  ];

  // 데스크톱 sticky 전환 로직 (모바일에선 hidden 처리하므로 영향 없음)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top <= 0 && rect.bottom >= vh) {
        const scrolled = Math.abs(rect.top);
        const total = rect.height - vh;
        const p = Math.max(0, Math.min(1, scrolled / total));
        const idx = Math.min(Math.floor(p * projects.length), projects.length - 1);
        setCurrentProject(idx);
        setProgress((p * projects.length) - Math.floor(p * projects.length));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

   return (
    <section id="projects" className="bg-gray-50">
      {/* ---------- 데스크톱: sticky 카드 전환 ---------- */}
      <div
        ref={containerRef}
        className="hidden lg:block"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col">
          {/* 헤더 */}
          <div className="text-center py-12 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-6">
              Take a scroll through the projects that shaped the journey.
            </p>
          </div>

          {/* 카드 영역 */}
          <div className="flex-1 relative overflow-hidden bg-gray-50">
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="w-full max-w-7xl mx-auto relative lg:h-[60vh]">
                {projects.map((p, i) => {
                  let translateX = 0, opacity = 0, scale = 0.95;
                  if (i === currentProject) {
                    translateX = progress * -100; opacity = 1 - progress * 0.3; scale = 1 - progress * 0.05;
                  } else if (i === currentProject + 1) {
                    translateX = 100 - progress * 100; opacity = progress * 0.7 + 0.3; scale = 0.95 + progress * 0.05;
                  } else { translateX = i < currentProject ? -100 : 100; }

                  return (
                    <div key={p.id}
                      className="absolute inset-0"
                      style={{ transform:`translateX(${translateX}%) scale(${scale})`, opacity,
                        transition:(i===currentProject||i===currentProject+1)?'none':'all .6s ease-out' }}>
                      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                        <div className="grid lg:grid-cols-2 h-full">
                          <div className="relative">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover xl:bg-black/5" />
                            <div className="absolute top-8 left-8">
                              <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">{p.year}</span>
                            </div>
                          </div>
                          <div className="p-8 lg:p-16 flex flex-col justify-center">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">{p.category}</span>
                            <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">{p.title}</h3>
                            <p className="text-gray-600 mb-8 text-lg lg:text-xl">{p.description}</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                              {p.tags.map((t, ti)=>(<span key={ti} className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm border border-blue-200">{t}</span>))}
                            </div>
                            <Link href={`/projects/${p.id}`} className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 w-fit">
                              About
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="bg-gray-50 py-8">
            <div className="flex justify-center gap-3 mb-4">
              {projects.map((_, i) => (
                <div key={i}
                  className={`h-2 rounded-full transition-all ${i===currentProject?'bg-blue-600 w-16':i<currentProject?'bg-blue-300 w-8':'bg-gray-300 w-6'}`} />
              ))}
            </div>
            <p className="text-center text-sm text-gray-500">
              {currentProject + 1} / {projects.length} - Scroll to next project
            </p>
          </div>
        </div>
      </div>

      {/* ---------- 모바일: 가로 스냅 리스트 ---------- */}
      <div className="lg:hidden container mx-auto px-6">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Swipe to explore the projects.</p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
             style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}>
          {projects.map((p)=>(
            <div key={p.id} className="snap-start shrink-0 w-[85%]">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid gap-0">
                  <div className="relative aspect-[16/10]">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">{p.year}</span>
                  </div>
                  <div className="p-6">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{p.title}</h3>
                    <p className="text-gray-600 mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t,ti)=>(<span key={ti} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border">{t}</span>))}
                    </div>
                    <Link href={`/projects/${p.id}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 min-w-[120px] text-center">
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}