import { ArrowRight, FileText, MessageSquare, Mail, Globe } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: FileText,
    title: "블로그 포스트 자동 생성",
    description: "키워드만 입력하면 SEO 최적화된 고품질 블로그 글을 자동으로 생성합니다. 브랜드 톤앤매너를 학습하여 일관성 있는 콘텐츠를 제작합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: MessageSquare,
    title: "소셜미디어 콘텐츠",
    description: "플랫폼별 특성에 맞춘 매력적인 소셜미디어 포스트를 자동 제작합니다. 인스타그램, 페이스북, 트위터 등 각 채널에 최적화된 콘텐츠를 생성합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: Mail,
    title: "이메일 마케팅",
    description: "개인화된 이메일 캠페인을 자동으로 설계하고 최적화합니다. 고객 데이터를 분석하여 맞춤형 메시지와 최적의 발송 시간을 결정합니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
  {
    icon: Globe,
    title: "다국어 번역",
    description: "AI 번역으로 글로벌 시장을 위한 다국어 콘텐츠를 제작합니다. 자연스러운 현지화와 문화적 맥락을 고려한 고품질 번역을 제공합니다.",
    borderColor: "border-orange-500",
    iconColor: "text-orange-500",
  },
];

export default function ContentAutomation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            콘텐츠 자동화
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI로 콘텐츠 제작 과정을 완전 자동화하여 생산성을 극대화하세요.
            브랜드 일관성을 유지하면서 대량의 고품질 콘텐츠를 효율적으로 생성합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-lg text-gray-600">
              다양한 콘텐츠 유형에 맞춘 AI 자동화 솔루션
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
            콘텐츠 자동화로 생산성을 높여보세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 비즈니스에 최적화된 콘텐츠 자동화 전략을 수립하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            무료 상담 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}