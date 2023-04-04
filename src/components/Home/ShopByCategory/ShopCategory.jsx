import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "../../Global/SwiperCard";
import "swiper/css";
import { Keyboard, Autoplay, A11y, FreeMode } from "swiper";
import {  useNavigate } from "react-router-dom";

function ShopCategory({isLoading, products ,singleProducts ,getInfoId}) {
  const navigate = useNavigate()

  function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category.toUpperCase() === category.toUpperCase());
    console.log(filteredProducts);
  }
  return (
    <>
    {isLoading ? (
      "Loading ..."
    ) : (
     <Swiper
            slidesPerView={2}
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
        {products.map((product) => (
           <SwiperSlide key={product.id}>
              
              <SwiperCard OnClickCardCategory={() => {
                  console.log(`Clicked on category: ${product.category}`);
                  console.log(product.category,product.id)
                  filterProductsByCategory(product.category);
                  navigate(`filter/${product.category}/${product.id}`)
                  
                }}  cardImg={product.thumbnail} cardBrand={product.brand} cardTitle={product.title} rating={product.rating} cardPrice={product.price + " $"} />
            </SwiperSlide>
        ))}
      </Swiper>
    )}
    </> 
    
  );
}

export default ShopCategory;
