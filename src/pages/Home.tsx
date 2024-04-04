import styled from "styled-components";
import NavBar from "../components/layout/NavBar";

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;

  @media (width: 1280px) {
    width: 1280px;
  }
`

function HomePage() {
  return (
    <Container>
      <NavBar />
    </Container>
  )
}

export default HomePage;
