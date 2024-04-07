import styled from 'styled-components';
import CardApple from '../../../assets/Icon/CardApple.webp';
import CardGoogle from '../../../assets/Icon/CardGoogle.webp';
import RocketWhite from '../../../assets/Icon/Rocket-White.webp';
import Image from '../../../components/common/Image';
import theme from '../../../styles/Theme';
import Anchor from '../../../components/common/Anchor';
import { ContainerHome } from '../../../styles/GlobalStyle';

const SectionStyle = styled.section`
  background-color: ${theme.colors.Pink};
`

const ContainerBox = styled(ContainerHome)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1099px) {
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const ArticleStyles = styled.article`
  @media (max-width: 1099px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & > h2 {
    font-size: 2.6rem;
    width: 60%;
    font-weight: 600;
    @media (max-width: 1099px) {
      text-align: center;
      width: 50%;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      width: 100%;
    }

    & > span {
      color: ${theme.colors.Red};
      @media (max-width: 480px) {
      font-size: 2rem;
      width: 100%;
    }
    }
  }

  & > p {
    font-size: 1.5rem;
    width: 80%;
    font-weight: 400;
    @media (max-width: 1099px) {
      text-align: center;
      width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      width: 100%;
    }
  }
`

const CardsStyles = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1099px){
    display: flex;
    justify-content: center;
  }
`

const AnimationStyles = styled.div`
  display: block;
  unicode-bidi: isolate;
  @media (max-width: 1099px) {
    margin-top: 50px;
  }
  
  & > div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.Red};
  width: 350px;
  height: 350px;
  border-radius: 56px;
  max-width: 100%;

  & > img {
    animation: imgHeart 2s ease infinite;
    width: 180px;
  }

  @keyframes imgHeart {
    0% {
    width: 180px;
      }
    50% {
    width: 200px;
      }
    100% {
    width: 180px;
      }
  }
  }
`

function SectionFive() {
  return (
    <SectionStyle>
      <ContainerBox>
        <ArticleStyles>
          <h2>Uma nova experiência em <span>serviços financeiros.</span></h2>
          <p>Nossa abordagem inovadora e personalizada oferece uma experiência única para atender às suas necessidades.</p>

          <CardsStyles>
            <Anchor href='#'><Image img={CardApple} alt='Card Apple' /></Anchor>
            <Anchor href='#'><Image img={CardGoogle} alt='Card Google' /></Anchor>
          </CardsStyles>
        </ArticleStyles>

        <AnimationStyles>
          <div>
            <Image img={RocketWhite} alt='Rocket White' />
          </div>
        </AnimationStyles>
      </ContainerBox>
    </SectionStyle>

  )
}

export default SectionFive;
