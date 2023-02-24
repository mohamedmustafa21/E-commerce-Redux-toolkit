import React from "react";
import HeroImg from "../../../Assets/Hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Hero() {
  return (
    <div>
      <Swiper
       modules={[Navigation, Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      
      controller={true}
      autoplay={true}
        freeMode = {true}
       
        className="mySwiper w-[100%] "
      >
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">Up To  <br /> <span className="text-[35px]"> 50% OFF</span></h1>
          <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">Up To  <br /> <span className="text-[35px]"> 50% OFF</span></h1>
          <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="object-cover w-full h-96  max-md:right-[50%]  max-md:object-right-bottom"
            src={HeroImg}
            alt="image slide 1"
          />
          <div className="absolute top-[40%] right-[70%] max-md:top-[40%] max-md:right-[10%] ">
            <h1 className="font-[700] text-[25px]">Up To  <br /> <span className="text-[35px]"> 50% OFF</span></h1>
          <button className="bg-[#A3BE23] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px]">SHOP NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
