import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/Theme';
import Image from '../../../components/common/Image';
import logo from '../../../assets/Icon/Rocket-White.svg';
import Title from '../../../components/common/Title';
import Paragraph from '../../../components/common/Paragraph';
import Button from '../../../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';
import Anchor from '../../../components/common/Anchor';

interface ToggleMenuContainerProps {
  isVisible: boolean;
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.Red};
  position: relative; /* Para posicionamento absoluto dos elementos filhos */
`;

const NavBarStyles = styled(ContainerHome) <ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative; /* Para posicionamento absoluto dos elementos filhos */
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > img {
    width: 50px;
    height: 50px;
  }
`;

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative; /* Para posicionamento absoluto dos elementos filhos */
`;

const ToggleMenuContainer = styled.div<ToggleMenuContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 100%; /* Para ficar abaixo da nav */
  left: 0;
  z-index: 999; /* Para ficar acima do conteúdo padrão */
  background-color: ${theme.colors.White};
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
  margin-top: 17px;
  margin-left: 40px;
  background-color: ${theme.colors.Red};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease;

  & > ul {
    list-style-type: none;
    padding: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MainStyles = styled.main`
  margin-top: 20px;
`

const SectionStyles = styled(ContainerHome) <ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ArticleInfosStyles = styled.article`
    background-color: ${theme.colors.Red};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    list-style: none;
    height: 85vh;
    padding: 24px;
    width: 200px;

    & > ul {
      list-style-type: none;
      padding: 0;

      & > li {
        text-align: center;
        color: ${theme.colors.White};
      }
    }
`

const BoxesStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 85vh;
`

const BoxSectionOneStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.Pink};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    height: 50%;
    padding: 24px;
    max-width: 690px;
    width: 100%;
`;

const BoxSectionTwoStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.Pink};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    height: 50%;
    padding: 24px;
    max-width: 690px;
    width: 100%;
`

const ArticleExtratoStyles = styled.article`
    background-color: ${theme.colors.Red};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    list-style: none;
    height: 85vh;
    padding: 24px;
    width: 200px;

    & > ul {
      list-style-type: none;
      padding: 0;

      & > li {
        text-align: center;
        color: ${theme.colors.White};
      }
    }
`

function BoxDashboard() {
  const firstName = localStorage.getItem('firstName');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <HeaderStyles>
        <NavBarStyles as="nav">
          <ContainerLogo>
            <Image img={logo} alt="Logo SpaceBank" />
            <Title as="h5" color={theme.colors.White}>
              SpaceBank
            </Title>
          </ContainerLogo>

          <ContainerUser>
            <Paragraph color={theme.colors.White} fontWeight={600}>{firstName}</Paragraph>

            <div>
              <Button onClick={toggleMenu} style={{ padding: '0' }}>
                <FontAwesomeIcon icon={faUser} size='lg' color={theme.colors.White} style={{ border: '1px solid', borderRadius: '50%', padding: '10px' }} />
              </Button>
              <ToggleMenuContainer isVisible={menuVisible}>
                <ul>
                  <li><Button style={{ padding: '0', color: `${theme.colors.White}` }}>Sair</Button></li>
                </ul>
              </ToggleMenuContainer>
            </div>
          </ContainerUser>
        </NavBarStyles>
      </HeaderStyles>

      <MainStyles>
        <SectionStyles as='section'>
          <ArticleInfosStyles>
            <ul>
              <li><Anchor href='#' variant='none'>Inicio</Anchor></li>
              <hr />
              <li><Anchor href='#' variant='none'>Transferências</Anchor></li>
              <hr />
              <li><Anchor href='#' variant='none'>Investimentos</Anchor></li>
              <hr />
              <li><Anchor href='#' variant='none'>Outros serviços</Anchor></li>
            </ul>
          </ArticleInfosStyles>
          <BoxesStyles>
            <BoxSectionOneStyles>
              <Title as='h3'>Olá, {firstName} :)!</Title>
            </BoxSectionOneStyles>
            <BoxSectionTwoStyles>COMPONENTE DE TRANSAÇÃO</BoxSectionTwoStyles>
          </BoxesStyles>
          <ArticleExtratoStyles>
            Extrato
          </ArticleExtratoStyles>
        </SectionStyles>
      </MainStyles>
    </>
  );
}

export default BoxDashboard;
