import styled from "styled-components";
import NavBar from "../../components/layout/NavBar";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import theme from "../../styles/Theme";
import SectionFour from "./SectionFour/SectionFour";
import SectionFive from './SectionFive/SectionFive';
import Footer from "../../components/layout/Footer";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto auto;
  padding: 0px 10px;

  @media (min-width: 1100px) {
    padding: 0px 20px;
  }
`

const BackgroundColor = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`

function HomePage() {
  return (
    <>
      <Container>
        <NavBar />
        <SectionOne />
        <SectionTwo />
      </Container>
      <BackgroundColor color={theme.colors.Pink}>
        <Container>
          <SectionThree />
        </Container>
      </BackgroundColor>
      <Container>
        <SectionFour />
      </Container>
      <BackgroundColor color={theme.colors.Pink}>
        <Container>
          <SectionFive />
        </Container>
      </BackgroundColor>
      <BackgroundColor color={theme.colors.SecondWhite}>
        <Container>
          <Footer />
        </Container>
      </BackgroundColor>
    </>
  )
}

export default HomePage;
