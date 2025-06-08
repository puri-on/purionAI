import { ArrowRight, MessageCircle, Ticket, BarChart2 } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";

const features = [
  {
    icon: MessageCircle,
    title: "AI 챗봇",
    description:
      "24시간 언제든지 즉시 답변을 받을 수 있는 AI 챗봇 서비스입니다. 자주 묻는 질문부터 복잡한 기술적 문의까지 신속하게 처리합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: Ticket,
    title: "고객 문의 티켓팅 자동화",
    description:
      "고객 문의를 자동으로 분류하고 우선순위를 설정하여 효율적으로 처리합니다. 문의 유형별 자동 라우팅으로 빠른 해결을 보장합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: BarChart2,
    title: "CS 성과 분석 리포트",
    description:
      "고객 만족도, 응답 시간, 해결률 등 CS 성과를 실시간으로 분석합니다. 서비스 품질 개선을 위한 인사이트와 권장사항을 제공합니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">고객 지원</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            24시간 AI 챗봇과 전문가 팀이 함께하는 완벽한 고객 서비스. 신속하고
            정확한 지원으로 고객 만족도를 극대화합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              지원 서비스
            </h2>
            <p className="text-lg text-gray-600">
              AI 기반 스마트 고객 지원으로 서비스 품질을 향상시키세요
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${feature.borderColor} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gray-50 ${feature.iconColor}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            고객 지원 시스템을 혁신하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 비즈니스에 최적화된 고객 지원 솔루션을
            구축하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            무료 상담 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
