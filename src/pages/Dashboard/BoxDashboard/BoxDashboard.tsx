import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/Theme';
import Image from '../../../components/common/Image';
import logo from '../../../assets/Icon/Rocket-White.svg';
import Title from '../../../components/common/Title';
import Paragraph from '../../../components/common/Paragraph';
import Button from '../../../components/common/Button';

interface ToggleMenuContainerProps {
  isVisible: boolean;
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.Red};
  position: relative; /* Para posicionamento absoluto dos elementos filhos */
`;

const NavBarStyles = styled.nav`
  display: flex;
  justify-content: space-around;
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
  border-radius: 5px;
  padding: 10px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut )} 0.5s ease;
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

function BoxDashboard() {
  const firstName = localStorage.getItem('firstName');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <HeaderStyles>
        <NavBarStyles>
          <ContainerLogo>
            <Image img={logo} alt="Logo SpaceBank" />
            <Title as="h5" color={theme.colors.White}>
              SpaceBank
            </Title>
          </ContainerLogo>

          <ContainerUser>
            <Paragraph color={theme.colors.White}>{firstName}</Paragraph>
            <div>
              <Button onClick={toggleMenu}>
                <Image img="" alt="User" />
              </Button>
              <ToggleMenuContainer isVisible={menuVisible}>
                <ul>
                  <li>SAIR</li>
                </ul>
              </ToggleMenuContainer>
            </div>
          </ContainerUser>
        </NavBarStyles>
      </HeaderStyles>

      <main>asdsadsa</main>
    </>
  );
}

export default BoxDashboard;
