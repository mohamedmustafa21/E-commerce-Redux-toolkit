import Container from "../../components/Global/Container/Container";
import CategoriesSlider from "../../components/LandingPage/CategoriesSlider";
import FeaturesContainer from "../../components/LandingPage/Features/FeaturesContainer";
import GridDeals from "../../components/LandingPage/GridDeals";
function LandingPage() {
  return (
    <>
      <Container>
        <CategoriesSlider />
        <FeaturesContainer />
        <GridDeals />
      </Container>
    </>
  );
}
export default LandingPage;

//! Done By Ammar
