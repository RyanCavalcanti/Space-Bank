import styled from 'styled-components';
import theme from '../../../styles/Theme';
import { ContainerHome } from '../../../styles/GlobalStyle';

export const SectionStyle = styled.section`
  background-color: ${theme.colors.Pink};
`

export const ContainerBox = styled(ContainerHome)`
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

export const ArticleStyles = styled.article`
  @media (max-width: 1099px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const CardsStyles = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1099px){
    display: flex;
    justify-content: center;
  }
`

export const AnimationStyles = styled.div`
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
