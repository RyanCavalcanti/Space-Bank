import Image from "../../../components/common/Image";
import Cards from '../../../assets/Images/Cards.webp';
import styled from "styled-components";
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';
import Anchor from "../../../components/common/Anchor";

const SectionStyle = styled(ContainerHome)<ContainerProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 50px;

  & > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    width: 45%;
    line-height: 120%;
    margin: 0;
    margin-bottom: 24px;

    @media (max-width: 1099px) {
      font-size: 1.8rem;
      width: 100%;
    }
  }

  & > p {
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    width: 55%;
    line-height: 160%;
    margin: 0;

    @media (max-width: 1099px) {
      width: 100%;
    }
  }
`

const ImageBox = styled.div`
  margin: 50px 20px 30px;
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    max-width: 500px; 
  }
`

function SectionFour() {
  return (
    <SectionStyle id="cartoes">
      <h2>Cartão perfeito para suas necessidades.</h2>
      <p>Encontre o cartão perfeito para suas necessidades financeiras. Seja para viagens ou compras do dia a dia, temos uma opção que se adapta a você.</p>
      <ImageBox>
        <Image img={Cards} alt="Cards Space Bank" />
      </ImageBox>
      <Anchor href="/register" variant="secondary">Abrir uma conta</Anchor>
    </SectionStyle>
  )
}

export default SectionFour;
