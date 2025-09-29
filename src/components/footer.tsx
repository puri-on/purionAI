import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from "lucide-react";
import { useModal } from "@/contexts/modal-context";
<img 
  src="/purion-logo-title_1749389762872.png" 
  alt="Purion Logo" 
  className="h-8 md:h-10" 
/>
export default function Footer() {
  const { openConsultationModal } = useModal();

  const services = [
    { name: "콘텐츠 자동화", href: "/content-automation" },
    { name: "마케팅 자동화", href: "/marketing" },
    { name: "웹/앱 개발", href: "/web-app-dev" },
    { name: "데이터 분석 도구", href: "/data-tools" },
  ];

  const company = [
    { name: "회사 소개", href: "/about" },
    { name: "서비스", href: "/#features" },
    { name: "고객 지원", href: "/support" },
    { name: "보안", href: "/security" },
  ];

  const support = [
    { name: "문의하기", href: "/contact" },
    { name: "FAQ", href: "/support" },
    { name: "기술 지원", href: "/support" },
    { name: "파트너십", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/purion-logo-title_1749389762872.png" alt="퓨리온 AI 로고" className="h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PURION
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI 기반 비즈니스 자동화 솔루션으로 귀하의 비즈니스를 혁신하세요. 
              콘텐츠 생성부터 마케팅 자동화까지 포괄적인 AI 서비스를 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>manager@puritechlab.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>서울 성북구 상월곡동 화랑로19길 68 2층</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">회사</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">지원</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                onClick={openConsultationModal}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                무료 상담 신청
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; 2024 PURION AI. All rights reserved.</p>
            <p className="mt-1">
              <a href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</a>
              {" • "}
              <a href="/terms" className="hover:text-white transition-colors">이용약관</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}