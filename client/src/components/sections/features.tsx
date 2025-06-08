import {
  Bot,
  Code,
  TrendingUp,
  Database,
  Headphones,
  Shield,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "콘텐츠 자동화",
    description:
      "AI 기반 콘텐츠 생성으로 블로그, 소셜미디어, 마케팅 자료를 자동으로 제작합니다.",
    gradient: "from-orange-50 to-red-100",
    iconBg: "bg-orange-500",
    linkText: "자세히 보기",
    linkColor: "text-orange-600",
    linkUrl: "/content-automation",
  },
  {
    icon: Code,
    title: "웹/앱 개발",
    description:
      "AI 코드 생성과 자동화 도구로 빠르고 안정적인 웹사이트와 앱을 개발합니다.",
    gradient: "from-pink-50 to-rose-100",
    iconBg: "bg-pink-500",
    linkText: "포트폴리오 보기",
    linkColor: "text-pink-600",
    linkUrl: "/web-app-dev",
  },
  {
    icon: TrendingUp,
    title: "마케팅 자동화",
    description:
      "고객 행동 분석부터 개인화된 캠페인 실행까지 마케팅 전 과정을 자동화합니다.",
    gradient: "from-teal-50 to-cyan-100",
    iconBg: "bg-teal-500",
    linkText: "사례 연구",
    linkColor: "text-teal-600",
    linkUrl: "/marketing",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI로 혁신하는 비즈니스
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최첨단 AI 기술로 귀하의 비즈니스를 자동화하고 효율성을 극대화합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`feature-card bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl shadow-lg fade-in`}
              >
                <div
                  className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <a
                    href={feature.linkUrl}
                    className={`inline-flex items-center ${feature.linkColor} font-semibold hover:opacity-80 transition-opacity`}
                  >
                    {feature.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
