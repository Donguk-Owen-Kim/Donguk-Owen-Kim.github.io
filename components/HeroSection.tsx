'use client';

export default function HeroSection() {
  const scrollToPublications = () => {
    const element = document.getElementById('publications');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // CV 다운로드 기능 시뮬레이션
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1EkM9DKMqxoGxNm3MAfbrLptQr7cLa0Wy/view?usp=sharing'; // 실제 CV 파일 경로로 변경 필요
    // link.download = 'CV_202507.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%2C%20laptop%2C%20design%20tools%2C%20natural%20lighting%2C%20professional%20atmosphere%2C%20soft%20shadows%2C%20contemporary%20office%20environment%2C%20neutral%20colors%2C%20clean%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      ></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hello, <br />
              I'm <span className="text-blue-600">Dong-Uk Kim</span><br />
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm UROP in <a href="https://artifab.yoonji-kim.com/main-page" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}><strong>Artifab Lab</strong></a> at Chung-Ang University, advised by <a href="https://www.yoonji-kim.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}><strong>Prof. Yoonji Kim</strong></a>.<br />
              My research interests are <strong>Human-Computer Interaction (HCI)</strong> with a focus on <strong>Accessibility</strong> and <strong>Healthcare</strong>, aiming to help users adapt intuitively in digitally augmented environments. My work integrates <strong>Digital Fabrication</strong>, <strong>Immersive Content Design</strong>, and <strong>User-Centered Innovation</strong>.<br/>
              I earned my B.E. from <a href="https://artech.cau.ac.kr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x drop-shadow-md brightness-110"
              style={{ textDecoration: "underline" }}><strong>Chung-Ang University (Art&Technology)</strong></a>

            </p>
            <div className="flex gap-4">
              <button 
                onClick={downloadCV}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-download-line text-xl"></i>
                Curriculum Vitae
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="My profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToPublications} className="w-6 h-6 flex items-center justify-center cursor-pointer">
          <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
        </button>
      </div>
    </section>
  );
}