import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "최PM",
    title: "프로덕트 매니저",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "프로젝트 일정이 절반으로 줄었습니다. 퓨리온 AI 도입 이후 팀 효율이 확연히 올라갔어요.",
  },
  {
    name: "이디자이너",
    title: "UI 디자이너",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "디자인 툴 자동화 덕에 반복 업무가 사라졌습니다. 창의적인 일에 집중할 수 있어요.",
  },
  {
    name: "장팀장",
    title: "전략기획팀",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    content:
      "AI 자동화 리포트 덕분에 회의 준비 시간이 1/3로 줄었어요. 강력 추천합니다.",
  },
  {
    name: "김프리랜서",
    title: "콘텐츠 크리에이터",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "SNS 포스팅 자동화 기능이 신의 한 수였습니다. 하루 2시간은 벌었어요.",
  },
  {
    name: "오퍼레이터",
    title: "운영 매니저",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    content:
      "운영팀에서 매일 반복하던 업무가 자동화돼 팀 만족도가 높아졌습니다.",
  },
  {
    name: "이대표",
    title: "중소기업 대표",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    content:
      "퓨리온 AI는 저희 조직의 게임 체인저입니다. 더는 거대 기업 부럽지 않아요.",
  },
  {
    name: "최PM",
    title: "프로덕트 매니저",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "프로젝트 일정이 절반으로 줄었습니다. 퓨리온 AI 도입 이후 팀 효율이 확연히 올라갔어요.",
  },
  {
    name: "이디자이너",
    title: "UI 디자이너",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "디자인 툴 자동화 덕에 반복 업무가 사라졌습니다. 창의적인 일에 집중할 수 있어요.",
  },
  {
    name: "장팀장",
    title: "전략기획팀",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    content:
      "AI 자동화 리포트 덕분에 회의 준비 시간이 1/3로 줄었어요. 강력 추천합니다.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          고객 성공 사례
        </h2>
        <p className="text-lg text-gray-600">
          퓨리온 AI와 함께한 생생한 이야기
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
              <div className="flex items-center mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "{t.content}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
