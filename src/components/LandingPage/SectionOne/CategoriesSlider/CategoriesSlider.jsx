import Carousel from "better-react-carousel";
import manImage from "/imgs/CategoriesSlider/man.png";
import womenImage from "/imgs/CategoriesSlider/women.png";
import healthImage from "/imgs/CategoriesSlider/health.png";
import beautyImage from "/imgs/CategoriesSlider/beauty.png";
import skinCareImage from "/imgs/CategoriesSlider/skincare.png";
import hairCareImage from "/imgs/CategoriesSlider/haircare.png";
function CategoriesSlider() {
  return (
    <div className="mt-5">
      <Carousel
        cols={6}
        rows={1}
        gap={10}
        scrollSnap={true}
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 3,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000
          }
        ]}
        showDots ={true}
        dotColorActive="#2DD253"
        dotColorInactive="#F1F1F1"
        

        
        
      >
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={manImage} className='rounded-[15px] max-md:w-full '/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={womenImage} className='rounded-[15px] max-md:w-full'/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={skinCareImage} className='rounded-[15px] max-md:w-full'/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={beautyImage} className='rounded-[15px] max-md:w-full'/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={hairCareImage} className='rounded-[15px] max-md:w-full'/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"260px"} height={"245px"} src={healthImage} className='rounded-[15px] max-md:w-full'/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CategoriesSlider;
