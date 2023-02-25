import React from "react";
import Product1 from "./imgs/Untitled-12_2-removebg-preview.png";
import Product2 from "./imgs/Untitled-13_1-removebg-preview.png";
import Product3 from "./imgs/Untitled-14_2-removebg-preview.png";
import Product4 from "./imgs/Untitled-15_1-removebg-preview.png";
import Product5 from "./imgs/Untitled-16_1-removebg-preview.png";
import Product6 from "./imgs/Untitled-17_1-removebg-preview.png";
import Banner from "./imgs/Untitled-1-Recovered 1.png";

function Featured() {
  return (
    <>
      <h1 className="font-bold text-[25px] max-md:text-center mb-4 mt-8">
        Featured
      </h1>
      <div className="grid grid-cols-12  bg-[#BEDCAB] px-5 gap-4 rounded-[15px] mb-8">
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5 flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product1} className="object-cover" alt="" />
          <div className="product-details">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5  flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product2} className="h-[50%]  object-cover " alt="" />
          <div className="product-deatils   ">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5  flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product3} className="h-[50%]  object-cover " alt="" />
          <div className="product-deatils   ">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5  flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product4} className="h-[50%]  object-cover " alt="" />
          <div className="product-deatils   ">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5  flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product5} className="h-[50%]  object-cover " alt="" />
          <div className="product-deatils   ">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
        <div className="relative max-md:p-2 col-span-2 max-md:col-span-12 bg-white px-5  flex justify-center flex-col text-center mt-4 mb-4 rounded-[15px]">
          <img src={Product6} className="h-[50%]  object-cover " alt="" />
          <div className="product-deatils   ">
            <div className="rate text-[#EECA16]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <h4 className="title">Lenovo idea pad 315ITL6 15.6 Inch</h4>
            <strong>EGP 19699.00</strong>
          </div>
          <span className="absolute text-[white] max-md:opacity-[.5] bg-[#EECA16] top-[5%] max-md:w-[35%] rounded-r-[15px] left-0 p-2 w-[4rem]">
            10%
          </span>
        </div>
      </div>
      <div className="w-full mt-3 mb-4">
        <div className="relative text-center sm:flex flex-col">
          <img
            src={Banner}
            className="max-md:object-bottom rounded-[5px] max-md:h-[20vh]"
            alt=""
          />
          <div className="banner-desc flex justify-center flex-col absolute right-[15%] font-[400] top-[20%] text-white max-md:right-5">
            <h2 className="text-[30px] max-md:text-[15px] ">
              CHOOSE YOUR FAVORITE
            </h2>
            <span className="text-[25px] max-md:text-[13px] font-[300]">
              Discount <br /> Up To 30%
            </span>
          </div>
          <button className="absolute right-[10%] max-md:right-[25%] p-2 top-[70%] rounded-[5px] bg-[#8BCA5F] max-md:w-[70px] max-md:text-[10px] text-white">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Featured;