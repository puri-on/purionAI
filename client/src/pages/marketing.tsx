import { ArrowRight, Users, Play, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";

const features = [
  {
    icon: Users,
    title: "고객 세분화 분석",
    description: "AI 분석으로 고객을 정밀하게 분류하고 맞춤형 전략을 수립합니다. 구매 패턴, 선호도, 행동 데이터를 종합 분석하여 최적의 세그먼트를 생성합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: Play,
    title: "개인화 캠페인 자동 실행",
    description: "고객별 맞춤형 마케팅 캠페인을 자동으로 실행합니다. 최적의 메시지, 채널, 타이밍을 AI가 결정하여 전환율을 극대화합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: BarChart3,
    title: "성과 리포트 자동화",
    description: "마케팅 ROI를 실시간으로 추적하고 개선 방안을 제시합니다. 캠페인 성과, 고객 반응, 매출 기여도를 자동으로 분석하고 리포트를 생성합니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
];

export default function Marketing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            마케팅 자동화
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            데이터 기반 AI 마케팅으로 고객 획득과 매출 증대를 실현하세요.
            개인화된 고객 경험을 제공하면서 마케팅 효율성을 극대화합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              마케팅 솔루션
            </h2>
            <p className="text-lg text-gray-600">
              AI 기반 스마트 마케팅으로 고객과의 관계를 강화하세요
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
                    <div className={`p-3 rounded-lg bg-gray-50 ${feature.iconColor}`}>
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
            마케팅 자동화로 성과를 극대화하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 비즈니스에 최적화된 마케팅 자동화 전략을 수립하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
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