export default function Marketing() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            마케팅 자동화
          </h1>
          <p className="text-xl text-gray-600">
            데이터 기반 AI 마케팅으로 고객 획득과 매출 증대를 실현하세요
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            마케팅 솔루션
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">고객 세분화</h3>
                <p className="text-gray-600">AI 분석으로 고객을 정밀하게 분류하고 맞춤형 전략 수립</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">광고 최적화</h3>
                <p className="text-gray-600">실시간 성과 분석으로 광고 예산과 타겟팅을 자동 최적화</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">리드 관리</h3>
                <p className="text-gray-600">잠재 고객 발굴부터 전환까지 전 과정을 자동화</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">성과 분석</h3>
                <p className="text-gray-600">마케팅 ROI를 실시간으로 추적하고 개선 방안 제시</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}