import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import { obterSaldo } from '../../../services/api';
import theme from '../../../styles/Theme';

interface SaldoProps {
  saldo: number;
}

const DivMainStyles = styled.div`
  margin: 0 auto;
  width: 190px;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 440px;
  }
`;

export default function Saldo({ saldo }: SaldoProps) {
  const [saldoAtual, setSaldoAtual] = useState<number>(saldo);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchSaldo() {
      try {
        const saldoResponse = await obterSaldo();
        const saldoNumber = parseFloat(saldoResponse.saldo);
        if (!isNaN(saldoNumber)) {
          setSaldoAtual(saldoNumber);
          setError('');
        } else {
          setError('Formato de saldo inválido');
        }
      } catch (error) {
        setError('Erro ao obter saldo. Tente novamente mais tarde.');
      }
    }
    fetchSaldo();
    const intervalId = setInterval(fetchSaldo, 3500);

    return () => clearInterval(intervalId);
  }, [saldo]);

  const formatarSaldo = (saldo: number) => {
    return saldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <DivMainStyles>
      <div>
        <Title as="h3" color={theme.colors.White}>Saldo</Title>
      </div>
      <hr />
      <br />
      <Paragraph color={theme.colors.White} style={{ fontSize: '1.2rem'}}>Conta corrente</Paragraph>
      <Paragraph color={theme.colors.White} fontWeight={600} style={{ fontSize: '1.2rem'}}>R$ {formatarSaldo(saldoAtual)}</Paragraph>
      {error && <Paragraph color={theme.colors.White}>{error}</Paragraph>}
    </DivMainStyles>
  );
}
