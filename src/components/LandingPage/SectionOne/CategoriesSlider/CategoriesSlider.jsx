import Carousel from "better-react-carousel";
import manImage from "/imgs/CategoriesSlider/man.png";
import womenImage from "/imgs/CategoriesSlider/women.png";
import healthImage from "/imgs/CategoriesSlider/health.png";
import beautyImage from "/imgs/CategoriesSlider/beauty.png";
import skinCareImage from "/imgs/CategoriesSlider/skincare.png";
import hairCareImage from "/imgs/CategoriesSlider/haircare.png";
function CategoriesSlider() {
  return (
    <div className="mt-8">
      <Carousel
        cols={6}
        rows={1}
        gap={10}
        loop
        showDots
        dotColorActive="#2DD253"
        dotColorInactive="#F1F1F1"
      >
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={manImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={womenImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={skinCareImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={beautyImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={hairCareImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={healthImage} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoriesSlider;
