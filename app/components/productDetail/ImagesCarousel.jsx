import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ImagesCarousel({ images }) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full h-[542px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full max-w-[896px] h-[542px] object-contain mx-auto"
            />
          </SwiperSlide>
        ))}

        <button
          className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 
            bg-[#1F3044] text-white rounded-full w-10 h-10 flex items-center justify-center
            shadow-md hover:bg-[#324a66] transition-all duration-200 z-10
            sm:w-8 sm:h-8 bg-opacity-20 md:bg-opacity-50"
        >
          <i className="ri-arrow-left-s-line text-[20px] sm:text-[16px]"></i>
        </button>

        <button
          className="custom-next absolute right-2 top-1/2 -translate-y-1/2 
            bg-[#1F3044] text-white rounded-full w-10 h-10 flex items-center justify-center
            shadow-md hover:bg-[#324a66] transition-all duration-200 z-10
            sm:w-8 sm:h-8 bg-opacity-20 md:bg-opacity-50"
        >
          <i className="ri-arrow-right-s-line text-[20px] sm:text-[16px]"></i>
        </button>
      </Swiper>
    </div>
  );
}
