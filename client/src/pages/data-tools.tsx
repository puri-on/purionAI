import { ArrowRight, BarChart, TrendingUp, FileBarChart } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  {
    icon: BarChart,
    title: "대시보드 시각화",
    description: "복잡한 데이터를 직관적인 차트와 그래프로 시각화합니다. 실시간 데이터 업데이트와 인터랙티브한 대시보드로 빠른 의사결정을 지원합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "예측 분석",
    description: "머신러닝 알고리즘으로 미래 트렌드와 패턴을 정확하게 예측합니다. 비즈니스 성과를 예측하고 리스크를 미리 식별하여 전략적 대응이 가능합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: FileBarChart,
    title: "리포트 자동 생성",
    description: "정기적인 분석 리포트를 자동으로 생성하고 배포합니다. 핵심 지표 요약, 트렌드 분석, 개선 권장사항까지 포함된 종합 리포트를 제공합니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
];

export default function DataTools() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            데이터 분석
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            복잡한 데이터를 인사이트로 변환하는 AI 데이터 분석 플랫폼.
            데이터 기반 의사결정으로 비즈니스 성과를 극대화하세요.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              데이터 분석 기능
            </h2>
            <p className="text-lg text-gray-600">
              AI 기반 데이터 분석으로 숨겨진 비즈니스 인사이트를 발견하세요
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
            데이터의 힘을 활용하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 데이터에서 최대한의 가치를 추출하는 방법을 알아보세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            무료 상담 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}