import Image from "../../../components/common/Image/Image";
import Cards from '../../../assets/Images/Cards.webp';
import styled from "styled-components";
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';
import Anchor from "../../../components/common/Anchor/Anchor";
import Title from "../../../components/common/Title/Title";
import Paragraph from "../../../components/common/Paragraph/Paragraph";

const SectionStyle = styled(ContainerHome)<ContainerProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 50px;
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
      <Title as="h2" fontWeight={600}>Cartão perfeito para suas necessidades.</Title>
      <Paragraph marginTop={'24px'}>Encontre o cartão perfeito para suas necessidades financeiras. Seja para viagens ou compras do dia a dia, temos uma opção que se adapta a você.</Paragraph>
      <ImageBox>
        <Image img={Cards} alt="Cards Space Bank" />
      </ImageBox>
      <Anchor href="/register" variant="secondary">Abrir uma conta</Anchor>
    </SectionStyle>
  )
}

export default SectionFour;
