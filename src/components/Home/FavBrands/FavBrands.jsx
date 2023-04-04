import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Global/Card";

function FavBrands({ products }) {
  const navigate = useNavigate()

  return (
    <>
    <h1 className="font-bold text-[25px] max-md:text-center mb-4 mt-8">
      Featured
    </h1>
    <div className="grid grid-cols-12 bg-[#BEDCAB] px-5 gap-4 rounded-sm mb-8">
        {products
          .filter((product) => product.category === "laptops")
          .slice(0, 6)
          .map((product) => (
            <Card
            onClick={()=>{
              navigate(`filter/${product.category}/${product.id}`)
            }}
              isRate={true}
              key={product.id}
              cardImg={product.thumbnail}
              cardBrand={"''"+product.brand +"''"}
              className="w-[20px]"
              cardTitle={product.title.substring(0, 20)}
              cardPrice={product.price + " $"}
              // cardDiscount={"10%"}
            />
          ))}
      </div>
   
  </>
  )
}

export default FavBrands