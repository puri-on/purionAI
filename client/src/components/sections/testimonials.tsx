import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "김지훈",
    title: "프로덕트 매니저",
    image: "/images/testimonial-1.png",
    content:
      "프로젝트 일정이 절반으로 줄었습니다.\n퓨리온 AI 도입 이후 팀 효율이 확연히 올라갔어요.",
  },
  {
    name: "박성민",
    title: "데이터 엔지니어",
    image: "/images/testimonial-2.png",
    content:
      "ETL 자동화 파이프라인 구축 덕에 반복 작업이 사라지고,\n고도화된 분석에만 집중할 수 있게 됐어요.",
  },
  {
    name: "이수정",
    title: "UI 디자이너",
    image: "/images/testimonial-3.png",
    content:
      "디자인 QA와 컴포넌트 반복 제작이 사라졌습니다.\n감성적인 UX에 몰입할 수 있어 만족도가 높아요.",
  },
  {
    name: "정영철",
    title: "전략기획실장",
    image: "/images/testimonial-4.png",
    content:
      "AI 기반 리포트 자동화 덕분에 매주 회의 준비 시간이 1시간 이상 줄었습니다.",
  },
  {
    name: "최윤호",
    title: "콘텐츠 마케터",
    image: "/images/testimonial-5.png",
    content:
      "SNS 포스팅 자동화 기능이 신의 한 수였습니다.\n하루 2시간을 절약하고도 품질이 훨씬 좋아졌어요.",
  },
  {
    name: "한상우",
    title: "운영 매니저",
    image: "/images/testimonial-6.png",
    content:
      "배송/CS 데이터 자동화 도입 이후 실수율이 현저히 줄었고,\n고객 불만도 크게 감소했습니다.",
  },
  {
    name: "윤소라",
    title: "마케팅 디렉터",
    image: "/images/testimonial-7.png",
    content:
      "캠페인 성과 분석과 자동 리포트 시스템으로\n팀 전반의 전략 실행력이 크게 향상됐습니다.",
  },
  {
    name: "정혜원",
    title: "서비스 기획자",
    image: "/images/testimonial-8.png",
    content:
      "사용자 피드백 수집 및 정리까지 자동화되면서\n제품 개선 사이클이 빨라졌어요.",
  },
  {
    name: "이도윤",
    title: "스타트업 대표",
    image: "/images/testimonial-9.png",
    content:
      "퓨리온 AI는 우리 회사의 비서 같은 존재입니다.\n인력 부족 문제를 기술로 해결했어요.",
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
        autoHeight={false}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg h-full min-h-[200px] flex flex-col justify-between pt-[15px] pb-[15px] pl-[24px] pr-[24px] ml-[0px] mr-[0px] mt-[10px] mb-[10px]">
              <div className="flex items-center mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
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
      <div className="custom-swiper-pagination mt-8 flex justify-center"></div>
    </section>
  );
}
