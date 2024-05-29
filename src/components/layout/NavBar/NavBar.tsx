import { useState, useEffect } from 'react';
import logoCelular from '../../../assets/Images/Logo-Smarphone.webp';
import logo from '../../../assets/Images/Logo.webp';
import Image from '../../common/Image/Image';
import Anchor from '../../common/Anchor/Anchor';
import { ButtonGroup, ButtonGroupTwo, HeaderStyles, LineToggleMenu, NavBarStyles, ToggleMenu, ToggleMenuContainer, UlStyles, UlStylesTwo } from './NavBar.styles';

export interface ToggleMenuContainerProps {
  isVisible: boolean;
}

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
