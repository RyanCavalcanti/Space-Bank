import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../../../components/common/Paragraph';
import Title from '../../../components/common/Title';
import { obterSaldo } from '../../../services/api';

interface SaldoProps {
  saldo: number;
}

const DivMainStyles = styled.div`
  margin: 0 auto;
  width: 190px;
`;

export default function Saldo({ saldo }: SaldoProps) {
  const [saldoAtual, setSaldoAtual] = useState<number>(saldo);

  useEffect(() => {
    async function fetchSaldo() {
      try {
        const saldoResponse = await obterSaldo();
        if (saldoResponse === 'number') {
          setSaldoAtual(saldoResponse);
        } else {
          console.error('Formato de saldo inválido:', saldoResponse);
        }
      } catch (error) {
        console.error('Erro ao obter saldo:', error);
      }
    }
    fetchSaldo();
  }, [saldo]);

  return (
    <DivMainStyles>
      <div>
        <Title as="h5">Saldo</Title>
      </div>
      <hr />
      <Paragraph>Conta corrente</Paragraph>
      <Paragraph>R$ {saldoAtual.toFixed(2)}</Paragraph>
    </DivMainStyles>
  );
}
