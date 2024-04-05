import styled from "styled-components";
import NavBar from "../../components/layout/NavBar";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import theme from "../../styles/Theme";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto auto;
  padding: 0px 10px;

  @media (min-width: 1100px) {
    padding: 0px 20px;
  }
`

const BackgroundColor = styled.div`
  background-color: ${theme.colors.Pink};
`

function HomePage() {
  return (
    <>
      <Container>
        <NavBar />
        <SectionOne />
        <SectionTwo />
      </Container>
      <BackgroundColor>
        <Container>
          <SectionThree />
        </Container>
      </BackgroundColor>
    </>
  )
}

export default HomePage;
