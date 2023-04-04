import React from "react";

import Card from "../../Global/Card";
import { useNavigate } from "react-router-dom";

function Featured({ isLoading, products ,singleProducts ,getInfoId}) {
  const navigate = useNavigate()

  
  const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <>
      <h1 className="font-bold text-[25px] max-md:text-center mb-4 mt-8">
        Featured
      </h1>
      <div className="grid grid-cols-12 bg-[#BEDCAB] px-5 gap-4 rounded-sm mb-8">
  {randomProducts.map((product)=> (
    <Card
    onClick={()=>{
      navigate(`filter/${product.category}/${product.id}`)
    }}
      isRate={true}
      key={product.id}
      cardImg={product.thumbnail}
      className="w-[20px]"
      cardTitle={product.title.substring(0, 20)}
      cardPrice={product.price+" $"}
      // cardDiscount={"10%"}
    />
  ))}
</div>
      {/* <div className="my-4">
        <div className="relative text-center sm:flex flex-col">
          <img
            src={Banner}
            className="max-md:object-bottom object-cover rounded-sm max-md:h-[15vh]"
          />
          <div className="banner-desc flex justify-center flex-col absolute right-[15%] font-[400] top-[20%] text-white max-md:right-5">
            <h2 className="text-[30px] max-md:text-[20px]">
              CHOOSE YOUR FAVORITE
            </h2>
            <span className="text-[25px] max-md:text-[15px] font-[300]">
              Discount Up To 30%
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Featured;
