import styled from 'styled-components';
import theme from '../../../styles/Theme';
import Paragraph from '../Paragraph/Paragraph';

interface ExtratoProps {
  tipoTransacao: string;
  valorTransacao: string;
  dataTransacao: string;
  mesTransacao: string;
}

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



const Extrato = ({ tipoTransacao, valorTransacao, dataTransacao, mesTransacao }: ExtratoProps) => {

  return (
    <ExtratoItem>
      <MonthStyles>
        <Paragraph style={{ color: theme.colors.Green, fontWeight: '600' }}>{mesTransacao}</Paragraph>
      </MonthStyles>
      <InfosStyles>
        <Paragraph color={theme.colors.Black}>{tipoTransacao}</Paragraph>
        <span style={{ color: theme.colors.Black }}>{dataTransacao}</span>
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
