import { Star } from "lucide-react";

const testimonials = [
  {
    name: "김대표",
    title: "테크스타트업 CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "퓨리온 AI 덕분에 콘텐츠 제작 시간이 80% 단축되었습니다. 이제 더 중요한 전략 업무에 집중할 수 있어요.",
  },
  {
    name: "박마케터",
    title: "마케팅 매니저", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b332b1c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "자동화된 마케팅 캠페인으로 전환율이 3배 증가했습니다. ROI가 눈에 띄게 개선되었어요.",
  },
  {
    name: "이개발자",
    title: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "AI 기반 코드 생성으로 개발 속도가 획기적으로 빨라졌습니다. 품질도 전혀 떨어지지 않아요.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            고객 성공 사례
          </h2>
          <p className="text-xl text-gray-600">
            퓨리온 AI와 함께 성공한 기업들의 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg fade-in">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} portrait`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
