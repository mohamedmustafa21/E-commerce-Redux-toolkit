import Product1 from "./imgs/Untitled-12_2-removebg-preview.png";
import Product2 from "./imgs/Untitled-13_1-removebg-preview.png";
import Product3 from "./imgs/Untitled-14_2-removebg-preview.png";
import Product4 from "./imgs/Untitled-15_1-removebg-preview.png";
import Product5 from "./imgs/Untitled-16_1-removebg-preview.png";
import Product6 from "./imgs/Untitled-17_1-removebg-preview.png";
import Card from "../../Global/Card";
import { useNavigate } from "react-router-dom";

function SkinCare({ isLoading, products, singleProducts, getInfoId }) {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-bold text-[25px] max-md:text-center mb-4 mt-8">
        Skin Care
      </h1>
      <div className="grid grid-cols-12 bg-[#BEDCAB] px-5 gap-4 rounded-sm mb-8">
        {products
          .filter((product) => product.category === "skincare")
          .slice(0, 6)
          .map((product) => (
            <Card
            onClick={()=>{
              navigate(`filter/${product.category}/${product.id}`)
            }}
              isRate={true}
              key={product.id}
              cardImg={product.thumbnail}
              className="w-[20px]"
              cardTitle={product.title.substring(0, 20)}
              cardPrice={product.price + " $"}
              // cardDiscount={"10%"}
            />
          ))}
      </div>
    </>
  );
}

export default SkinCare;
