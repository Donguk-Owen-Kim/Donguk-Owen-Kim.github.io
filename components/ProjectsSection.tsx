'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      category: "EVENT DESIGN",
      description: "Supported event logistics and visual design for the Air Force Band Annual Concert in partnership with the Eighth U.S. Army Band",
      image: "/images/id_5_preview.png",
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2022"
    },
    {
      id: 4,
      title: "8th Citizen Pilot Program",
      category: "EVENT DESIGN",
      description: "Planned and designed an Air Force experience program that allowed civilians to take part in a fighter jet pilot training simulation",
      image: "/images/id_6_preview.png",
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2021"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 컨테이너가 화면에 완전히 들어왔을 때만 계산
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // 섹션 내에서의 스크롤 진행도 계산
        const sectionScrolled = Math.abs(rect.top);
        const totalSectionHeight = rect.height - windowHeight;
        const scrollProgress = Math.max(0, Math.min(1, sectionScrolled / totalSectionHeight));
        
        // 프로젝트별 구간 계산
        const projectIndex = Math.floor(scrollProgress * projects.length);
        const normalizedIndex = Math.min(projectIndex, projects.length - 1);
        
        // 각 프로젝트 구간 내에서의 진행도
        const projectProgress = (scrollProgress * projects.length) - projectIndex;
        
        setCurrentProject(normalizedIndex);
        setScrollProgress(Math.max(0, Math.min(1, projectProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section id="projects" className="bg-gray-50" ref={containerRef} style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col">
        {/* 제목 영역 */}
        <div className="text-center py-12 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-6">
            Take a scroll through the projects that shaped the journey.
          </p>
        </div>

        {/* 프로젝트 콘텐츠 영역 */}
        <div className="flex-1 relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-7xl mx-auto relative h-4/5">
              {projects.map((project, index) => {
                let translateX = 0;
                let opacity = 0;
                let scale = 0.95;

                if (index === currentProject) {
                  translateX = scrollProgress * -100;
                  opacity = 1 - scrollProgress * 0.3;
                  scale = 1 - scrollProgress * 0.05;
                } else if (index === currentProject + 1) {
                  translateX = 100 - scrollProgress * 100;
                  opacity = scrollProgress * 0.7 + 0.3;
                  scale = 0.95 + scrollProgress * 0.05;
                } else if (index < currentProject) {
                  translateX = -100;
                  opacity = 0;
                  scale = 0.95;
                } else {
                  translateX = 100;
                  opacity = 0;
                  scale = 0.95;
                }

                return (
                  <div
                    key={project.id}
                    className="absolute inset-0"
                    style={{
                      transform: `translateX(${translateX}%) scale(${scale})`,
                      opacity: opacity,
                      transition: index === currentProject || index === currentProject + 1 ? 'none' : 'all 0.6s ease-out',
                    }}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                      <div className="grid lg:grid-cols-2 gap-0 h-full">
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute top-8 left-8">
                            <span className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                              {project.year}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 lg:p-16 flex flex-col justify-center">
                          <div className="mb-8">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-10 leading-relaxed text-lg lg:text-xl">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mb-12">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-medium border border-blue-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            href={`/projects/${project.id}`}
                            className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium self-start cursor-pointer whitespace-nowrap shadow-lg text-lg"
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

        {/* 하단 네비게이션 */}
        <div className="bg-gray-50 py-8">
          <div className="flex justify-center gap-3 mb-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentProject 
                    ? 'bg-blue-600 w-16' 
                    : index < currentProject 
                      ? 'bg-blue-300 w-8' 
                      : 'bg-gray-300 w-6'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            {currentProject + 1} / {projects.length} - Scroll to next project
          </p>
        </div>
      </div>
    </section>
  );
}