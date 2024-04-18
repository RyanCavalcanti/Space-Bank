import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../../../components/common/Paragraph';
import Title from '../../../components/common/Title';
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

  useEffect(() => {
    async function fetchSaldo() {
      try {
        const saldoResponse = await obterSaldo();
        const saldoNumber = parseFloat(saldoResponse.saldo);
        if (!isNaN(saldoNumber)) {
          setSaldoAtual(saldoNumber);
        } else {
          console.error('Formato de saldo inválido:', saldoResponse);
        }
      } catch (error) {
        console.error('Erro ao obter saldo:', error);
      }
    }
    fetchSaldo();
    // Configurar intervalo para buscar o saldo a cada 5 segundos
    const intervalId = setInterval(fetchSaldo, 3500);

    // Retornar uma função de limpeza para limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [saldo]);

  return (
    <DivMainStyles>
      <div>
        <Title as="h3" color={theme.colors.White}>Saldo</Title>
      </div>
      <hr />
      <br />
      <Paragraph color={theme.colors.White} style={{ fontSize: '1.2rem'}}>Conta corrente</Paragraph>
      <Paragraph color={theme.colors.White} fontWeight={600} style={{ fontSize: '1.2rem'}}>R$ {saldoAtual.toFixed(2)}</Paragraph>
    </DivMainStyles>
  );
}
