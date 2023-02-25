import CategoriesSlider from "./SectionOne/CategoriesSlider/CategoriesSlider";
import FeaturesContainer from "./SectionOne/Features/FeatureCards";
import GridDeals from "../LandingPage/SectionOne/Features/GridDeals";
import Container from "../Global/Container/Container";
import Featured from "./Featured/Featured";

function LandingSectionOne() {
  return (
    <>
      <Container>
        <CategoriesSlider />
        <FeaturesContainer />
        <GridDeals />
        <Featured/>
      </Container>
    </>
  );
}
export default LandingSectionOne;

//! Done By Ammar
