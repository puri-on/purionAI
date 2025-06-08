import { ArrowRight, Users, Play, BarChart3, Target, Zap, Clock, TrendingUp, CheckCircle, Brain, Mail, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";
import { useModal } from "@/contexts/modal-context";
import ConsultationModal from "@/components/consultation-modal";

const features = [
  {
    icon: Brain,
    title: "AI 고객 행동 분석",
    description: "머신러닝으로 고객의 구매 패턴과 선호도를 실시간 분석합니다.",
    details: [
      "웹사이트 행동 패턴 추적",
      "구매 이력 기반 예측",
      "고객 생애가치 계산",
      "이탈 위험 고객 식별"
    ],
    gradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-500",
  },
  {
    icon: Target,
    title: "정밀 타겟팅 & 세분화",
    description: "AI가 수천 개의 데이터 포인트를 분석하여 최적의 고객 세그먼트를 생성합니다.",
    details: [
      "행동 기반 자동 세분화",
      "실시간 세그먼트 업데이트",
      "개인화 레벨 조정",
      "크로스 플랫폼 통합"
    ],
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Play,
    title: "자동화된 캠페인 실행",
    description: "최적의 시간에 최적의 메시지로 개인화된 캠페인을 자동 실행합니다.",
    details: [
      "다채널 캠페인 자동화",
      "최적 발송 시간 예측",
      "개인화 메시지 생성",
      "A/B 테스트 자동 실행"
    ],
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "실시간 성과 최적화",
    description: "캠페인 성과를 실시간으로 모니터링하고 자동으로 최적화합니다.",
    details: [
      "실시간 ROI 추적",
      "성과 기반 자동 조정",
      "예측 분석 리포트",
      "경쟁사 벤치마킹"
    ],
    gradient: "from-orange-50 to-red-50",
    iconBg: "bg-orange-500",
  },
  {
    icon: Mail,
    title: "옴니채널 마케팅",
    description: "이메일, SMS, 소셜미디어를 통합하여 일관된 고객 경험을 제공합니다.",
    details: [
      "크로스 채널 메시지 동기화",
      "채널별 최적화",
      "고객 여정 자동화",
      "통합 대시보드"
    ],
    gradient: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-500",
  },
  {
    icon: TrendingUp,
    title: "예측 마케팅 인텔리전스",
    description: "미래 트렌드와 고객 행동을 예측하여 선제적 마케팅 전략을 수립합니다.",
    details: [
      "시장 트렌드 예측",
      "고객 이탈 예방",
      "매출 예측 모델링",
      "경쟁 우위 분석"
    ],
    gradient: "from-indigo-50 to-purple-50",
    iconBg: "bg-indigo-500",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "전환율 향상",
    stat: "300%",
    description: "개인화된 마케팅으로 전환율 300% 증가"
  },
  {
    icon: Clock,
    title: "시간 절약",
    stat: "80%",
    description: "마케팅 업무 시간을 80% 단축"
  },
  {
    icon: Zap,
    title: "ROI 개선",
    stat: "250%",
    description: "마케팅 ROI 평균 250% 향상"
  },
];

export default function Marketing() {
  const { isConsultationModalOpen, openConsultationModal, closeConsultationModal } = useModal();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            AI 마케팅 자동화 솔루션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            고객 여정을
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> AI로 혁신</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            개인화된 고객 경험부터 실시간 성과 최적화까지,
            <br className="hidden sm:block" />
            데이터 기반 마케팅 자동화로 ROI를 극대화하세요
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            무료 상담 받기
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
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
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600">
              AI가 모든 마케팅 과정을 자동화하고 최적화합니다
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
              3단계 마케팅 혁신
            </h2>
            <p className="text-xl text-gray-600">
              간단한 설정으로 강력한 마케팅 자동화를 시작하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "데이터 연결",
                description: "기존 마케팅 툴과 고객 데이터를 연결하면 AI가 패턴을 분석하고 학습합니다.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "02", 
                title: "자동화 설정",
                description: "목표를 설정하면 AI가 최적의 캠페인 전략과 고객 여정을 자동으로 설계합니다.",
                color: "from-blue-500 to-purple-500"
              },
              {
                step: "03",
                title: "성과 최적화",
                description: "실시간 데이터를 바탕으로 캠페인을 지속적으로 개선하며 ROI를 극대화합니다.",
                color: "from-green-500 to-blue-500"
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            마케팅 ROI를 3배 높여보세요
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            전문가와 1:1 상담을 통해 귀하의 비즈니스에 최적화된 
            마케팅 자동화 전략을 무료로 설계해드립니다
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            무료 상담 신청
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