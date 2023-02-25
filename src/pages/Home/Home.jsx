import Container from "../../components/Global/Container/Container";
import CategoriesSlider from "../../components/Home/CategoriesSlider";
import Featured from "../../components/Home/Featured/Featured";
import FeaturesContainer from "../../components/Home/Features/FeaturesContainer";
import GridDeals from "../../components/Home/GridDeals";
import Hero from "../../components/Home/Hero";
function Home() {
  return (
    <>
      <Hero />

      <Container>
        <CategoriesSlider />
        <FeaturesContainer />
        <GridDeals />
        <Featured />
      </Container>
    </>
  );
}
export default Home;
