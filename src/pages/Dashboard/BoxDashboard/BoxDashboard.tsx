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
import DateBrasil from '../../../components/common/Date';
import Saldo from '../Saldo/Saldo';
import ilustracao from '../../../assets/Icon/ilustracao.svg';
import FormularioDeTransacao, { Transacao } from '../Transacao/Transacao'; // Importar a interface Transacao
import { alterarSaldoNoBanco } from '../../../services/api';


interface ToggleMenuContainerProps {
  isVisible: boolean;
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.Black};
  position: relative;
`;

const NavBarStyles = styled(ContainerHome) <ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
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
  position: relative;
`;

const ToggleMenuContainer = styled.div<ToggleMenuContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
  margin-top: 17px;
  margin-left: 40px;
  background-color: ${theme.colors.Grey};
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
  height: 85vh;

  @media (max-width: 1220px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ArticleInfosStyles = styled.article`
    background-color: ${theme.colors.Red};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    list-style: none;
    height: 100%;
    padding: 24px;
    width: 180px;

    & > ul {
      list-style-type: none;
      padding: 0;

      & > li {
        text-align: center;
        color: ${theme.colors.White};
      }
    }

    @media (max-width: 1220px) {
      display: none;
    }
`

const BoxesStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  max-width: 690px;
  width: 100%;
`

const BoxSectionOneStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.Green};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    height: 50%;
    padding: 24px;
`;

const DivSaldo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px){
    & > img {
    display: none;
    }
  }
`

const BoxSectionTwoStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.Grey};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    height: 50%;
    padding: 24px;

    @media (max-width: 690px){
      height: 740px;
  }
`

const ArticleExtratoStyles = styled.article`
    background-color: ${theme.colors.Grey};
    border-radius: 8px;
    box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
    list-style: none;
    height: 100%;
    padding: 24px;
    max-width: 300px;
    width: 100%;

    & > ul {
      list-style-type: none;
      padding: 0;

      & > li {
        text-align: center;
        color: ${theme.colors.White};
      }
    }

    @media (max-width: 1220px) {
      display: none;
    }
`

function BoxDashboard() {
  const firstName = localStorage.getItem('firstName');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const FuncaoDeTransacao = async (transacao: Transacao) => {
    const valorNumerico = parseFloat(transacao.valor); // Convertendo valor para número

    if (isNaN(valorNumerico) || valorNumerico <= 0) { // Verificando se é um número válido e maior que zero
      console.error('Erro: Valor de transação inválido.');
      return;
    }

    if (transacao.transacao === '') {
      console.error('Erro: Tipo de transação não selecionado.');
      return;
    }

    if (valorNumerico > 100000000) {
      console.error('Aviso: Valor muito alto. Será avaliado pelo Banco Central.');
      return;
    }

    try {
      if (transacao.transacao === 'Depósito' || transacao.transacao === 'Transferência') {
        console.log('Transação realizada com sucesso:', transacao);
        await alterarSaldoNoBanco(transacao);
      } else {
        console.error('Erro: Tipo de transação inválido.', transacao);
      }
    } catch (error) {
      console.error('Erro ao realizar a transação:', error);
    }
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
              <Title as='h3' color={theme.colors.White} >Olá, {firstName} :)!</Title>
              <DateBrasil />
              <DivSaldo>
                <Image img={ilustracao} alt='ilustração' />
                <Saldo saldo={0} />
              </DivSaldo>
            </BoxSectionOneStyles>
            <BoxSectionTwoStyles>
              <FormularioDeTransacao realizarTransacao={FuncaoDeTransacao} />
            </BoxSectionTwoStyles>
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