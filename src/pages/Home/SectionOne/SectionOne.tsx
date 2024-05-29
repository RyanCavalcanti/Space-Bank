import Image from "../../../components/common/Image/Image";
import iconCheck from '../../../assets/Icon/arrowCheck.webp';
import card from '../../../assets/Images/Card.webp';
import iconApple from '../../../assets/Icon/Icon-Apple.webp';
import iconAndroid from '../../../assets/Icon/Icon-PlayStore.webp';
import theme from "../../../styles/Theme";
import Anchor from "../../../components/common/Anchor/Anchor";
import Title from "../../../components/common/Title/Title";
import Paragraph from "../../../components/common/Paragraph/Paragraph";
import { ContainerBtnStyles, ContainerSection, ImagemStyles, SectionStyles, StyledIcon, UlStyles } from "./SectionOne.styles";



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
