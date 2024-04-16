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
  const [saldoAtual, setSaldoAtual] = useState<number>(saldo); // Use o saldo passado como prop

  useEffect(() => {
    async function fetchSaldo() {
      try {
        const saldoResponse = await obterSaldo();
        if (typeof saldoResponse === 'number') {
          setSaldoAtual(saldoResponse); // Atualiza o saldo atual com o valor retornado
        } else {
          console.error('Formato de saldo inválido:', saldoResponse);
        }
      } catch (error) {
        console.error('Erro ao obter saldo:', error);
      }
    }
    fetchSaldo();
  }, [saldo]); // Adicione saldo como dependência para recarregar o saldo quando ele mudar

  return (
    <DivMainStyles>
      <div>
        <Title as="h5">Saldo</Title>
      </div>
      <hr />
      <Paragraph>Conta corrente</Paragraph>
      <Paragraph>R$ {saldoAtual.toFixed(2)}</Paragraph> {/* Exibe o saldo atual */}
    </DivMainStyles>
  );
}
