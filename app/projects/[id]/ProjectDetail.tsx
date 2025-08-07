'use client';

import Link from 'next/link';
import { useState } from 'react';

interface VideoBlockProps {
  url: string;
  title: string;
  thumbnail?: string;
}

interface ProjectDetailProps {
  projectId: string;
}

export function VideoBlock({ url, title, thumbnail }: VideoBlockProps) {
  const [play, setPlay] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const videoId = url.match(/(?:embed\/|\.be\/)([^\?&]+)/)?.[1]; // .be 링크도 지원

  const fallbackThumbnail = thumbnailError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/hq720.jpg`;

  const finalThumbnail = thumbnail ?? fallbackThumbnail;

    return (
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>
      <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden">
        {!play ? (
          <div
            onClick={() => setPlay(true)}
            className="w-full h-full bg-black relative cursor-pointer"
          >
            <img
              src={finalThumbnail}
              onError={() => setThumbnailError(true)}
              alt={`${title} 썸네일`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 rounded-full p-4">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`${url}&autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}


export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const projects = [
    {
      id: 1,
      title: "Art&Tech Grad Show: The Film Series",
      category: "VIDEO EDITING",
      description: "Three video styles for promoting the graduation exhibition: PR, documentary, and vlog",
      fullDescription: "To capture the diversity and spirit of our graduation exhibition, we produced three distinct types of promotional videos: a PR film to highlight the concept and identity of the exhibition, a documentary to convey the behind-the-scenes stories and student experiences, and a vlog to deliver a personal, immersive perspective of the event day.\n\n I was responsible for producing, shooting, and editing the videos, as well as managing the production budget. From planning the narrative flow of each format to directing on-site filming and finalizing post-production, I played a key role in shaping how the exhibition was shared with the public.",
      videoUrls: [
        {title: "PR Video", url: "https://www.youtube.com/embed/eilzomDSK5w?si=aPzIanXHURkn7CTm"},
        {title: "Documentary Video", url: "https://youtube.com/embed/uif5b0nd8QE?si=dbPUKwsfW63EMw9G"},
        {title: "vlog", url: "https://youtube.com/embed/WiQXuEpg0CE?si=I_KJbh9iCE_ee5wA", thumbnail: "/images/AbouT/Thumbnail_vlog.jpg"}
      ],
      images: [
        "/images/AbouT/1.jpg",
        "/images/AbouT/2.jpg",
        "/images/AbouT/3.jpg",
        "/images/AbouT/4.jpg",
        "/images/AbouT/5.jpg",
        "/images/AbouT/6.jpg",
        "/images/AbouT/7.jpg",
        "/images/AbouT/8.jpg"
      ],
      tags: ["Editing", "Compositing", "Content Design", "Premiere pro", "After Effect", "Maya"],
      year: "2024",
      client: "CAU College of Art & Tech",
      duration: "6 months",
      role: "Producer",
      challenges: [
        "Creating a promotional showcase video that integrates a wide range of exhibition themes and works from various disciplines",
        "Producing a memorable video that students can revisit and reflect on even after the exhibition ends",
        "Managing limited budget and time efficiently across planning, shooting, and editing phases"
      ],
      solutions: [
        "Developed three distinct styles of videos (PR, documentary, vlog) to capture different aspects of the exhibition experience",
        "Focused the documentary video on authentic interactions between professors and students to emphasize communication and collaboration",
        "Filmed in key locations around campus to reduce production costs while visually capturing spaces filled with student memories"
      ],
      results: [
        "Achieved a total of over 6,000 views across all video formats (and still growing)",
        "Helped enhance the image of the School of Art & Technology through algorithm-driven viewer engagement",
        "Strengthened the sense of community among students and faculty by preserving shared moments and behind-the-scenes efforts in video form"
      ]
    },
    {
      id: 2,
      title: "Rubik's WCA World Championship 2023",
      category: "EVENT DESIGN",
      description: "Organized and designed one of the most prestigious global competitions in the world of cubing",
      fullDescription: "To capture the diversity and spirit of our graduation exhibition, we produced three distinct types of promotional videos: a PR film to highlight the concept and identity of the exhibition, a documentary to convey the behind-the-scenes stories and student experiences, and a vlog to deliver a personal, immersive perspective of the event day.\n\n I was responsible for producing, shooting, and editing the videos, as well as managing the production budget. From planning the narrative flow of each format to directing on-site filming and finalizing post-production, I played a key role in shaping how the exhibition was shared with the public.",
      videoUrls: [
        {title: "Opening Ceremony Video", url: "https://youtube.com/embed/tZozNRCVdFg?si=x1SqpPoN8coGHgkw"}
      ],
      images: [
        "/images/AbouT/1.jpg",
        "/images/AbouT/2.jpg",
        "/images/AbouT/3.jpg",
        "/images/AbouT/4.jpg",
        "/images/AbouT/5.jpg",
        "/images/AbouT/6.jpg",
        "/images/AbouT/7.jpg",
        "/images/AbouT/8.jpg"
      ],
      tags: ["Exhibition Design", "Event Planning", "Product Design"],
      year: "2023",
      client: "Korea Cube Culture United",
      duration: "2 years",
      role: "Organizer, PR leader",
      challenges: [
        "Creating a promotional showcase video that integrates a wide range of exhibition themes and works from various disciplines",
        "Producing a memorable video that students can revisit and reflect on even after the exhibition ends",
        "Managing limited budget and time efficiently across planning, shooting, and editing phases"
      ],
      solutions: [
        "Developed three distinct styles of videos (PR, documentary, vlog) to capture different aspects of the exhibition experience",
        "Focused the documentary video on authentic interactions between professors and students to emphasize communication and collaboration",
        "Filmed in key locations around campus to reduce production costs while visually capturing spaces filled with student memories"
      ],
      results: [
        "Achieved a total of over 6,000 views across all video formats (and still growing)",
        "Helped enhance the image of the School of Art & Technology through algorithm-driven viewer engagement",
        "Strengthened the sense of community among students and faculty by preserving shared moments and behind-the-scenes efforts in video form"
      ]
    },
    {
      id: 3,
      title: "E-커머스 웹사이트",
      category: "Web Development",
      description: "반응형 디자인과 직관적인 사용자 인터페이스로 온라인 매출을 250% 증가시킨 쇼핑몰 웹사이트",
      fullDescription: "프리미엄 라이프스타일 브랜드의 온라인 쇼핑몰을 전면 리뉴얼한 프로젝트입니다. 고급스러운 브랜드 이미지와 편리한 쇼핑 경험을 동시에 제공하는 웹사이트를 구축했습니다.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%2C%20product%20showcase%2C%20shopping%20cart%20interface%2C%20clean%20layout%2C%20responsive%20design%2C%20online%20store%2C%20product%20gallery%2C%20user-friendly%20navigation%2C%20commercial%20website&width=800&height=600&seq=project-3&orientation=landscape",
      images: [
        "https://readdy.ai/api/search-image?query=Luxury%20e-commerce%20homepage%20design%2C%20premium%20product%20showcase%2C%20elegant%20layout%2C%20high-end%20fashion%20website%2C%20sophisticated%20design%2C%20clean%20white%20background%2C%20professional%20photography&width=800&height=600&seq=project-3-home&orientation=landscape",
        "https://readdy.ai/api/search-image?query=E-commerce%20product%20detail%20page%2C%20zoom%20functionality%2C%20product%20variations%2C%20add%20to%20cart%2C%20customer%20reviews%2C%20product%20gallery%2C%20professional%20e-commerce%20interface&width=800&height=600&seq=project-3-product&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Shopping%20cart%20checkout%20process%2C%20order%20summary%2C%20payment%20methods%2C%20shipping%20options%2C%20secure%20checkout%20design%2C%20user-friendly%20e-commerce%20flow&width=800&height=600&seq=project-3-checkout&orientation=landscape"
      ],
      tags: ["Web Design", "E-commerce", "Responsive"],
      year: "2023",
      client: "Luxe Living",
      duration: "4개월",
      role: "UI/UX Designer & Frontend Developer",
      challenges: [
        "고급스러운 브랜드 이미지를 온라인에서 효과적으로 전달",
        "복잡한 제품 카테고리와 옵션을 직관적으로 관리",
        "모바일과 데스크톱에서 일관된 고품질 쇼핑 경험 제공"
      ],
      solutions: [
        "고품질 이미지와 미니멀한 레이아웃으로 프리미엄 브랜드 이미지 구현",
        "지능형 필터링과 검색 시스템으로 제품 탐색 경험 개선",
        "반응형 디자인과 터치 친화적 인터페이스로 모든 디바이스 최적화"
      ],
      results: [
        "온라인 매출 250% 증가",
        "모바일 전환율 180% 향상",
        "평균 세션 시간 3배 증가"
      ]
    },
    {
      id: 4,
      title: "레스토랑 모바일 앱",
      category: "Mobile App",
      description: "음식 주문과 테이블 예약을 통합한 레스토랑 전용 모바일 앱으로 고객 만족도 95% 달성",
      fullDescription: "프리미엄 레스토랑 체인의 디지털 혁신을 위한 모바일 앱 개발 프로젝트입니다. 온라인 주문, 테이블 예약, 멤버십 관리를 하나의 앱에 통합하여 고객 경험을 혁신했습니다.",
      image: "https://readdy.ai/api/search-image?query=Restaurant%20mobile%20app%20design%2C%20food%20ordering%20interface%2C%20menu%20display%2C%20table%20reservation%2C%20delivery%20tracking%2C%20food%20photography%2C%20warm%20colors%2C%20appetizing%20design%2C%20mobile%20app%20screens&width=800&height=600&seq=project-4&orientation=landscape",
      images: [
        "https://readdy.ai/api/search-image?query=Restaurant%20app%20menu%20interface%2C%20food%20photography%2C%20dish%20descriptions%2C%20pricing%2C%20categories%2C%20appetizing%20food%20app%20design%2C%20modern%20UI%2C%20warm%20colors&width=600&height=800&seq=project-4-menu&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Table%20reservation%20interface%2C%20restaurant%20floor%20plan%2C%20time%20selection%2C%20party%20size%2C%20booking%20confirmation%2C%20restaurant%20app%20design%2C%20elegant%20interface&width=600&height=800&seq=project-4-reservation&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Food%20delivery%20tracking%20interface%2C%20order%20progress%2C%20delivery%20status%2C%20real-time%20tracking%2C%20restaurant%20app%2C%20order%20management%2C%20delivery%20app%20design&width=600&height=800&seq=project-4-tracking&orientation=portrait"
      ],
      tags: ["Mobile App", "Food & Beverage", "UX"],
      year: "2023",
      client: "Bistro Chain",
      duration: "5개월",
      role: "Product Designer",
      challenges: [
        "복잡한 메뉴 구조와 커스터마이징 옵션을 직관적으로 표현",
        "실시간 테이블 예약과 대기열 관리 시스템 구축",
        "음식의 시각적 매력을 극대화하는 인터페이스 설계"
      ],
      solutions: [
        "카테고리별 메뉴 구성과 시각적 필터링으로 탐색성 개선",
        "실시간 좌석 현황과 예상 대기시간 표시로 투명한 예약 시스템 구현",
        "고품질 음식 사진과 따뜻한 색상 팔레트로 식욕을 자극하는 디자인"
      ],
      results: [
        "고객 만족도 95% 달성",
        "앱 주문량 전체 매출의 60% 차지",
        "평균 주문 금액 35% 증가"
      ]
    },
    {
      id: 5,
      title: "기업 웹사이트 리뉴얼",
      category: "Corporate Website",
      description: "글로벌 IT 기업의 웹사이트를 리뉴얼하여 사용자 체류시간을 180% 증가시킨 프로젝트",
      fullDescription: "글로벌 IT 컨설팅 기업의 웹사이트를 전면 리뉴얼한 프로젝트입니다. 복잡한 서비스 구조를 명확하게 정리하고, 전문성과 신뢰성을 강조하는 현대적인 웹사이트로 구축했습니다.",
      image: "https://readdy.ai/api/search-image?query=Corporate%20website%20design%2C%20professional%20business%20layout%2C%20company%20information%2C%20services%20showcase%2C%20modern%20corporate%20identity%2C%20clean%20interface%2C%20business%20presentation%2C%20professional%20web%20design&width=800&height=600&seq=project-5&orientation=landscape",
      images: [
        {title: "PR Video", url: "https://readdy.ai/api/search-image?query=Corporate%20website%20homepage%2C%20professional%20hero%20section%2C%20company%20values%2C%20services%20overview%2C%20modern%20business%20website%2C%20clean%20corporate%20design%2C%20executive%20team%20photos&width=800&height=600&seq=project-5-home&orientation=landscape"},
        {title: "Documentary Video", url: "https://readdy.ai/api/search-image?query=IT%20services%20showcase%20page%2C%20technology%20solutions%2C%20consulting%20services%2C%20case%20studies%2C%20professional%20presentation%2C%20corporate%20website%20design%2C%20business%20services&width=800&height=600&seq=project-5-services&orientation=landscape"},
        {title: "vlog", url: "https://readdy.ai/api/search-image?query=Corporate%20about%20us%20page%2C%20company%20history%2C%20team%20members%2C%20office%20locations%2C%20professional%20corporate%20website%2C%20business%20presentation%2C%20company%20culture&width=800&height=600&seq=project-5-about&orientation=landscape"}
      ],
      tags: ["Corporate", "Web Design", "UI/UX"],
      year: "2023",
      client: "Global Tech Solutions",
      duration: "3개월",
      role: "Lead Designer",
      challenges: [
        "복잡한 IT 서비스를 일반인도 이해할 수 있도록 단순화",
        "글로벌 기업의 신뢰성과 전문성을 웹사이트를 통해 효과적으로 전달",
        "다양한 타겟 오디언스에게 적합한 콘텐츠 구조 설계"
      ],
      solutions: [
        "서비스별 명확한 카테고리 분류와 시각적 아이콘 시스템 도입",
        "고품질 비주얼과 일관된 타이포그래피로 프리미엄 브랜드 이미지 구축",
        "사용자 여정에 따른 정보 아키텍처 재구성으로 전환율 최적화"
      ],
      results: [
        "사용자 체류시간 180% 증가",
        "문의 전환율 120% 향상",
        "웹사이트 방문자 수 200% 증가"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(projectId));
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = project.videoUrl?.match(/embed\/([^?]+)/)?.[1];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Can't find it</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900 cursor-pointer">
              Portfolio
            </Link>
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl w-5 h-5 flex items-center justify-center"></i>
              <span>Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 프로젝트 히어로 */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>Affiliation: {project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>Duration: {project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-briefcase-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>Role: {project.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 영상 */}
      {/* 프로젝트 영상 섹션 */}
      {project.videoUrls && project.videoUrls.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Video Figure</h3>
              <div className="space-y-12">
                {project.videoUrls.map((video, index) => (
                  <VideoBlock
                    key={index}
                    url={video.url}
                    title={video.title}
                    thumbnail={video.thumbnail}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}



      {/* 프로젝트 상세 정보 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Issues</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="ri-error-warning-line text-red-500 text-lg mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solution</h3>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="ri-lightbulb-line text-yellow-500 text-lg mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Result</h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <i className="ri-check-line text-green-500 text-lg mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 태그 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 이미지 갤러리 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Details</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="group">
                  <img
                    src={image}
                    alt={`${project.title} 상세 ${index + 1}`}
                    className="w-full h-80 object-cover object-top rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 다른 프로젝트 보기 */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group block bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <img
                    src={otherProject.image}
                    alt={otherProject.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                      {otherProject.category}
                    </span>
                    <h4 className="text-xl font-bold mt-2 mb-3">{otherProject.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {otherProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}