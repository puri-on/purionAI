export default function Process() {
  const steps = [
    {
      number: "1",
      title: "상담 및 분석",
      description: "현재 비즈니스 프로세스를 분석하고 자동화 가능한 영역을 식별합니다.",
      bgColor: "bg-brand-blue"
    },
    {
      number: "2", 
      title: "솔루션 개발",
      description: "맞춤형 AI 자동화 솔루션을 개발하고 테스트합니다.",
      bgColor: "bg-emerald-500"
    },
    {
      number: "3",
      title: "배포 및 지원", 
      description: "솔루션을 배포하고 지속적인 모니터링과 지원을 제공합니다.",
      bgColor: "bg-violet-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            간단한 3단계 프로세스
          </h2>
          <p className="text-xl text-gray-600">
            복잡한 자동화도 간단하게 시작할 수 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center fade-in">
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
