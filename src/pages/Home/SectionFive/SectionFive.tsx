import CardApple from '../../../assets/Icon/CardApple.webp';
import CardGoogle from '../../../assets/Icon/CardGoogle.webp';
import RocketWhite from '../../../assets/Icon/Rocket-White.svg';
import Image from '../../../components/common/Image/Image';
import Anchor from '../../../components/common/Anchor/Anchor';
import Title from '../../../components/common/Title/Title';
import Span from '../../../components/common/Span/Span';
import Paragraph from '../../../components/common/Paragraph/Paragraph';
import { AnimationStyles, ArticleStyles, CardsStyles, ContainerBox, SectionStyle } from './SectionFive.styles';

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
