import React from "react";
import HeroImg from "../../../Assets/Hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        controller={true}
        freeMode={true}
        className="mySwiper w-[100%] "
      >
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">
              Up To <br /> <span className="text-[35px]"> 50% OFF</span>
            </h1>
            <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">
              Up To <br /> <span className="text-[35px]"> 50% OFF</span>
            </h1>
            <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">
              Up To <br /> <span className="text-[35px]"> 50% OFF</span>
            </h1>
            <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
