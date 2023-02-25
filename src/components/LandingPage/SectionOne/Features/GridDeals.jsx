import Image from "/imgs/GridDeals/test.png";
import Image2 from "/imgs/GridDeals/test2.png";
import Image3 from "/imgs/GridDeals/test3.png";
import Image4 from "/imgs/GridDeals/test4.png";
import Image5 from "/imgs/GridDeals/test5.png";

export default function GridDeals() {
  return (
    <div className=" grid sm:grid-cols-4 mt-8 gap-2 mb-4 mx-auto max-md:w-[100%]">
      <div className="sm:col-span-2 relative  ">
        <div className="text absolute top-1/3  sm:block left-4 text-white">
          <p className="text-xl font-medium">Grab The Latest Styles</p>
          <p className="text-3xl font-bold">UP TO 30% OFF</p>
        </div>
        <img src={Image} className="min-h-full rounded-[15px]" />
      </div>
      <div className="col-span-1 relative ">
        <div className="text absolute top-1/4  sm:block left-4 text-black  ">
          <p className="text-xl font-medium ">FootWear</p>
          <p className="text-2xl font-bold">UP TO 50% OFF</p>
        </div>
        <img src={Image4} className="min-h-full  max-md:w-[100%] rounded-[15px]" />
      </div>
      <div className="col-span-1 sm:row-span-2 row-span-1 relative ">
        <div className="text absolute top-1/4  sm:block left-4 text-white">
          <p className="text-3xl font-medium">Watches</p>
          <p className="text-4xl font-normal">FROM 250EGP</p>
        </div>
        <img src={Image5} className="min-h-full  max-md:w-[100%] rounded-[15px]" />
      </div>
      <div className="col-span-1 relative">
        <div className="text absolute top-1/4  sm:block left-4 text-white">
          <p className="text-xl font-medium text-black">FootWear</p>
          <p className="text-2xl font-bold text-black">UP TO 50% OFF</p>
        </div>
        <img src={Image3} className="min-h-full  max-md:w-[100%] rounded-[15px]" />
      </div>
      <div className="sm:col-span-2 col-span-1 min-h-full relative ">
        <div className="text absolute top-1/4  sm:block left-4 text-white">
          <p className="text-xl font-medium text-black">FootWear</p>
          <p className="text-2xl font-bold text-black">UP TO 50% OFF</p>
        </div>
        <img src={Image2} className="min-h-full  max-md:w-[100%] rounded-[15px]" />
      </div>
    </div>
  );
}
