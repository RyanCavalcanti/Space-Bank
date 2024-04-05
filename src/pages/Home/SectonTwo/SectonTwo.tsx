import Image from "../../../components/common/Image";
import theme from "../../../styles/Theme";
import smartphoneDesktop from '../../../assets/Images/Smartphone.webp';
import smartphone from '../../../assets/Images/Smartphone-CellPhone.webp';
import iconMoney from '../../../assets/Icon/IconMoney.webp';
import iconSmartphone from '../../../assets/Icon/IconSmartphone.webp';
import iconHappy from '../../../assets/Icon/IconHappy.webp';
import styled from "styled-components";
import { useState, useEffect } from "react";

const SectionStyles = styled.section`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 100px;

  @media(max-width: 992px) {
    flex-direction: column;
  }
`;

const HeaderStyles = styled.header`
  & > h2 {
    font-size: 3.2rem;
    margin: 0;
    margin-bottom: 20px;

    @media(max-width: 992px) {
      font-size: 1.6rem;
      text-align: center;
    }

    & > span {
      color: ${theme.colors.Red};
    }
  }

  & > p {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    margin: 0;
    margin-bottom: 50px;

    @media(max-width: 992px) {
      font-weight: 500;
      text-align: center;
    }
  }
`;

const ArticleStyles = styled.article`
  display: flex;
  flex-direction: column;
`;

const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > div {
    & > h3 {
      font-family: "Inter", sans-serif;
      font-size: 1.5rem;
      margin: 0;
      font-weight: 600;

      @media(max-width: 992px) {
        font-size: 1.1rem;
      }
    }
    & > p {
      font-family: "Inter", sans-serif;
      font-size: 1.1rem;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

interface LinePinkProps {
  addMargin: boolean;
}

const LinePink = styled.div<LinePinkProps>`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.Pink};
  margin-top: 20px;
  margin-bottom: ${({ addMargin }) => (addMargin ? "50px" : "0")};
`;

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
          <p>{text}</p>
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
    <SectionStyles>

      <div>
        <Image img={smartphoneImage} alt="Dashboard Smartphone SpaceBank" />
      </div>

      <div>

        <HeaderStyles>
          <h2>Abra sua conta <span>gratuita</span></h2>
          <p>Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências para todos os bancos sem pagar nada.</p>
        </HeaderStyles>

        <BoxInfo img={iconMoney} alt="Icon Money" title="Seu dinheiro rendendo mais" text="Rendem mais que a poupança e você resgata quando quiser." addMargin={true} />
        <BoxInfo img={iconSmartphone} alt="Icon Smartphone" title="Conta digital 100% grátis" text="Transferências, boletos de depósito e outros serviços gratuitos." addMargin={true} />
        <BoxInfo img={iconHappy} alt="Icon Happy" title="Cartão sem anuidade" text="Conta digital com cartão de crédito sem anuidade e sem complicação." addMargin={false} />

      </div>

    </SectionStyles>
  );
}

export default SectionTwo;
