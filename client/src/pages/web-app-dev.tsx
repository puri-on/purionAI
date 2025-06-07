export default function WebAppDev() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            웹앱 개발
          </h1>
          <p className="text-xl text-gray-600">
            AI 기반 자동 코딩으로 빠르고 안전한 웹 애플리케이션을 구축하세요
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            개발 서비스
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">AI 코드 생성</h3>
                <p className="text-gray-600">요구사항을 입력하면 완전한 웹 애플리케이션 코드를 자동 생성</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">반응형 UI/UX</h3>
                <p className="text-gray-600">모든 디바이스에서 완벽하게 작동하는 반응형 인터페이스 자동 구현</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">데이터베이스 설계</h3>
                <p className="text-gray-600">비즈니스 로직에 최적화된 데이터베이스 스키마 자동 설계</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">배포 자동화</h3>
                <p className="text-gray-600">클라우드 배포부터 도메인 연결까지 원클릭 자동화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}