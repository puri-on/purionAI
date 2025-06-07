export default function DataTools() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            데이터 도구
          </h1>
          <p className="text-xl text-gray-600">
            복잡한 데이터를 인사이트로 변환하는 AI 데이터 분석 플랫폼
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            데이터 분석 기능
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">자동 데이터 수집</h3>
                <p className="text-gray-600">웹사이트, API, 파일 등 다양한 소스에서 데이터를 자동으로 수집</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">스마트 데이터 정제</h3>
                <p className="text-gray-600">AI가 자동으로 데이터 품질을 검증하고 오류를 수정</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">예측 분석</h3>
                <p className="text-gray-600">머신러닝으로 미래 트렌드와 패턴을 정확하게 예측</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">시각화 대시보드</h3>
                <p className="text-gray-600">직관적인 차트와 그래프로 데이터 인사이트를 시각화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}