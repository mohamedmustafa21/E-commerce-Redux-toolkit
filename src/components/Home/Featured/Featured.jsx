import React from "react";
import Product1 from "./imgs/Untitled-12_2-removebg-preview.png";
import Product2 from "./imgs/Untitled-13_1-removebg-preview.png";
import Product3 from "./imgs/Untitled-14_2-removebg-preview.png";
import Product4 from "./imgs/Untitled-15_1-removebg-preview.png";
import Product5 from "./imgs/Untitled-16_1-removebg-preview.png";
import Product6 from "./imgs/Untitled-17_1-removebg-preview.png";
import Banner from "./imgs/Untitled-1-Recovered 1.png";
import Card from "../../Global/Card";

function Featured() {
  return (
    <>
      <h1 className="font-bold text-[25px] max-md:text-center mb-4 mt-8">
        Featured
      </h1>
      <div className="grid grid-cols-12 bg-[#BEDCAB] px-5 gap-4 rounded-sm mb-8">
        <Card
          cardImg={Product1}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />
        <Card
          cardImg={Product2}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />{" "}
        <Card
          cardImg={Product3}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />{" "}
        <Card
          cardImg={Product4}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />{" "}
        <Card
          cardImg={Product5}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />
        <Card
          cardImg={Product6}
          cardTitle={"Lenovo idea pad 315ITL6 15.6 Inch"}
          cardPrice={"EGP 19699.00"}
          cardDiscount={"10%"}
        />
      </div>
      <div className="my-4">
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
      </div>
    </>
  );
}

export default Featured;
