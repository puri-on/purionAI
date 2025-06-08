
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "콘텐츠 자동화",
    "웹/앱 개발",
    "마케팅 자동화",
    "데이터 분석",
    "고객 지원",
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "#" },
    { name: "Twitter", icon: "fab fa-twitter", href: "#" },
    { name: "Facebook", icon: "fab fa-facebook-f", href: "#" },
    { name: "Instagram", icon: "fab fa-instagram", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4 font-inter">퓨리온 AI</div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              AI 자동화 기술로 비즈니스의 미래를 혁신합니다. 더 스마트하고
              효율적인 업무 환경을 만들어보세요.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "Tistory",
                  href: "https://purion.tistory.com/",
                  icon: "fas fa-blog",
                },
                {
                  name: "Threads",
                  href: "https://www.threads.com/@purion.tech",
                  icon: "fab fa-instagram",
                },
                {
                  name: "YouTube",
                  href: "https://www.youtube.com/@퓨리온_AI/videos",
                  icon: "fab fa-youtube",
                },
                {
                  name: "Website",
                  href: "https://www.puritechlab.com",
                  icon: "fas fa-globe",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-light transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">서비스</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">연락처 정보</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-blue" />
                <div>
                  <p className="text-gray-300">전화 상담</p>
                  <p className="text-gray-300">02-1234-5678</p>
                  <p className="text-gray-400 text-sm">평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-blue" />
                <div>
                  <p className="text-gray-300">이메일</p>
                  <a
                    href="mailto:manager@puritechlab.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    manager@puritechlab.com
                  </a>
                  <p className="text-gray-400 text-sm">24시간 내 답변</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 text-brand-blue">💬</div>
                <div>
                  <p className="text-gray-300">라이브 채팅</p>
                  <p className="text-gray-400 text-sm">웹사이트 우하단 채팅 버튼</p>
                  <p className="text-gray-400 text-sm">실시간 상담 가능</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-blue mt-1" />
                <div>
                  <p className="text-gray-300">오피스</p>
                  <span className="text-gray-300">
                    서울 성북구 상월곡동 화랑로19길 68 2층
                    <br />
                    퓨리테크랩
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 퓨리온 AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                이용약관
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome for social icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </footer>
  );
}
