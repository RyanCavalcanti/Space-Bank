import Image from "../../../components/common/Image/Image";
import smartphoneDesktop from '../../../assets/Images/Smartphone.webp';
import smartphone from '../../../assets/Images/Smartphone-CellPhone.webp';
import iconMoney from '../../../assets/Icon/IconMoney.webp';
import iconSmartphone from '../../../assets/Icon/IconSmartphone.webp';
import iconHappy from '../../../assets/Icon/IconHappy.webp';
import { useState, useEffect } from "react";
import Title from "../../../components/common/Title/Title";
import Paragraph from "../../../components/common/Paragraph/Paragraph";
import Span from "../../../components/common/Span/Span";
import { ArticleContainer, ArticleStyles, LinePink, SectionStyles } from "./SectionTwo.styles";

interface BoxInfoProps {
  img: string;
  alt: string;
  title: string;
  text: string;
  addMargin: boolean;
}

export const BoxInfo = ({ img, alt, title, text, addMargin }: BoxInfoProps) => {
  return (
    <ArticleStyles>
      <ArticleContainer>
        <Image img={img} alt={alt} style={{ width: '50px', height: '50px'}}/>
        <div>
          <h3>{title}</h3>
          <Paragraph>{text}</Paragraph>
        </div>
      </ArticleContainer>
      <LinePink addMargin={addMargin} />
    </ArticleStyles>
  );
};

function getSmartphoneImage(): string {
  return window.innerWidth <= 991 ? smartphone : smartphoneDesktop;
}

function SectionTwo() {
  const [smartphoneImage, setSmartphoneImage] = useState<string>(getSmartphoneImage);

  useEffect(() => {
    function handleResize() {
      setSmartphoneImage(getSmartphoneImage());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SectionStyles as='section' id="contadigital">

      <div>
        <Image img={smartphoneImage} alt="Dashboard Smartphone SpaceBank" />
      </div>

      <div>

        <header>
          <Title as="h2" fontWeight={600}>Abra sua conta <Span>gratuita</Span></Title>
          <Paragraph fontWeight={600} marginBottom={'50px'}>Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências para todos os bancos sem pagar nada.</Paragraph>
        </header>

        <BoxInfo img={iconMoney} alt="Icon Money" title="Seu dinheiro rendendo mais" text="Rendem mais que a poupança e você resgata quando quiser." addMargin={true} />
        <BoxInfo img={iconSmartphone} alt="Icon Smartphone" title="Conta digital 100% grátis" text="Transferências, boletos de depósito e outros serviços gratuitos." addMargin={true} />
        <BoxInfo img={iconHappy} alt="Icon Happy" title="Cartão sem anuidade" text="Conta digital com cartão de crédito sem anuidade e sem complicação." addMargin={false} />

      </div>

    </SectionStyles>
  );
}

export default SectionTwo;
