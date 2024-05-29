import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/Theme';
import Image from '../../../components/common/Image/Image';
import logo from '../../../assets/Icon/Rocket-White.svg';
import Title from '../../../components/common/Title/Title';
import Paragraph from '../../../components/common/Paragraph/Paragraph';
import Button from '../../../components/common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ContainerHome, ContainerProps } from '../../../styles/GlobalStyle';
import Anchor from '../../../components/common/Anchor/Anchor';
import DateBrasil from '../../../components/common/Date/Date';
import Saldo from '../../../components/common/Saldo/Saldo';
import ilustracao from '../../../assets/Icon/ilustracao.svg';
import FormularioDeTransacao, { Transacao } from '../../../components/common/Transacao/Transacao';
import { alterarSaldoNoBanco, getTransactions, saveTransaction } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import Extrato from '../../../components/common/Extrato/Extrato';
import useTokenWatcher from '../../../components/auth/useTokenWatcher';
import Footer from '../../../components/layout/Footer/Footer';

interface ExtratoItem {
  transactionId: string;
  tipo: string;
  valor: string;
  data: string;
  mes: string;
}

const mesesDoAno = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface ToggleMenuContainerProps {
  isVisible: boolean;
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.Red};
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
  height: auto;

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
  height: 660px;
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
    height: 100%;
  }
`

const ArticleExtratoStyles = styled.article`
  background-color: ${theme.colors.Grey};
  border-radius: 8px;
  box-shadow: 0 8px 24px hsla(210,8%,62%,.2);
  list-style: none;
  height: 100vh;
  max-height: 660px;
  padding: 24px;
  max-width: 320px;
  width: 100%;
  overflow-y: auto;

  & > ul {
    list-style-type: none;
    padding: 0;

    & > li {
      text-align: center;
      color: ${theme.colors.White};
    }
  }

  @media (max-width: 1220px) {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 690px;
  }
`

function BoxDashboard() {
  const firstName = localStorage.getItem('firstName');
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const [extratos, setExtratos] = useState<ExtratoItem[]>([]);
  const [error, setError] = useState<string>('');
  useTokenWatcher();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const realizarTransacao = async (transacao: Transacao) => {
    const valorNumerico = parseFloat(transacao.valor);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      setError('Erro: Valor de transação inválido.');
      return;
    }

    if (transacao.transacao === '') {
      setError('Erro: Tipo de transação não selecionado.');
      return;
    }

    if (valorNumerico > 100000000) {
      setError('Valor muito alto. Será avaliado pelo Banco Central.');
      return;
    }

    try {
      if (transacao.transacao === 'Depósito' || transacao.transacao === 'Transferência') {
        await alterarSaldoNoBanco(transacao);
        const dataAtual = new Date();
        const dataLocal = new Date(dataAtual.getTime() - dataAtual.getTimezoneOffset() * 60000);
        const novoExtrato: ExtratoItem = {
          transactionId: generateId(),
          tipo: transacao.transacao,
          valor: transacao.valor,
          data: dataLocal.toISOString().split('T')[0],
          mes: mesesDoAno[dataAtual.getMonth()]
        };
        setExtratos(prevExtratos => [novoExtrato, ...prevExtratos]);
        const token = localStorage.getItem('token');
        if (token !== null) {
          await saveTransaction(novoExtrato, token);
        } else {
          setError('Erro: Token não encontrado.');
        }
      } else {
        setError('Erro: Tipo de transação inválido.');
      }
    } catch (error) {
      setError('Erro ao realizar a transação. Tente novamente mais tarde.');
    }
  };

  const generateId = (): string => {
    return Math.random().toString(36).slice(2, 9);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchTransactions = async () => {
        try {
          const transactions = await getTransactions(token);
          setExtratos(transactions.reverse()); 
          setError('');
        } catch (error) {
          setError('Erro ao obter transações. Tente novamente mais tarde.');
        }
      };
      fetchTransactions();
    }
  }, []);

  return (
    <>
      <HeaderStyles>
        <NavBarStyles as="nav">
          <ContainerLogo>
            <Image img={logo} alt="Logo SpaceBank" />
            <Title as="h5" color={theme.colors.White}>
              <Anchor href='/' variant='none'>SpaceBank</Anchor>
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
                  <li><Button onClick={handleLogout} style={{ padding: '0', color: `${theme.colors.White}` }}>Sair</Button></li>
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
              <FormularioDeTransacao realizarTransacao={realizarTransacao} />
              {error && <Paragraph color={theme.colors.Red} marginTop='15px'>{error}</Paragraph>}
            </BoxSectionTwoStyles>
          </BoxesStyles>
          <ArticleExtratoStyles>
            <Paragraph fontWeight={600} style={{ fontSize: '1.8rem' }} >Extrato</Paragraph>
            <ul>
              {extratos.map(extrato => (
                <Extrato key={extrato.transactionId} 
                tipoTransacao={extrato.tipo} 
                valorTransacao={extrato.valor} 
                dataTransacao={extrato.data} 
                mesTransacao={extrato.mes}/>
              ))}
            </ul>
          </ArticleExtratoStyles>
        </SectionStyles>
      </MainStyles>
      <Footer />
    </>
  );
}

export default BoxDashboard;
