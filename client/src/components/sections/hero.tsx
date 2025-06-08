import { Rocket, Play, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleConsultation = () => {
    const emailSection = document.getElementById("email-collection");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background-image.png"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-dark/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-[#ff1a1a00] text-center text-[60px]">
            AI 자동화의 모든 것,
            <br />
            <span className="pulse-animation text-[#bcb5ff]">퓨리온 AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            콘텐츠부터 웹/앱 개발까지, 자동화로 연결합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleConsultation}
              className="bg-white text-brand-blue px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Rocket size={20} />
              무료 상담받기
            </button>
            <a
              href="https://www.youtube.com/@퓨리온_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-brand-blue transition-all flex items-center gap-2"
            >
              <Play size={20} />
              🎬 유튜브 보기
            </a>
          </div>

          <div className="grid grid-cols-3 text-center text-white mt-12 gap-6">
            <div>
              <p className="font-bold text-[25px]">AI 자동화 전문</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1:1 맞춤 제작</p>
            </div>
            <div>
              <p className="text-3xl font-bold">빠른 피드백 지원</p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
