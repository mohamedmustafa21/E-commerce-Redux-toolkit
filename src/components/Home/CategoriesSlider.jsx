import Carousel from "better-react-carousel";
import manImage from "../../assets/imgs/Home/CategoriesSlider/man.png";
import womenImage from "../../assets/imgs/Home/CategoriesSlider/women.png";
import healthImage from "../../assets/imgs/Home/CategoriesSlider/health.png";
import beautyImage from "../../assets/imgs/Home/CategoriesSlider/beauty.png";
import skinCareImage from "../../assets/imgs/Home/CategoriesSlider/skincare.png";
import hairCareImage from "../../assets/imgs/Home/CategoriesSlider/haircare.png";

function CategoriesSlider() {
  const responsiveLayout = [
    {
      breakpoint: 767,
      cols: 6,
      rows: 1,
      gap: 10,
      loop: true,
      autoplay: 1000,
    },
  ];
  return (
    <div className="mt-8">
      <Carousel
        cols={6}
        rows={1}
        // gap={5}
        showDots
        scrollSnap
        loop
        autoPlay
        dotColorActive="#2DD253"
        dotColorInactive="#F1F1F1"
        responsiveLayout={responsiveLayout}
      >
        <Carousel.Item>
          <img src={manImage} className="max-w-full max-h-full min-w-full" />
          <p className="text-center font-bold mt-2">Men's Fashion</p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={womenImage} className="max-w-full max-h-full min-w-full" />
          <p className="text-center font-bold mt-2">Women's Fashion</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={skinCareImage}
            className="max-w-full max-h-full min-w-full "
          />
          <p className="text-center font-bold mt-2">SkinCare</p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={beautyImage} className="max-w-full max-h-full min-w-full" />
          <p className="text-center font-bold mt-2">Beauty</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={hairCareImage}
            className="max-w-full max-h-full min-w-full"
          />
          <p className="text-center font-bold mt-2">HairCare</p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={healthImage} className="max-w-full max-h-full min-w-full" />
          <p className="text-center font-bold mt-2">Health</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoriesSlider;
