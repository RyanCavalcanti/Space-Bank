import styled from 'styled-components';
import CardApple from '../../../assets/Icon/CardApple.webp';
import CardGoogle from '../../../assets/Icon/CardGoogle.webp';
import RocketWhite from '../../../assets/Icon/Rocket-White.svg';
import Image from '../../../components/common/Image/Image';
import theme from '../../../styles/Theme';
import Anchor from '../../../components/common/Anchor/Anchor';
import { ContainerHome } from '../../../styles/GlobalStyle';
import Title from '../../../components/common/Title/Title';
import Span from '../../../components/common/Span/Span';
import Paragraph from '../../../components/common/Paragraph/Paragraph';

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
    <SectionStyle id='downloadapp'>
      <ContainerBox>
        <ArticleStyles>
          <Title as="h2" fontWeight={600}>Uma nova experiência em <Span>serviços financeiros.</Span></Title>
          <Paragraph marginTop={'20px'} marginBottom={'20px'}>Nossa abordagem inovadora e personalizada oferece uma experiência única para atender às suas necessidades.</Paragraph>

          <CardsStyles>
            <Anchor href='#' variant='none'><Image img={CardApple} alt='Card Apple' /></Anchor>
            <Anchor href='#' variant='none'><Image img={CardGoogle} alt='Card Google' /></Anchor>
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
