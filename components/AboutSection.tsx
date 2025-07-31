
'use client';

export default function AboutSection() {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 88 },
    { name: 'Brand Identity', level: 92 },
    { name: 'Graphic Design', level: 90 },
    { name: 'Motion Graphics', level: 85 },
    { name: 'Photography', level: 80 }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5년간의 디자인 경험을 바탕으로 사용자 중심의 창의적 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">나의 이야기</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                디자인은 단순히 아름다운 것을 만드는 것이 아니라, 사용자의 문제를 해결하고 
                브랜드의 가치를 전달하는 강력한 도구라고 믿습니다. 저는 사용자 경험(UX)과 
                시각적 매력(UI)을 완벽하게 조화시켜 의미 있는 디자인을 만들어냅니다.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                다양한 프로젝트를 통해 브랜딩부터 웹 개발까지 폭넓은 경험을 쌓았으며, 
                끊임없는 학습과 도전을 통해 더 나은 디자이너로 성장하고 있습니다.
              </p>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Creative%20workspace%20setup%20with%20design%20tools%2C%20sketches%2C%20color%20palettes%2C%20laptop%20with%20design%20software%2C%20modern%20desk%20organization%2C%20natural%20lighting%2C%20inspiration%20mood%20board%2C%20minimalist%20aesthetic%2C%20professional%20environment&width=600&height=700&seq=workspace-img&orientation=portrait"
                alt="작업 공간"
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-award-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-gray-600 text-sm">완료된 프로젝트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
