import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Shield,
    title: "보안 위협 탐지",
    description: "AI 기반 실시간 보안 위협 탐지 시스템으로 사이버 공격을 사전에 차단합니다. 알려진 위협뿐만 아니라 새로운 형태의 공격 패턴도 신속하게 식별합니다.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    icon: Zap,
    title: "자동 대응 시스템",
    description: "보안 위협 발견 시 즉시 자동으로 대응하는 시스템입니다. 위험 수준에 따라 차단, 격리, 알림 등의 조치를 자동으로 실행하여 피해를 최소화합니다.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: Eye,
    title: "이상 행위 모니터링",
    description: "사용자 행동 패턴을 학습하여 이상 행위를 실시간으로 모니터링합니다. 내부자 위협, 계정 탈취 등을 조기에 발견하여 보안 사고를 예방합니다.",
    borderColor: "border-purple-500",
    iconColor: "text-purple-500",
  },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            보안 솔루션
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            엔터프라이즈급 보안으로 고객의 데이터와 개인정보를 안전하게 보호합니다.
            AI 기반 보안 시스템으로 진화하는 사이버 위협에 대응하세요.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              보안 서비스
            </h2>
            <p className="text-lg text-gray-600">
              AI 기반 지능형 보안 시스템으로 완벽한 보호막을 구축하세요
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

      {/* Security Standards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-green-500 text-2xl mr-3">🔒</div>
                <h3 className="text-xl font-bold text-green-900">
                  개인정보 처리방침
                </h3>
              </div>
              <p className="text-green-700">
                퓨리온 AI는 개인정보보호법을 엄격히 준수하며, 고객의 개인정보를 수집 목적 외에는 절대 사용하지 않습니다. 
                GDPR, CCPA 등 글로벌 개인정보보호 규정을 완벽하게 준수합니다.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-blue-500 text-2xl mr-3">🛡️</div>
                <h3 className="text-xl font-bold text-blue-900">
                  보안 인증 및 표준
                </h3>
              </div>
              <p className="text-blue-700">
                ISO 27001, SOC 2 Type II, PCI DSS 등 국제 보안 표준을 준수합니다. 
                정기적인 보안 감사와 침투 테스트를 통해 최고 수준의 보안을 유지합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            최고 수준의 보안을 경험하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문가와 상담하여 귀하의 비즈니스에 최적화된 보안 솔루션을 구축하세요
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            무료 상담 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}