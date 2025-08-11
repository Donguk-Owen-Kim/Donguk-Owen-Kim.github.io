'use client';

import { useState, useRef, useEffect } from 'react';

export default function PublicationSection() {
  const [currentPublication, setCurrentPublication] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const publications = [
    {
      id: 1,
      title: "Design Guidelines for Pediatric Care Assistive Content to Alleviate Psychological Anxiety in Young Patients",
      journal: "Journal of the HCI Society of Korea",
      description: <><br /> <strong>Dong-Uk Kim</strong>, Yejin Jang, Hye-Young Jo, Yoonji Kim <em>This paper is written in Korean.</em></>,
      image: "/images/HCIK.png",
      tags: ["Content Design Guideline", "Assistive technology", "Healthcare"],
      year: "2025",
      type: "Research Paper",
      doiLink: "https://doi.org/10.17210/jhsk.2025.06.20.2.43",
      pdfLink: "https://drive.google.com/file/d/16YWEFCsMrEOncnXBZ-dBcJ7h7VSP0Rq2/view?usp=sharing"
    },
    {
      id: 2,
      title: "TrainerTap: Weightlifting Support System Prototype Simulating Personal Trainer's Tactile and Auditory Guidance",
      journal: "UIST'23 Adjunct",
      description: <><br /> Hye-Young Jo, Chan Hu Wie, Yejin Jang, <strong>Dong-Uk Kim</strong>, Yurim Son, Yoonji Kim</>,
      image: "/images/trainertap.png",
      tags: ["Healthcare", "Haptic", "Mobile Approach"],
      year: "2023",
      type: "Poster",
      doiLink: "https://doi.org/10.1145/3586182.3616644",
      pdfLink: "https://drive.google.com/file/d/109W96QxniioJMuL5uhOlL_C9oWZGES58/view?usp=sharing",
      presentationLink: "https://youtu.be/a2DRrNdZ4nc?si=fbaoBGJ9mN92aJOI",
      posterLink:"https://drive.google.com/file/d/1lvu_evIOZHfdYcGGU8y2a0SkTTX8LLlC/view?usp=sharing"
    },
    // {
    //   id: 3,
    //   title: "브랜드 아이덴티티의 디지털 전환: 전통과 혁신의 균형",
    //   journal: "Brand Innovation Quarterly",
    //   description: "디지털 시대에 맞는 브랜드 아이덴티티 구축 전략과 실무 사례를 다룬 종합적 연구. 글로벌 브랜드 50개사의 리브랜딩 과정을 심층 분석하여 성공 요인을 도출했습니다.",
    //   image: "https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%20with%20digital%20transformation%20elements%2C%20logo%20evolution%2C%20corporate%20branding%20materials%2C%20modern%20visual%20identity%20systems%2C%20professional%20design%20publication%2C%20clean%20layout&width=800&height=600&seq=pub-3&orientation=landscape",
    //   tags: ["Branding", "Digital", "Strategy"],
    //   year: "2023",
    //   type: "Conference Paper"
    // },
    // {
    //   id: 4,
    //   title: "접근성을 고려한 웹 디자인: 포용적 설계의 실무 적용",
    //   journal: "Web Accessibility Review",
    //   description: "웹 접근성 가이드라인을 실무에 효과적으로 적용하는 방법론과 도구를 소개한 실무 가이드. 다양한 사용자 그룹의 니즈를 반영한 포용적 디자인 원칙을 제시합니다.",
    //   image: "https://readdy.ai/api/search-image?query=Web%20accessibility%20design%20interface%20showing%20inclusive%20design%20principles%2C%20accessibility%20features%2C%20diverse%20user%20interface%20elements%2C%20universal%20design%20concepts%2C%20professional%20publication%20style%2C%20clean%20layout&width=800&height=600&seq=pub-4&orientation=landscape",
    //   tags: ["Accessibility", "Web Design", "Inclusive Design"],
    //   year: "2023",
    //   type: "Technical Report"
    // },
    // {
    //   id: 5,
    //   title: "모바일 퍼스트 시대의 반응형 디자인 전략",
    //   journal: "Responsive Design Weekly",
    //   description: "모바일 기기가 주요 접점이 된 현재, 효과적인 반응형 디자인 구현을 위한 실무 전략과 성능 최적화 기법을 다룬 가이드. 실제 프로젝트 사례와 측정 데이터를 포함합니다.",
    //   image: "https://readdy.ai/api/search-image?query=Responsive%20web%20design%20showcase%20across%20multiple%20devices%2C%20mobile-first%20design%20approach%2C%20adaptive%20layouts%2C%20modern%20web%20interface%2C%20professional%20design%20publication%2C%20technical%20documentation%20style&width=800&height=600&seq=pub-5&orientation=landscape",
    //   tags: ["Responsive Design", "Mobile First", "Performance"],
    //   year: "2023",
    //   type: "Industry Report"
    // }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const itemWidth = scrollContainerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentPublication(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToPublication = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-Reviewed Conference Papers, Journal papers, Demos, Workshops and Posters
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {publications.map((publication, index) => (
              <div key={publication.id} className="flex-shrink-0 w-full snap-start">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:min-h-[380px] xl:min-h-[440px] 2xl:min-h-[500px] flex items-center justify-center bg-white">
                      <img
                        src={publication.image}
                        alt={publication.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {publication.year}
                        </span>
                        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {publication.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                          {publication.journal}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {publication.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {publication.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {publication.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {publication.doiLink && (
                          <a
                            href={publication.doiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap"
                          >
                            DOI
                          </a>
                        )}
                        {publication.pdfLink && (
                          <a
                            href={publication.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium cursor-pointer whitespace-nowrap"
                          >
                            PDF
                          </a>
                        )}
                        {publication.presentationLink && (
                          <a
                            href={publication.presentationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium cursor-pointer whitespace-nowrap"
                          >
                            Presentation
                          </a>
                        )}
                        {publication.posterLink && (
                          <a
                            href={publication.posterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors font-medium cursor-pointer whitespace-nowrap"
                          >
                            Poster
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {publications.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPublication(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentPublication ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={() => scrollToPublication(Math.max(0, currentPublication - 1))}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl text-gray-600"></i>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={() => scrollToPublication(Math.min(publications.length - 1, currentPublication + 1))}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}