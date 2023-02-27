import Container from "../../components/Global/Container";
import CategoriesSlider from "../../components/Home/CategoriesSlider";
import Featured from "../../components/Home/Featured/Featured";
import FeaturesContainer from "../../components/Home/Features/FeaturesContainer";
import GridDeals from "../../components/Home/GridDeals";
import Hero from "../../components/Home/Hero";
import ShopCategory from "../../components/Home/ShopByCategory.jsx/ShopCategory";
import SkinCare from "../../components/Home/SkinCare/SkinCare";
function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CategoriesSlider />
        <FeaturesContainer />
        <GridDeals />
        <Featured />
        <SkinCare/>
        <ShopCategory/>
      </Container>
    </>
  );
}
export default Home;
