export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            고객 지원
          </h1>
          <p className="text-xl text-gray-600">
            24시간 AI 챗봇과 전문가 팀이 함께하는 완벽한 고객 서비스
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            지원 서비스
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">AI 챗봇 지원</h3>
                <p className="text-gray-600">24시간 언제든지 즉시 답변을 받을 수 있는 AI 챗봇</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">전문가 상담</h3>
                <p className="text-gray-600">복잡한 문제는 경험 많은 전문가가 직접 해결</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">온보딩 프로그램</h3>
                <p className="text-gray-600">신규 사용자를 위한 단계별 가이드와 교육</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">기술 문서</h3>
                <p className="text-gray-600">상세한 API 문서와 튜토리얼로 빠른 문제 해결</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              문의하기
            </h3>
            <p className="text-blue-700 mb-4">
              궁금한 점이 있으시면 언제든지 연락주세요.
            </p>
            <div className="space-y-2 text-sm text-blue-600">
              <p>📧 이메일: support@purion.ai</p>
              <p>📞 전화: 02-1234-5678</p>
              <p>💬 라이브 채팅: 웹사이트 우하단 채팅 버튼</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}