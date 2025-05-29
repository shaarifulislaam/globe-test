"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const LogoSliderSection = () => {
  return (
    <section className="xl:pt-[70px] md:pt[65px] pt-[60px] xl:pb-[100px] md:pb-[85px] pb-[65px]">
      <Swiper
        spaceBetween={25}
        slidesPerView="auto"
        allowTouchMove={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            spaceBetween: 60,
          },
        }}
        className="slide-auto"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="img-container">
              <img src={item.path} alt="logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LogoSliderSection;

const sliderData = [
  { id: 1, path: "/assets/logo1.svg" },
  { id: 2, path: "/assets/logo2.svg" },
  { id: 3, path: "/assets/logo3.svg" },
  { id: 4, path: "/assets/logo3.svg" },
  { id: 5, path: "/assets/logo5.svg" },
  { id: 6, path: "/assets/logo1.svg" },
  { id: 7, path: "/assets/logo3.svg" },
  { id: 8, path: "/assets/logo2.svg" },
  { id: 9, path: "/assets/logo4.svg" },
  { id: 10, path: "/assets/logo5.svg" },
  { id: 11, path: "/assets/logo2.svg" },
  { id: 12, path: "/assets/logo1.svg" },
  { id: 13, path: "/assets/logo3.svg" },
  { id: 14, path: "/assets/logo4.svg" },
  { id: 15, path: "/assets/logo5.svg" },
  { id: 16, path: "/assets/logo4.svg" },
  { id: 17, path: "/assets/logo3.svg" },
  { id: 18, path: "/assets/logo2.svg" },
  { id: 19, path: "/assets/logo1.svg" },
  { id: 20, path: "/assets/logo5.svg" },
];
