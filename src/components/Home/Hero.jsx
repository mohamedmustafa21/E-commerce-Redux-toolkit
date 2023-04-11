import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

function Hero({ isLoading, products, singleProducts, getInfoId }) {
  const navigate = useNavigate();

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
         <div
  className={`relative bg-opacity-80 bg-green-500 bg-center bg-no-repeat flex items-center mb-3 p-3 justify-center h-[70vh]`}
  style={{
    backgroundImage: `url(${product.thumbnail})`,
    borderRadius:'30px',
  }}
>
  <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
  <div className="w-1/2 max-md:w-2/3  text-start relative z-10">
    <h1 className="font-[700] text-[40px] text-white max-md:flex-col  ">
      Up To <br /> <span className="text-[40px] max-md:text-[35px]"> 50% OFF</span>
    </h1>
    <p className="font-[700] text-[30px] text-white max-md:flex-col  ">{product.title}</p>
    <p className="font-[700] text-[20px] text-white max-md:flex-col  ">"{product.category}"</p>
    <button
      onClick={() => {
        console.log(product.category);
        navigate(`filter/${product.category}`);
        getInfoId(product.id);
      }}
      className="bg-[#2da252] font-[700] text-[#FEFBFB] p-3 rounded-[10px] max-md:p-1 text-[15px] mt-4 md:text-2xl md:mt-5"
    >
      SHOP NOW
    </button>
  </div>
  {/* <div className="w-1/2">
    <img
      className="object-left rounded-[50%] md:h-[60vh] w-full max-md:right-[50%] max-md:object-right-bottom"
      src={product.thumbnail}
      alt={product.title}
      style={{ width: "350px", height: "200px", border: "30px" }}
    />
  </div> */}
</div>

{/* هذا الكود يجعل النص أصغر عند عرض الموقع على شاشة محمولة (حجم الشاشة أصغر من 768 بكسل)، كما يحدد مسافة الفراغ بين النص والزر بشكل مختلف. يمكنك تعديل قيم الـ media queries والـ CSS classes بما يتناسب مع احتياجات موقعك. */}


            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Hero;
