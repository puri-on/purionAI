export default function Security() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            보안 및 개인정보보호
          </h1>
          <p className="text-xl text-gray-600">
            엔터프라이즈급 보안으로 고객의 데이터와 개인정보를 안전하게 보호합니다
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            보안 정책
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">데이터 암호화</h3>
                <p className="text-gray-600">AES-256 암호화로 모든 데이터를 전송 및 저장 단계에서 보호</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">접근 제어</h3>
                <p className="text-gray-600">다단계 인증과 역할 기반 접근 제어로 무단 접근 차단</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">컴플라이언스</h3>
                <p className="text-gray-600">GDPR, ISO 27001, SOC 2 등 국제 보안 표준 준수</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">정기 보안 감사</h3>
                <p className="text-gray-600">외부 보안 전문기관의 정기적인 보안 감사 실시</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                🔒 개인정보 처리방침
              </h3>
              <p className="text-green-700 text-sm">
                퓨리온 AI는 개인정보보호법을 엄격히 준수하며, 고객의 개인정보를 수집 목적 외에는 절대 사용하지 않습니다.
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                🛡️ 데이터 보관 정책
              </h3>
              <p className="text-blue-700 text-sm">
                모든 데이터는 암호화되어 보관되며, 고객이 원할 경우 언제든지 데이터 삭제를 요청할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}