import Paragraph from "../Paragraph/Paragraph";

interface MonthProps {
  style?: React.CSSProperties;
}

const mesesDoAno = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const Month = ({ style }: MonthProps) => {
  const data = new Date();
  const mesAtual = mesesDoAno[data.getMonth()];

  return (
    <Paragraph style={style}>
      {mesAtual}
    </Paragraph>
  );
};

export default Month;
