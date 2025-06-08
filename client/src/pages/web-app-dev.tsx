import { ArrowRight, Code, Layout, Paintbrush, Cloud } from "lucide-react";
import { Link } from "wouter";
import ScrollToTop from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";

const features = [
  {
    icon: Code,
    title: "코드 자동 생성",
    description: "요구사항을 입력하면 완전한 웹 애플리케이션 코드를 자동 생성합니다. 최신 기술 스택과 베스트 프랙티스를 적용하여 고품질 코드를 제공합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: Layout,
    title: "템플릿 기반 웹 구축",
    description: "검증된 템플릿을 기반으로 빠르게 웹사이트를 구축합니다. 비즈니스 요구사항에 맞춰 자동으로 레이아웃과 기능을 최적화합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: Paintbrush,
    title: "커스터마이징 지원",
    description: "브랜드 아이덴티티에 맞춘 완전한 디자인 커스터마이징을 지원합니다. 색상, 폰트, 레이아웃까지 모든 요소를 개인화할 수 있습니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
  {
    icon: Cloud,
    title: "배포 및 유지보수 자동화",
    description: "클라우드 배포부터 도메인 연결, 보안 설정까지 원클릭으로 자동화합니다. 지속적인 모니터링과 업데이트도 자동으로 관리됩니다.",
    borderColor: "border-orange-500",
    iconColor: "text-orange-500",
  },
];

export default function WebAppDev() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            웹앱 개발
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI 기반 자동 코딩으로 빠르고 안전한 웹 애플리케이션을 구축하세요.
            개발 시간을 단축하고 비용을 절감하면서도 높은 품질의 결과물을 얻을 수 있습니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              개발 서비스
            </h2>
            <p className="text-lg text-gray-600">
              전문적인 웹 애플리케이션 개발을 위한 종합 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
            AI로 웹앱 개발을 혁신하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 프로젝트에 최적화된 웹 개발 솔루션을 찾아보세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
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