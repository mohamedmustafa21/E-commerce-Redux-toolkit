import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


function Hero({ isLoading, products ,singleProducts ,getInfoId}) {


  return (
    <>
      {isLoading ? (
        "Loading ..."
      ) : (
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          controller={true}
          freeMode={true}
          className="mySwiper w-full"
        >
          {products.map((product) => (
            <SwiperSlide className="relative" key={product.id}>
              <div className="flex items-center mb-3 p-3 justify-center h-[70vh] pt-14 bg-gradient-to-r from-[#B2F5C0] to-[white]">
                <div className="w-1/2 text-center">
                  <h1 className="font-[700] text-[25px]">
                    Up To <br /> <span className="text-[35px]"> 50% OFF</span>
                  </h1>
                  <button onClick={()=>getInfoId(product.id)} className="bg-[#2da252] font-[700] text-[#FEFBFB] p-2 rounded-[10px] text-[15px] mt-4">
                    SHOP NOW
                  </button>
                </div>
                <div className="w-1/2">
                  <img
                    className="object-contain rounded-[50%]  md:h-[60vh] w-full max-md:right-[50%] max-md:object-right-bottom"
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: '350px', height: '200px',border:'30px' }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Hero;
