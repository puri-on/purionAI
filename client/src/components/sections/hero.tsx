import { Rocket, Play, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleConsultation = () => {
    const emailSection = document.getElementById('email-collection');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-dark/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI 자동화의 모든 것,<br/>
            <span className="text-yellow-300 pulse-animation">퓨리온 AI</span>
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
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-brand-blue transition-all flex items-center gap-2">
              <Play size={20} />
              데모 보기
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">고객 만족도</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">지원 서비스</div>
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
