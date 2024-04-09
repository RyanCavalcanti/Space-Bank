import Image from "../../../components/common/Image";
import iconCheck from '../../../assets/Icon/arrowCheck.webp';
import card from '../../../assets/Images/Card.webp';
import iconApple from '../../../assets/Icon/Icon-Apple.webp';
import iconAndroid from '../../../assets/Icon/Icon-PlayStore.webp';
import styled from "styled-components";
import theme from "../../../styles/Theme";
import { ContainerHome, ContainerProps } from "../../../styles/GlobalStyle";
import Anchor from "../../../components/common/Anchor";
import Title from "../../../components/common/Title";
import Paragraph from "../../../components/common/Paragraph";

const SectionStyles = styled(ContainerHome)<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1099px) {
    margin-top: 50px;
  }
`

const ContainerSection = styled.div`
  max-width: 100%;
`

const UlStyles = styled.ul`
  list-style-type: none;
  display: grid;
  padding: 0;
  gap: 10px;

  & > li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
  }
  
  @media (min-width: 1099px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }

  @media (max-width: 1099px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }
`;

const StyledIcon = styled.img`
  width: 26px;
  height: 26px;
`;

const ContainerBtnStyles = styled.div`
 display: flex;
 justify-content: space-between;
 
 @media(max-width: 1099px) {
  flex-direction: column;
 }

 & > aside {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0 110px;

  @media(max-width: 1099px) {
  margin-top: 20px;
 }
 }
`;

const ImagemStyles = styled.nav`
    display: none;
  @media(min-width: 1100px){
    display: block;
  }
`;

function SectionOne() {
  return (
    <SectionStyles as="section">
        <ContainerSection>
          <header>
            <Title as="h1" color={theme.colors.Red} fontWeight={700}>SpaceBank</Title>
            <Title as="h2" fontWeight={600}>seu universo financeiro.</Title>
          </header>

          <article>
            <Title as="h3">Com SpaceBank, você pode realizar transferências bancárias com zero taxa e pagar suas contas.</Title>

            <UlStyles>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <Paragraph fontWeight={600}>Transferência instantânea</Paragraph>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <Paragraph fontWeight={600}>Pagamentos em todo o mundo</Paragraph>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <Paragraph fontWeight={600}>Sem taxas absurdas</Paragraph>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <Paragraph fontWeight={600}>100% pensando em você</Paragraph>
              </li>
            </UlStyles>

            <ContainerBtnStyles>
              <Anchor href="/register" variant="secondary" style={{ width: '100%' }}>Abrir uma conta</Anchor>
              <aside>
                <Anchor href="#" variant="none"><Image img={iconApple} alt="Apple" /></Anchor>
                <Anchor href="#" variant="none"><Image img={iconAndroid} alt="Android" /></Anchor>
              </aside>
            </ContainerBtnStyles>
          </article>
        </ContainerSection>

        <ImagemStyles>
          <Image img={card} alt="Card" />
        </ImagemStyles>
    </SectionStyles>
  )
}

export default SectionOne;
