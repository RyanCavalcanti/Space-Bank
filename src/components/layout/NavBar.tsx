import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logoCelular from '../../assets/Images/Logo-Smarphone.webp';
import logo from '../../assets/Images/Logo.webp';
import Image from '../common/Image/Image';
import Anchor from '../common/Anchor/Anchor';
import theme from '../../styles/Theme';
import { ContainerHome, ContainerProps } from '../../styles/GlobalStyle';

interface ToggleMenuContainerProps {
  isVisible: boolean;
}

const HeaderStyles = styled(ContainerHome)<ContainerProps>`
  padding-top: 50px;
`;

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1099px) {
    flex-direction: column;
  }
`;

const UlStyles = styled.ul`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    list-style-type: none;
    gap: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    gap: 10px;
  }
`;

const ToggleMenu = styled.div`
  border: 1px solid ${theme.colors.Red};
  border-radius: 8px;
  padding: 10px;
  margin-left: 10px;
  background-color: transparent;

  @media (min-width: 1100px) {
    display: none;
  }
`;

const LineToggleMenu = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 20px;
  margin: 4px 0px;
  background-color: ${theme.colors.Red};
  transform: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:first-child {
    transform: none;
  }
  &:last-child {
    transform: none;
  }

  @media (min-width: 1100px) {
    display: none;
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

const ToggleMenuContainer = styled.div<ToggleMenuContainerProps>`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  animation: ${fadeOut} 0.5s ease;

  @media (max-width: 1099px) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease;
  }
`;

const UlStylesTwo = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  & > li {
    color: ${theme.colors.Red};
    margin-bottom: 8px;
  }
`;

const ButtonGroupTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [toggleMenuVisible, setToggleMenuVisible] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setToggleMenuVisible(false);
      }
    };

    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setToggleMenuVisible(!toggleMenuVisible);
  };

  return (
    <HeaderStyles as="nav">
        <NavBarStyles>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isMobile ? (
              <a href='/'><Image img={logoCelular} alt='Logo SpaceBank Celular' /></a>
            ) : (
              <a href='/'><Image img={logo} alt='Logo SpaceBank' /></a>
            )}
            <ToggleMenu onClick={toggleMobileMenu}>
              <LineToggleMenu />
              <LineToggleMenu />
              <LineToggleMenu />
            </ToggleMenu>
          </div>
          <UlStyles>
            <li><Anchor href='#beneficios' variant='text'>Benefícios</Anchor></li>
            <li><Anchor href='#contadigital' variant='text'>Conta digital</Anchor></li>
            <li><Anchor href='#cartoes' variant='text'>Cartões</Anchor></li>
            <li><Anchor href='#downloadapp' variant='text'>Download App</Anchor></li>
          </UlStyles>
          <ButtonGroup>
            <Anchor href='/login' variant='primary'>Entrar</Anchor>
            <Anchor href='/register' variant='secondary'>Abrir Conta</Anchor>
          </ButtonGroup>
        </NavBarStyles>

        <ToggleMenuContainer isVisible={toggleMenuVisible}>
          <UlStylesTwo>
            <li><Anchor href='#beneficios' variant='text'>Benefícios</Anchor></li>
            <li><Anchor href='#contadigital' variant='text'>Conta digital</Anchor></li>
            <li><Anchor href='#cartoes' variant='text'>Cartões</Anchor></li>
            <li><Anchor href='#downloadapp' variant='text'>Download App</Anchor></li>
          </UlStylesTwo>
          <ButtonGroupTwo>
            <Anchor href='/login' variant='primary'>Entrar</Anchor>
            <Anchor href='/register' variant='secondary'>Abrir Conta</Anchor>
          </ButtonGroupTwo>
        </ToggleMenuContainer>
    </HeaderStyles>
  );
}

export default NavBar;
