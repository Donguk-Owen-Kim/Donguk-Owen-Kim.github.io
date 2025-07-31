'use client';

import Link from 'next/link';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const projects = [
    {
      id: 1,
      title: "모바일 뱅킹 앱 리디자인",
      category: "UI/UX Design",
      description: "사용자 경험을 개선하여 거래 완료율을 40% 향상시킨 모바일 뱅킹 앱 리디자인 프로젝트",
      fullDescription: "기존 모바일 뱅킹 앱의 복잡한 사용자 인터페이스와 낮은 사용성을 개선하기 위한 전면적인 리디자인 프로젝트입니다. 사용자 리서치를 통해 핵심 문제점들을 파악하고, 직관적이고 안전한 금융 서비스 경험을 제공하는 새로운 디자인을 개발했습니다.",
      image: "https://readdy.ai/api/search-image?query=Modern%20mobile%20banking%20app%20interface%20design%2C%20clean%20UI%20elements%2C%20financial%20dashboard%2C%20transaction%20screens%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20banking%20design%2C%20user-friendly%20interface%2C%20mobile%20app%20mockup&width=800&height=600&seq=project-1&orientation=landscape",
      images: [
        "https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20login%20screen%20design%2C%20secure%20authentication%20interface%2C%20clean%20modern%20UI%2C%20fingerprint%20login%2C%20face%20recognition%2C%20blue%20accent%20colors%2C%20minimal%20design%2C%20professional%20banking%20app&width=600&height=800&seq=project-1-screen-1&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Mobile%20banking%20dashboard%20interface%2C%20account%20balance%20display%2C%20transaction%20history%2C%20quick%20actions%2C%20card%20management%2C%20modern%20UI%20design%2C%20financial%20app%20interface%2C%20clean%20layout&width=600&height=800&seq=project-1-screen-2&orientation=portrait",
        "https://readdy.ai/api/search-image?query=Mobile%20banking%20transfer%20interface%2C%20send%20money%20screen%2C%20recipient%20selection%2C%20amount%20input%2C%20confirmation%20flow%2C%20secure%20transaction%20design%2C%20modern%20fintech%20UI&width=600&height=800&seq=project-1-screen-3&orientation=portrait"
      ],
      tags: ["Mobile Design", "Fintech", "User Research"],
      year: "2024",
      client: "KB국민은행",
      duration: "3개월",
      role: "Lead UI/UX Designer",
      challenges: [
        "복잡한 금융 기능을 단순하고 직관적으로 표현",
        "높은 보안 수준을 유지하면서도 편리한 사용자 경험 제공",
        "다양한 연령층의 사용자 니즈를 모두 충족하는 인터페이스 설계"
      ],
      solutions: [
        "사용자 중심의 정보 아키텍처 재구성으로 핵심 기능 접근성 향상",
        "생체 인증과 간편 결제 시스템을 통한 보안과 편의성 양립",
        "직관적인 아이콘과 명확한 라벨링으로 사용성 개선"
      ],
      results: [
        "거래 완료율 40% 향상",
        "앱 평점 4.2 → 4.8점 상승",
        "고객 만족도 조사에서 85% 긍정 응답"
      ]
    },
    {
      id: 2,
      title: "브랜드 아이덴티티 디자인",
      category: "Brand Identity",
      description: "스타트업 기업의 완전한 브랜드 아이덴티티를 구축하여 브랜드 인지도를 300% 증가시킨 프로젝트",
      fullDescription: "혁신적인 AI 스타트업의 브랜드 아이덴티티를 처음부터 구축한 프로젝트입니다. 기업의 비전과 가치를 시각적으로 표현하고, 일관된 브랜드 경험을 제공하기 위한 전체적인 브랜딩 시스템을 개발했습니다.",
      image: "https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%2C%20logo%20variations%2C%20business%20cards%2C%20letterhead%2C%20brand%20guidelines%2C%20color%20palette%2C%20typography%20system%2C%20corporate%20branding%20materials%2C%20professional%20presentation&width=800&height=600&seq=project-2&orientation=landscape",
      images: [
        "https://readdy.ai/api/search-image?query=Modern%20minimalist%20logo%20design%20variations%2C%20geometric%20shapes%2C%20technology%20inspired%2C%20clean%20typography%2C%20brand%20symbol%2C%20corporate%20identity%2C%20professional%20logo%20showcase%2C%20grid%20system&width=800&height=600&seq=project-2-logo&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Brand%20color%20palette%20showcase%2C%20modern%20color%20combinations%2C%20professional%20brand%20colors%2C%20gradient%20systems%2C%20color%20harmony%2C%20brand%20guidelines%2C%20color%20swatches%2C%20design%20system&width=800&height=600&seq=project-2-colors&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Corporate%20stationery%20design%2C%20business%20cards%2C%20letterhead%2C%20envelope%20design%2C%20brand%20application%2C%20professional%20branding%20materials%2C%20consistent%20visual%20identity&width=800&height=600&seq=project-2-stationery&orientation=landscape"
      ],
      tags: ["Branding", "Logo Design", "Visual Identity"],
      year: "2024",
      client: "TechNova AI",
      duration: "2개월",
      role: "Brand Designer",
      challenges: [
        "기술 중심의 복잡한 서비스를 대중이 이해할 수 있도록 시각화",
        "경쟁사와 차별화되는 독특한 브랜드 포지셔닝 구축",
        "스타트업의 성장 단계에 맞는 확장 가능한 브랜드 시스템 설계"
      ],
      solutions: [
        "AI와 혁신을 상징하는 기하학적 형태의 로고 개발",
        "기술적 전문성과 접근성을 동시에 표현하는 색상 체계 구축",
        "다양한 매체와 플랫폼에 적용 가능한 유연한 브랜드 가이드라인 제작"
      ],
      results: [
        "브랜드 인지도 300% 증가",
        "투자 유치 시 브랜드 완성도로 높은 평가",
        "브랜딩 어워드 3개 부문 수상"
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
        "https://readdy.ai/api/search-image?query=Corporate%20website%20homepage%2C%20professional%20hero%20section%2C%20company%20values%2C%20services%20overview%2C%20modern%20business%20website%2C%20clean%20corporate%20design%2C%20executive%20team%20photos&width=800&height=600&seq=project-5-home&orientation=landscape",
        "https://readdy.ai/api/search-image?query=IT%20services%20showcase%20page%2C%20technology%20solutions%2C%20consulting%20services%2C%20case%20studies%2C%20professional%20presentation%2C%20corporate%20website%20design%2C%20business%20services&width=800&height=600&seq=project-5-services&orientation=landscape",
        "https://readdy.ai/api/search-image?query=Corporate%20about%20us%20page%2C%20company%20history%2C%20team%20members%2C%20office%20locations%2C%20professional%20corporate%20website%2C%20business%20presentation%2C%20company%20culture&width=800&height=600&seq=project-5-about&orientation=landscape"
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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            홈으로 돌아가기
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
              <span>홈으로 돌아가기</span>
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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>클라이언트: {project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>기간: {project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-briefcase-line text-lg w-5 h-5 flex items-center justify-center"></i>
                <span>역할: {project.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 이미지 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[600px] object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 정보 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">도전 과제</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">해결 방법</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">결과</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">사용 기술 & 분야</h3>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">프로젝트 세부 화면</h3>
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
            <h3 className="text-3xl font-bold mb-8">다른 프로젝트도 확인해보세요</h3>
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