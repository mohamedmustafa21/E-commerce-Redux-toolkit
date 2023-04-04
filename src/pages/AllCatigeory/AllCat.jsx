import React from 'react'
import { useLocation, useNavigate,NavLink } from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { getData,singleProducts } from '../../store/api.slice';
import { useEffect, useState } from 'react';
import Container from '../../components/Global/Container';
import SwiperCard from "../../components/Global/SwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, A11y, FreeMode,Navigation } from "swiper";
import  "./filterCat.css";



import CategoriesSlider from '../../components/Home/CategoriesSlider.jsx';
import "swiper/css";

function FilterCat() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {products,userPath,categoryFilter } = useSelector((state) => state.products)


  function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category.toUpperCase() === category.toUpperCase());
    // console.log(filteredProducts);
    dispatch({type: 'book/setCatFilter', payload: filteredProducts})

  }

  useEffect(() => {
    dispatch(getData()) 
  }, [dispatch])  

 

  const location = useLocation();

  useEffect(() => {
    dispatch({type: 'book/setUserPath', payload: location.pathname.slice(1)})
    
  }, [location, dispatch])



  const filteredProducts = userPath === "All"
    ? [...products].sort(() => Math.random() - 0.5)
    : [...products].sort((a, b) => {
        if (a.category.toUpperCase() === userPath.toUpperCase()) return -1;
        if (b.category.toUpperCase() === userPath.toUpperCase()) return 1;
        return 0;
      });
   
    
    
    
  return (
    <>
    <Container>
  <h1 className='font-[800] text-[20px] mt-5 ml-10'>{userPath}</h1>
 
  <Swiper
          slidesPerView={2}
          // grabCursor={true}
          navigation={true}
          

          // autoplay={{
          //   delay: 1200,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          // freeMode={true}
          loop={true}
          modules={[Keyboard, Autoplay, A11y, FreeMode,Navigation]}
          className="mySwiper"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <SwiperCard
             OnClickCardCategory={() => {
              console.log(`Clicked on category: ${product.category}`);
              filterProductsByCategory(product.category);
              navigate(`filter/${product.category}`)
              
            }}
                cardImg={product.thumbnail}
                // cardBrand={product.brand}
                // cardTitle={product.title}
                
                // rating={product.rating}
                // cardPrice={product.price + " $"}
                  // ButtonText={"Buy"}
                btnClassName={"bg-[#5856d6] w-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
                onClickBtn={() => {
                  handleProductClick(product.id)
                 
                }}
                layer={product.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>

  
     
</Container>

<Container>
<h1 className='font-[800] text-[20px] mt-5 ml-10'>NEW ARRIVALS</h1>
<CategoriesSlider />
</Container>


    </>
 
  )
}

export default FilterCat;
