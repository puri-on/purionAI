import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Contact() {
  // Formspree form ID (대시보드에서 확인)
  const [state, handleSubmit] = useForm("xpwrqnjk");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">상담 신청이 접수되었습니다 🎉</h1>
        <p className="text-gray-600">곧 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">무료 상담 신청</h1>
          <p className="text-xl text-gray-600">
            퓨리온 AI 전문가와 1:1 상담을 통해 맞춤형 AI 솔루션을 확인하세요.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">상담 신청서</h2>

            {/* ✅ Formspree 연결 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름 + 회사명 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">이름 *</label>
                  <Input id="name" type="text" name="name" required />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">회사명</label>
                  <Input id="company" type="text" name="company" />
                </div>
              </div>

              {/* 이메일 + 연락처 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">이메일 *</label>
                  <Input id="email" type="email" name="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">연락처</label>
                  <Input id="phone" type="tel" name="phone" />
                </div>
              </div>

              {/* 관심 서비스 */}
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="content-automation">콘텐츠 자동화</option>
                  <option value="web-app-dev">웹앱 개발</option>
                  <option value="marketing">마케팅 자동화</option>
                  <option value="data-analytics">데이터 분석</option>
                  <option value="customer-support">고객 지원</option>
                  <option value="security">보안 솔루션</option>
                  <option value="custom">맞춤형 상담</option>
                </select>
              </div>

              {/* 문의 내용 */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">문의 내용 *</label>
                <Textarea id="message" name="message" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* 제출 버튼 */}
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                {state.submitting ? "전송 중..." : "무료 상담 신청하기"}
                {!state.submitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
