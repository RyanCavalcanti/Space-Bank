import Image from "../../../components/common/Image";
import iconCheck from '../../../assets/Icon/arrowCheck.webp';
import card from '../../../assets/Images/Card.webp';
import iconApple from '../../../assets/Icon/Icon-Apple.webp';
import iconAndroid from '../../../assets/Icon/Icon-PlayStore.webp';
import styled from "styled-components";
import theme from "../../../styles/Theme";
import { ContainerHome, ContainerProps } from "../../../styles/GlobalStyle";
import Anchor from "../../../components/common/Anchor";

const SectionStyles = styled(ContainerHome)<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

const ContainerSection = styled.div`
  max-width: 100%;
`

const HeaderStyles = styled.header`
  & > h1 {
    font-size: 5.2rem;
    margin: 0px;
    color: ${theme.colors.Red};

    @media(max-width: 1099px) {
      font-size: 3.8rem;
    }

    @media(max-width: 480px) {
      font-size: 2.8rem;
    }
  }

  & > h2 {
    font-size: 3.8rem;
    margin: 0px;

    @media(max-width: 1099px) {
      font-size: 3.8rem;
    }

    @media(max-width: 480px) {
      font-size: 2.8rem;
    }
  }
`

const ArticleStyles = styled.article`
  & > h3 {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 20px 0 0;

    @media(max-width: 1099px) {
      font-weight: 400;
      font-size: 1.6rem;

    }

    @media(max-width: 480px) {
      font-size: 1.1rem;
    }
  }
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

    & > p{
      font-family: "Inter", sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0;
    }
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
          <HeaderStyles>
            <h1>SpaceBank</h1>
            <h2>seu universo financeiro.</h2>
          </HeaderStyles>

          <ArticleStyles>
            <h3>Com SpaceBank, você pode realizar transferências bancárias com zero taxa e pagar suas contas.</h3>

            <UlStyles>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <p>Transferência instantânea</p>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <p>Pagamentos em todo o mundo</p>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <p>Sem taxas absurdas</p>
              </li>
              <li>
                <StyledIcon src={iconCheck} alt="Icon Check" />
                <p>100% pensando em você</p>
              </li>
            </UlStyles>

            <ContainerBtnStyles>
              <Anchor href="/register" variant="secondary" style={{ width: '100%' }}>Abrir uma conta</Anchor>
              <aside>
                <Anchor href="#" variant="none"><Image img={iconApple} alt="Apple" /></Anchor>
                <Anchor href="#" variant="none"><Image img={iconAndroid} alt="Android" /></Anchor>
              </aside>
            </ContainerBtnStyles>
          </ArticleStyles>
        </ContainerSection>

        <ImagemStyles>
          <Image img={card} alt="Card" />
        </ImagemStyles>
    </SectionStyles>
  )
}

export default SectionOne;
