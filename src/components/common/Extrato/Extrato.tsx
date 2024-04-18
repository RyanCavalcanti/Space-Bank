import styled from 'styled-components';
import Month from '../Month/Month';
import DateNumbers from '../Date/DateNumber';
import { useTransacao } from '../../../pages/Dashboard/Transacao/TransacaoContext';
import theme from '../../../styles/Theme';
import Paragraph from '../Paragraph';

const ExtratoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MonthStyles = styled.div`
  text-align: start;
`

const InfosStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Linha = styled.div`
  & > hr {
    border: none;
    border-top: 1px solid ${theme.colors.Red};
    height: 2px;
    width: 100%;
  }
`


const Extrato = () => {
  const { tipoTransacao, valorTransacao } = useTransacao();

  return (
    <ExtratoItem>
      <MonthStyles>
        <Month style={{ color: theme.colors.Green, fontWeight: '600' }} />
      </MonthStyles>
      <InfosStyles>
        <Paragraph color={theme.colors.Black}>{tipoTransacao}</Paragraph>
        <span><DateNumbers style={{ color: theme.colors.Black }} /></span>
      </InfosStyles>
      {tipoTransacao === 'Transferência' ? (
        <Paragraph color={theme.colors.Black} fontWeight={600} style={{ textAlign: 'start' }}>{`- R$ ${valorTransacao}`}</Paragraph >
      ) : (
        <Paragraph color={theme.colors.Black} fontWeight={600} style={{ textAlign: 'start' }}>{`R$ ${valorTransacao}`}</Paragraph >
      )}
      <Linha>
        <hr />
      </Linha>
    </ExtratoItem>
  );
};

export default Extrato;
