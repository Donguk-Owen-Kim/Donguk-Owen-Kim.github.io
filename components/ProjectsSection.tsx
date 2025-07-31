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
      title: "모바일 뱅킹 앱 리디자인",
      category: "UI/UX Design",
      description: "사용자 경험을 개선하여 거래 완료율을 40% 향상시킨 모바일 뱅킹 앱 리디자인 프로젝트",
      image: "https://readdy.ai/api/search-image?query=Modern%20mobile%20banking%20app%20interface%20design%2C%20clean%20UI%20elements%2C%20financial%20dashboard%2C%20transaction%20screens%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20banking%20design%2C%20user-friendly%20interface%2C%20mobile%20app%20mockup&width=800&height=600&seq=project-1&orientation=landscape",
      tags: ["Mobile Design", "Fintech", "User Research"],
      year: "2024"
    },
    {
      id: 2,
      title: "브랜드 아이덴티티 디자인",
      category: "Brand Identity",
      description: "스타트업 기업의 완전한 브랜드 아이덴티티를 구축하여 브랜드 인지도를 300% 증가시킨 프로젝트",
      image: "https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%2C%20logo%20variations%2C%20business%20cards%2C%20letterhead%2C%20brand%20guidelines%2C%20color%20palette%2C%20typography%20system%2C%20corporate%20branding%20materials%2C%20professional%20presentation&width=800&height=600&seq=project-2&orientation=landscape",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      year: "2024"
    },
    {
      id: 3,
      title: "E-커머스 웹사이트",
      category: "Web Development",
      description: "반응형 디자인과 직관적인 사용자 인터페이스로 온라인 매출을 250% 증가시킨 쇼핑몰 웹사이트",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%2C%20product%20showcase%2C%20shopping%20cart%20interface%2C%20clean%20layout%2C%20responsive%20design%2C%20online%20store%2C%20product%20gallery%2C%20user-friendly%20navigation%2C%20commercial%20website&width=800&height=600&seq=project-3&orientation=landscape",
      tags: ["Web Design", "E-commerce", "Responsive"],
      year: "2023"
    },
    {
      id: 4,
      title: "레스토랑 모바일 앱",
      category: "Mobile App",
      description: "음식 주문과 테이블 예약을 통합한 레스토랑 전용 모바일 앱으로 고객 만족도 95% 달성",
      image: "https://readdy.ai/api/search-image?query=Restaurant%20mobile%20app%20design%2C%20food%20ordering%20interface%2C%20menu%20display%2C%20table%20reservation%2C%20delivery%20tracking%2C%20food%20photography%2C%20warm%20colors%2C%20appetizing%20design%2C%20mobile%20app%20screens&width=800&height=600&seq=project-4&orientation=landscape",
      tags: ["Mobile App", "Food & Beverage", "UX"],
      year: "2023"
    },
    {
      id: 5,
      title: "기업 웹사이트 리뉴얼",
      category: "Corporate Website",
      description: "글로벌 IT 기업의 웹사이트를 리뉴얼하여 사용자 체류시간을 180% 증가시킨 프로젝트",
      image: "https://readdy.ai/api/search-image?query=Corporate%20website%20design%2C%20professional%20business%20layout%2C%20company%20information%2C%20services%20showcase%2C%20modern%20corporate%20identity%2C%20clean%20interface%2C%20business%20presentation%2C%20professional%20web%20design&width=800&height=600&seq=project-5&orientation=landscape",
      tags: ["Corporate", "Web Design", "UI/UX"],
      year: "2023"
    }
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
            다양한 프로젝트를 통해 쌓아온 경험과 성과를 확인해보세요
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
                            자세히 보기
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
            {currentProject + 1} / {projects.length} - 스크롤하여 다음 프로젝트 보기
          </p>
        </div>
      </div>
    </section>
  );
}