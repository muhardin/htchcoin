"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const HeaderSlide = () => {
  const slides = [
    "/images/header-slide/slider_one-cover.png",
    "/images/header-slide/slider_two-cover.png",
    "/images/header-slide/slider_three-cover.png",
  ];

  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Image
                className="object-fill rounded-2xl"
                src={slide}
                alt={`Slide ${index + 1}`}
                width={1336}
                height={420}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlide;
