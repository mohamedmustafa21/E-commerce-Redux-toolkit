import Container from "../../components/Global/Container/Container";
import Hero from "../../components/LandingPage/HeroSection/Hero";
import LandingSectionOne from "../../components/LandingPage/SectionOne/LandingSectionOne";

function LandingPage() {
  return (
    <>
     
        <Hero/>
        <Container>
        <LandingSectionOne />
      </Container>
    </>
  );
}

export default LandingPage;
