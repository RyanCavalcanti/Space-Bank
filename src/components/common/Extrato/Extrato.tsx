import theme from '../../../styles/Theme';
import Paragraph from '../Paragraph/Paragraph';
import { ExtratoItem, InfosStyles, Linha, MonthStyles } from './Extrato.styles';
interface ExtratoProps {
  tipoTransacao: string;
  valorTransacao: string;
  dataTransacao: string;
  mesTransacao: string;
}

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
