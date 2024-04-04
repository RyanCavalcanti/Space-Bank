import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoCelular from '../../assets/Images/Logo-Smarphone.webp';
import logo from '../../assets/Images/Logo.webp';
import Button from '../common/Button';
import Image from '../common/Image';
import Anchor from '../common/Anchor';

export const HeaderStyles = styled.header`
  padding-top: 50px;
`

export const NavBarStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

export const UlStyles = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 30px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 992);
  }

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    }
  }, []);


  return (
    <HeaderStyles>
      <NavBarStyles>

        <div>
          {isMobile ? (
            <Image img={logoCelular} alt='Logo SpaceBank Celular' />
          ) : (
            <Image img={logo} alt='Logo SpaceBank' />
          )}
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
    </HeaderStyles>

  )
}

export default NavBar;
