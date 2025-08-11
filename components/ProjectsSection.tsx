'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const navigatingRef = useRef(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const projects = [
    {
      id: 1,
      title: 'Art&Tech Grad Show: The Film Series',
      category: 'VIDEO EDITING',
      description:
        'Three video styles for promoting the graduation exhibition: PR, documentary, and vlog',
      image: '/images/id_1_preview.png',
      tags: ['Shooting', 'Editing', 'Promotion Video', 'Documentary Video'],
      year: '2024',
    },
    {
      id: 2,
      title: "Rubik's WCA World Championship 2023",
      category: 'GLOBAL EVENT BRANDING & PRODUCTION',
      description:
        'Organized and designed one of the most prestigious global competitions in the world of cubing',
      image: '/images/id_4_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2023',
    },
    {
      id: 3,
      title: 'Air Force Band Annual Concert',
      category: 'Event Design & Protocol Coordination',
      description:
        'Supported event logistics and visual design for the Air Force Band Annual Concert in partnership with the Eighth U.S. Army Band',
      image: '/images/id_5_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2022',
    },
    {
      id: 4,
      title: '8th National Pilot Contest in ADEX 2021',
      category: 'EVENT DESIGN',
      description:
        'Planned and designed an Air Force experience program that allowed civilians to take part in a fighter jet pilot training simulation',
      image: '/images/id_6_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2021',
    },
  ];

  // 섹션 전체 높이 = N*vh - (N-1)*(헤더+푸터)  → 마지막 빈 여백 제거
  const recalcHeight = () => {
    const N = projects.length;
    const vh = window.innerHeight;
    const headerH = headerRef.current?.offsetHeight ?? 0;
    const footerH = footerRef.current?.offsetHeight ?? 0;
    const H = N * vh - (N - 1) * (headerH + footerH);
    setContainerHeight(Math.max(1, Math.round(H)));
  };

  // 카드 위치로 부드럽게 스냅
  const snapToProject = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const total = projects.length;
    const clamped = Math.max(0, Math.min(total - 1, idx));
    const startY = el.offsetTop;
    const targetY = startY + clamped * window.innerHeight + 2;
    navigatingRef.current = true;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setTimeout(() => (navigatingRef.current = false), 500);
  };

  // sticky 전환/인디케이터 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top <= 0 && rect.bottom >= vh) {
        const scrolled = Math.abs(rect.top);
        const total = rect.height - vh;
        const p = Math.max(0, Math.min(1, scrolled / total));
        const idx = Math.min(Math.floor(p * projects.length), projects.length - 1);
        setCurrentProject(idx);
        setProgress(p * projects.length - Math.floor(p * projects.length));
      }
    };

    const onWheel = (e: WheelEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const inViewport = rect.top <= vh && rect.bottom >= 0;
      if (!inViewport) return;

      // 수평 제스처일 때만 기본 스크롤 억제하고 카드 스냅
      if (Math.abs(e.deltaX) > 10 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (!navigatingRef.current) {
          snapToProject(e.deltaX > 0 ? currentProject + 1 : currentProject - 1);
        }
      }
    };

    const onKey = (e: KeyboardEvent) => {
      const el = containerRef.current;
      if (!el || navigatingRef.current) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const inViewport = rect.top <= vh && rect.bottom >= 0;
      if (!inViewport) return;

      if (e.key === 'ArrowRight') snapToProject(currentProject + 1);
      if (e.key === 'ArrowLeft') snapToProject(currentProject - 1);
    };

    recalcHeight();
    window.addEventListener('resize', recalcHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // wheel은 섹션 요소에만 등록 (전체 페이지 스크롤 방지하지 않도록)
    const el = containerRef.current;
    el?.addEventListener('wheel', onWheel, { passive: false });

    window.addEventListener('keydown', onKey);
    handleScroll();

    return () => {
      window.removeEventListener('resize', recalcHeight);
      window.removeEventListener('scroll', handleScroll);
      el?.removeEventListener('wheel', onWheel as any);
      window.removeEventListener('keydown', onKey);
    };
  }, [currentProject, projects.length]);

  return (
    <section id="projects" className="bg-gray-50">
      {/* 데스크톱: sticky 카드 전환 */}
      <div ref={containerRef} className="hidden lg:block" style={{ height: containerHeight }}>
        <div className="sticky top-0 h-screen flex flex-col">
          {/* 헤더 */}
          <div ref={headerRef} className="text-center py-12 bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-6">
              Take a scroll through the projects that shaped the journey.
            </p>
          </div>

          {/* 카드 영역 */}
          <div className="flex-1 relative overflow-hidden bg-gray-50">
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="w-full max-w-5xl mx-auto relative lg:min-h-[560px] lg:h-[clamp(560px,64vh,780px)] 2xl:h-auto">
                {projects.map((p, i) => {
                  let translateX = 0,
                    opacity = 0,
                    scale = 0.95;
                  if (i === currentProject) {
                    translateX = progress * -100;
                    opacity = 1 - progress * 0.3;
                    scale = 1 - progress * 0.05;
                  } else if (i === currentProject + 1) {
                    translateX = 100 - progress * 100;
                    opacity = progress * 0.7 + 0.3;
                    scale = 0.95 + progress * 0.05;
                  } else {
                    translateX = i < currentProject ? -100 : 100;
                  }

                  return (
                    <div
                      key={p.id}
                      className="absolute inset-0"
                      style={{
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        opacity,
                        transition:
                          i === currentProject || i === currentProject + 1 ? 'none' : 'all .6s ease-out',
                      }}
                    >
                      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                        <div className="grid lg:grid-cols-2 h-full">
                          {/* 이미지 */}
                          <div className="relative">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center" />
                            <div className="absolute top-8 left-8">
                              <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
                                {p.year}
                              </span>
                            </div>
                          </div>

                          {/* 텍스트 (많을 때만 해당 영역 스크롤) */}
                          <div className="p-8 lg:p-12 2xl:p-10 flex flex-col justify-center overflow-y-auto pr-2">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-3">
                              {p.category}
                            </span>
                            <h3 className="text-3xl lg:text-5xl 2xl:text-4xl font-bold text-gray-900 mb-5">
                              {p.title}
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg lg:text-xl 2xl:text-lg">{p.description}</p>
                            <div className="flex flex-wrap gap-2.5 mb-6">
                              {p.tags.map((t, ti) => (
                                <span
                                  key={ti}
                                  className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm border border-blue-200"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={`/projects/${p.id}`}
                              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 w-fit text-sm"
                            >
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
          <div ref={footerRef} className="bg-gray-50 py-8">
            <div className="flex justify-center gap-3 mb-4">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === currentProject ? 'bg-blue-600 w-16' : i < currentProject ? 'bg-blue-300 w-8' : 'bg-gray-300 w-6'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-500">
              {currentProject + 1} / {projects.length} - Scroll to next project
            </p>
          </div>
        </div>
      </div>

      {/* 모바일: 가로 스냅 리스트 */}
      <div className="lg:hidden container mx-auto px-6">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Swipe to explore the projects.</p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[85%]">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid gap-0">
                  <div className="relative aspect-[16/10]">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {p.year}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{p.title}</h3>
                    <p className="text-gray-600 mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t, ti) => (
                        <span key={ti} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs border">
                          {t}
                        </span>
                      ))}
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
