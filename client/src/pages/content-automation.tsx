export default function ContentAutomation() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            콘텐츠 자동화
          </h1>
          <p className="text-xl text-gray-600">
            AI로 콘텐츠 제작 과정을 완전 자동화하여 생산성을 극대화하세요
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">블로그 포스트 자동 생성</h3>
                <p className="text-gray-600">키워드만 입력하면 SEO 최적화된 고품질 블로그 글을 자동으로 생성</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">소셜미디어 콘텐츠</h3>
                <p className="text-gray-600">플랫폼별 특성에 맞춘 매력적인 소셜미디어 포스트 자동 제작</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">이메일 마케팅</h3>
                <p className="text-gray-600">개인화된 이메일 캠페인을 자동으로 설계하고 최적화</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900">다국어 번역</h3>
                <p className="text-gray-600">AI 번역으로 글로벌 시장을 위한 다국어 콘텐츠 제작</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}