import manImage from "../../assets/imgs/Home/CategoriesSlider/man.png";
import womenImage from "../../assets/imgs/Home/CategoriesSlider/women.png";
import healthImage from "../../assets/imgs/Home/CategoriesSlider/health.png";
import beautyImage from "../../assets/imgs/Home/CategoriesSlider/beauty.png";
import skinCareImage from "../../assets/imgs/Home/CategoriesSlider/skincare.png";
import hairCareImage from "../../assets/imgs/Home/CategoriesSlider/haircare.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "../Global/SwiperCard";
import "swiper/css";

import { Keyboard, Autoplay, A11y, FreeMode } from "swiper";

function CategoriesSlider() {
  return (
    <div className="mt-8">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        freeMode={true}
        loop={true}
        modules={[Keyboard, Autoplay, A11y, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard cardImg={manImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={womenImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={healthImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={beautyImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={skinCareImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={hairCareImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={hairCareImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={hairCareImage} cardTitle="test" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard cardImg={hairCareImage} cardTitle="test" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
