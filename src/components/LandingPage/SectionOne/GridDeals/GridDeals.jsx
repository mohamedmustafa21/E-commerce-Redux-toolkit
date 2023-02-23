import Image from "/imgs/test.png";
import Image2 from "/imgs/test2.png";
import Image3 from "/imgs/test3.png";
import Image4 from "/imgs/test4.png";
import Image5 from "/imgs/test5.png";

export default function GridDeals() {
  return (
    <div className="grid grid-cols-4 mt-8 gap-2 mb-4">
      <div className="col-span-2 relative">
        <p className="absolute top-1/2 left-4 text-white">
          Lorem ipsum dolor sit amet.
        </p>
        <img src={Image} className="min-h-full" />
      </div>
      <div className="col-span-1 relative">
        <p className="absolute top-1/2 left-4 text-white">
          Lorem ipsum dolor sit amet.
        </p>
        <img src={Image4} className="min-h-full" />
      </div>
      <div className="col-span-1 row-span-2 relative">
        <p className="absolute top-1/2 left-4 text-white">
          Lorem ipsum dolor sit amet.
        </p>
        <img src={Image5} className="min-h-full" />
      </div>
      <div className="col-span-1 relative">
        <p className="absolute top-1/2 left-4 text-white">
          Lorem ipsum dolor sit amet.
        </p>
        <img src={Image3} className="min-h-full" />
      </div>
      <div className="col-span-2 min-h-full relative">
        <p className="absolute top-1/2 left-4 text-white">
          Lorem ipsum dolor sit amet.
        </p>
        <img src={Image2} className="min-h-full" />
      </div>
    </div>
  );
}
