import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logoCelular from '../../assets/Images/Logo-Smarphone.webp';
import logo from '../../assets/Images/Logo.webp';
import Button from '../common/Button';
import Image from '../common/Image';
import Anchor from '../common/Anchor';
import theme from '../../styles/Theme';

const HeaderStyles = styled.header`
  padding-top: 50px;
`;

const NavBarStyles = styled.nav`
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

const ToggleMenu = styled.div<{ isActive: boolean }>`
  border: 1px solid ${theme.colors.Red};
  border-radius: 8px;
  padding: 10px;
  margin-left: 10px;
  background-color: ${({ isActive }) => (isActive ? theme.colors.Red : 'transparent')};

  @media (min-width: 1100px) {
    display: none;
  }
`;

const LineToggleMenu = styled.div<{ isActive: boolean }>`
  width: 30px;
  height: 4px;
  border-radius: 20px;
  margin: 4px 0px;
  background-color: ${({ isActive }) => (isActive ? theme.colors.White : theme.colors.Red)};
  transform: ${({ isActive }) => (isActive ? 'rotate(0deg)' : 'none')};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:first-child {
    transform: ${({ isActive }) => (isActive ? 'translate(0%, 180%) rotate(-45deg)' : 'none')};
  }
  &:last-child {
    transform: ${({ isActive }) => (isActive ? 'translate(0%, -180%) rotate(45deg)' : 'none')};
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

const ToggleMenuContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease;
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

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 991);
    if (window.innerWidth > 991) {
      setToggleMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setToggleMenuVisible(!toggleMenuVisible);
  };

  return (
    <HeaderStyles>
      <NavBarStyles>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {isMobile ? (
            <a href='#'><Image img={logoCelular} alt='Logo SpaceBank Celular' /></a>
          ) : (
            <a href='#'><Image img={logo} alt='Logo SpaceBank' /></a>
          )}
          <ToggleMenu onClick={toggleMobileMenu} isActive={toggleMenuVisible}>
            <LineToggleMenu isActive={toggleMenuVisible} />
            <LineToggleMenu isActive={false} />
            <LineToggleMenu isActive={toggleMenuVisible} />
          </ToggleMenu>
        </div>
        <UlStyles>
          <li><Anchor href='#'>Benefícios</Anchor></li>
          <li><Anchor href='#'>Conta digital</Anchor></li>
          <li><Anchor href='#'>Cartões</Anchor></li>
          <li><Anchor href='#'>Download App</Anchor></li>
        </UlStyles>
        <ButtonGroup>
          <Button variant='primary'>Entrar</Button>
          <Button variant='secondary'>Abrir Conta</Button>
        </ButtonGroup>
      </NavBarStyles>

      <ToggleMenuContainer isVisible={toggleMenuVisible}>

        <UlStylesTwo>
          <li><Anchor href='#'>Benefícios</Anchor></li>
          <li><Anchor href='#'>Conta digital</Anchor></li>
          <li><Anchor href='#'>Cartões</Anchor></li>
          <li><Anchor href='#'>Download App</Anchor></li>
        </UlStylesTwo>
        <ButtonGroupTwo>
          <Button variant='primary'>Entrar</Button>
          <Button variant='secondary'>Abrir Conta</Button>
        </ButtonGroupTwo>

      </ToggleMenuContainer>

    </HeaderStyles>
  );
}

export default NavBar;
