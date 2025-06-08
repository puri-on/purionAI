import { ArrowRight, Code, Smartphone, Globe, Layers, Zap, Shield, Cloud, CheckCircle, Monitor, Database, Cpu, Users, Settings } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";
import { useModal } from "@/contexts/modal-context";
import ConsultationModal from "@/components/consultation-modal";

const features = [
  {
    icon: Monitor,
    title: "AI 기반 웹 애플리케이션",
    description: "머신러닝과 AI를 활용한 지능형 웹 애플리케이션을 개발합니다.",
    details: [
      "실시간 데이터 분석 대시보드",
      "AI 추천 시스템 구축",
      "자동화된 워크플로우",
      "예측 분석 기능"
    ],
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Smartphone,
    title: "크로스 플랫폼 모바일 앱",
    description: "React Native와 Flutter로 iOS/Android 동시 지원 앱을 개발합니다.",
    details: [
      "단일 코드베이스로 양대 플랫폼 지원",
      "네이티브 성능 최적화",
      "오프라인 기능 지원",
      "푸시 알림 시스템"
    ],
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500",
  },
  {
    icon: Database,
    title: "백엔드 & 데이터베이스",
    description: "확장 가능한 서버 아키텍처와 효율적인 데이터 관리 시스템을 구축합니다.",
    details: [
      "마이크로서비스 아키텍처",
      "RESTful & GraphQL API",
      "실시간 데이터 동기화",
      "데이터 보안 강화"
    ],
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-500",
  },
  {
    icon: Cloud,
    title: "클라우드 인프라",
    description: "AWS, Azure, GCP를 활용한 안정적이고 확장 가능한 클라우드 인프라를 구축합니다.",
    details: [
      "자동 스케일링 설정",
      "CI/CD 파이프라인 구축",
      "모니터링 & 로깅 시스템",
      "재해 복구 계획"
    ],
    gradient: "from-orange-50 to-red-50",
    iconBg: "bg-orange-500",
  },
  {
    icon: Shield,
    title: "보안 & 인증",
    description: "최신 보안 표준을 적용한 안전한 애플리케이션을 개발합니다.",
    details: [
      "OAuth 2.0 / JWT 인증",
      "데이터 암호화",
      "GDPR 컴플라이언스",
      "보안 감사 및 테스트"
    ],
    gradient: "from-red-50 to-pink-50",
    iconBg: "bg-red-500",
  },
  {
    icon: Cpu,
    title: "AI/ML 통합",
    description: "최신 AI 기술을 비즈니스 애플리케이션에 seamlessly 통합합니다.",
    details: [
      "자연어 처리 (NLP)",
      "컴퓨터 비전",
      "예측 모델링",
      "자동화 봇 개발"
    ],
    gradient: "from-indigo-50 to-purple-50",
    iconBg: "bg-indigo-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "개발 속도",
    stat: "50%",
    description: "AI 기반 개발로 프로젝트 완료 시간 50% 단축"
  },
  {
    icon: Users,
    title: "사용자 만족도",
    stat: "95%",
    description: "직관적인 UX/UI로 사용자 만족도 95% 달성"
  },
  {
    icon: Settings,
    title: "운영 효율성",
    stat: "300%",
    description: "자동화된 워크플로우로 운영 효율성 300% 향상"
  },
];

export default function WebAppDev() {
  const { isConsultationModalOpen, openConsultationModal, closeConsultationModal } = useModal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            AI 기반 웹/앱 개발 솔루션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">AI로 가속화하는</span>
            <br />디지털 혁신
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            최신 AI 기술과 클라우드 인프라를 활용하여
            <br className="hidden sm:block" />
            확장 가능하고 지능적인 웹/모바일 애플리케이션을 구축합니다
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            프로젝트 상담 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              핵심 개발 영역
            </h2>
            <p className="text-xl text-gray-600">
              최신 기술 스택으로 완성하는 엔터프라이즈급 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3단계 개발 프로세스
            </h2>
            <p className="text-xl text-gray-600">
              체계적이고 투명한 개발 프로세스로 성공적인 프로젝트를 보장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "요구사항 분석",
                description: "비즈니스 목표와 기술 요구사항을 정밀 분석하여 최적의 아키텍처를 설계합니다.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "AI 기반 개발",
                description: "최신 AI 도구와 자동화를 활용하여 빠르고 정확한 개발을 진행합니다.",
                color: "from-green-500 to-blue-500"
              },
              {
                step: "03",
                title: "배포 & 운영",
                description: "클라우드 배포부터 모니터링, 지속적인 업데이트까지 완벽한 운영을 지원합니다.",
                color: "from-purple-500 to-green-500"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${process.color} rounded-full text-white font-bold text-xl mb-6`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            혁신적인 디지털 솔루션을 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            AI 기반 개발 전문가와 1:1 상담을 통해 
            귀하의 비즈니스를 위한 최적의 기술 솔루션을 설계해보세요
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            프로젝트 상담 신청
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={closeConsultationModal} 
      />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}