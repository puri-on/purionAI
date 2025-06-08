import { ArrowRight, FileText, MessageSquare, Mail, Globe, Brain, Zap, Target, BarChart3, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useModal } from "@/contexts/modal-context";
import ConsultationModal from "@/components/consultation-modal";

const features = [
  {
    icon: Brain,
    title: "AI 브랜드 톤앤매너 학습",
    description: "기존 콘텐츠를 분석하여 브랜드 고유의 목소리와 스타일을 학습합니다.",
    details: [
      "기존 콘텐츠 패턴 분석",
      "브랜드 어조 자동 적용",
      "일관된 메시지 톤 유지",
      "고객층별 맞춤 스타일링"
    ],
    gradient: "from-purple-50 to-blue-50",
    iconBg: "bg-purple-500",
  },
  {
    icon: FileText,
    title: "SEO 최적화 블로그 자동 생성",
    description: "키워드 연구부터 메타 태그까지 완전 자동화된 SEO 친화적 콘텐츠를 제작합니다.",
    details: [
      "키워드 밀도 최적화",
      "메타 제목/설명 자동 생성",
      "내부 링크 전략 수립",
      "읽기 쉬운 구조화된 글"
    ],
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: MessageSquare,
    title: "멀티 플랫폼 소셜미디어 관리",
    description: "각 플랫폼의 특성에 맞춘 콘텐츠를 동시에 생성하고 최적 시간에 자동 발행합니다.",
    details: [
      "플랫폼별 형식 자동 조정",
      "해시태그 추천 및 최적화",
      "이미지/영상 자동 매칭",
      "예약 발행 스케줄링"
    ],
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500",
  },
  {
    icon: Target,
    title: "개인화 이메일 캠페인",
    description: "고객 행동 데이터를 분석하여 개인별 맞춤 이메일을 자동으로 제작하고 발송합니다.",
    details: [
      "고객 세분화 자동 분류",
      "개인별 맞춤 메시지",
      "A/B 테스트 자동 실행",
      "최적 발송 시간 예측"
    ],
    gradient: "from-pink-50 to-rose-50",
    iconBg: "bg-pink-500",
  },
  {
    icon: Globe,
    title: "글로벌 다국어 콘텐츠 제작",
    description: "문화적 맥락을 고려한 자연스러운 현지화로 전 세계 시장에 맞는 콘텐츠를 생성합니다.",
    details: [
      "문화적 컨텍스트 고려",
      "현지 트렌드 반영",
      "법적 규정 준수 확인",
      "지역별 톤앤매너 조정"
    ],
    gradient: "from-orange-50 to-yellow-50",
    iconBg: "bg-orange-500",
  },
  {
    icon: BarChart3,
    title: "실시간 성과 분석 & 최적화",
    description: "콘텐츠 성과를 실시간으로 분석하여 다음 콘텐츠 전략을 자동으로 개선합니다.",
    details: [
      "실시간 참여도 모니터링",
      "성과 기반 자동 최적화",
      "트렌드 변화 감지",
      "ROI 개선 제안"
    ],
    gradient: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-500",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "시간 절약",
    stat: "90%",
    description: "콘텐츠 제작 시간을 90% 단축"
  },
  {
    icon: Users,
    title: "참여도 향상",
    stat: "150%",
    description: "고객 참여도 평균 150% 증가"
  },
  {
    icon: Zap,
    title: "생산성 증대",
    stat: "5배",
    description: "동일 시간 대비 5배 많은 콘텐츠 생산"
  },
];

export default function ContentAutomation() {
  const { isConsultationModalOpen, openConsultationModal, closeConsultationModal } = useModal();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            AI 콘텐츠 자동화 솔루션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            콘텐츠 제작,
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI로 자동화</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            브랜드 톤앤매너 학습부터 SEO 최적화까지,
            <br className="hidden sm:block" />
            완전 자동화된 콘텐츠 제작 시스템으로 생산성을 극대화하세요
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4">
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
              AI가 모든 콘텐츠 제작 과정을 완전 자동화합니다
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
              3단계 간단 프로세스
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 설정 없이 바로 시작하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "브랜드 학습",
                description: "기존 콘텐츠를 업로드하면 AI가 브랜드 톤앤매너와 스타일을 자동으로 학습합니다.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "02", 
                title: "자동 생성",
                description: "키워드나 주제만 입력하면 학습된 브랜드 스타일로 고품질 콘텐츠가 자동 생성됩니다.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "최적화 & 발행",
                description: "SEO 최적화, 플랫폼별 조정을 거쳐 최적의 시간에 자동으로 발행됩니다.",
                color: "from-green-500 to-teal-500"
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 시작하여 콘텐츠 생산성을 혁신하세요
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            전문가와 1:1 상담을 통해 귀하의 비즈니스에 최적화된 
            콘텐츠 자동화 전략을 무료로 설계해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openConsultationModal}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              무료 상담 신청
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              더 많은 서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={closeConsultationModal} 
      />
    </div>
  );
}