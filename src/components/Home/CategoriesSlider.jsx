import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "../Global/SwiperCard";
import "swiper/css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from "../../store/api.slice";
import { useState } from 'react';
import { Dialog } from '@headlessui/react'
import "../../pages/AllCatigeory/AllCat"
import { Keyboard, Autoplay, A11y, FreeMode,Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';




function CategoriesSlider() {
  const navigate = useNavigate()
  
  
  const { isLoading, products,categoryFilter } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  function filterProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category.toUpperCase() === category.toUpperCase());
    console.log(filteredProducts);
  }
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

// Model When User Click Buy 
  
const [showModal,setShowModal] = useState({})

const [selectedProduct, setSelectedProduct] = useState(null);


  const handleProductClick = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setShowModal(selectedProduct)
    setSelectedProduct(selectedProduct);


  };
  useEffect((selectedProduct) => {
    setShowModal(selectedProduct)
    // console.log(showModal);
  }, [showModal]);




  return (
    <>
      {isLoading ? (
        "Loading ..."
      ) : (
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
        className="mySwiper mb-3"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <SwiperCard
                cardImg={product.thumbnail}
                layer={product.category}
                OnClickCardCategory={() => {
                  console.log(`Clicked on category: ${product.category}`);
                  filterProductsByCategory(product.category);
                  navigate(`filter/${product.category}`)
                  
                }}
                // cardBrand={product.brand}
                // cardTitle={product.title}
                // rating={product.rating}
                // cardPrice={product.price + " $"}
                // ButtonText={"Buy"}
                btnClassName={"bg-[#5856d6] w-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
                onClick={() => {
                  handleProductClick(product.id)
                 
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {selectedProduct && (
  <Dialog
  open={true}
  onClose={() => setSelectedProduct(null)}
  className="fixed z-10 inset-0 overflow-y-auto  flex items-center justify-center "
  enterFrom="opacity-0"
  enterTo="opacity-100"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
>
  <div className="flex relative items-center justify-center h-[50vh] max-w-[50%]">
    <Dialog.Overlay
      className="fixed inset-0 bg-black opacity-30 transition-opacity"
      aria-hidden="true"
    />

      
    <div className="bg-white rounded-lg overflow-hidden transform transition-all flex flex-col justify-center items-center">
    
    
    {/* Close Btn */}
    <div  onClick={() => setSelectedProduct(null)} className="closeIcon absolute top-0 right-0">
        <i className="fa-solid fa-circle-xmark p-2 cursor-pointer text-[2rem]"></i>
        </div>
     {/* End */}
     
      <div>
        <img src={selectedProduct.thumbnail} className="object-fill mt-2 rounded-md w-[250px]" alt="" />
      </div>
      <div className=" text-center">
        <h3 className="font-bold text-lg mb-2">{selectedProduct.title}</h3>
        <p className="text-gray-600">{selectedProduct.description}</p>
        <p className="text-black-600 font-[800]">Rating : <span className="text-[green] font-[800]">{selectedProduct.rating}</span></p>
      </div>

      <div className="p-4  flex items-center justify-between">
        <span className="text-xl font-bold">{selectedProduct.price}$</span>

        
      </div>
      <button
         
          className="px-3 py-2 mb-2 bg-[#5856d6] text-white rounded-md "
        >
          Buy <i className="fa-solid fa-cart-shopping"></i>
        </button>
    </div>
  </div>
</Dialog>

)}

      
    </>
  );
}

export default CategoriesSlider;