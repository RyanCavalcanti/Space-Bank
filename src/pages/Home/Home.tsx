import styled from "styled-components";
import NavBar from "../../components/layout/NavBar";
import SectionOne from "./SectionOne/SectionOne";

const Container = styled.div`
  width: 100%;
  padding: 0px 10px;

  @media (min-width: 992px) {
    padding: 0px 20px;
  }
`

function HomePage() {
  return (
    <Container>
      <NavBar />
      <SectionOne />
    </Container>
  )
}

export default HomePage;
