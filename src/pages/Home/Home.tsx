import NavBar from "../../components/layout/NavBar";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from './SectionFive/SectionFive';
import Footer from "../../components/layout/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  )
}

export default HomePage;
