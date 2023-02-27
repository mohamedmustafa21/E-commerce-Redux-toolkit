import Container from "../../components/Global/Container";
import Footer from "../../components/Global/Footer";
import CategoriesSlider from "../../components/Home/CategoriesSlider";
import FavBrands from "../../components/Home/FavBrands/FavBrands";
import Featured from "../../components/Home/Featured/Featured";
import FeaturesContainer from "../../components/Home/Features/FeaturesContainer";
import GridDeals from "../../components/Home/GridDeals";
import Hero from "../../components/Home/Hero";
import ShopCategory from "../../components/Home/ShopByCategory/ShopCategory";
import SkinCare from "../../components/Home/SkinCare/SkinCare";
import DealOfWeeks from './../../components/Home/DealOfWeek/DealOfWeeks';
function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CategoriesSlider />
        <FeaturesContainer />
        <GridDeals />
        <Featured />
        <SkinCare />
        <ShopCategory />
        <DealOfWeeks/>
        <FavBrands />
      </Container>
      <Footer />
    </>
  );
}
export default Home;
