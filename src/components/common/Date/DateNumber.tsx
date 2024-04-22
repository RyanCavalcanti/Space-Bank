import Paragraph from "../Paragraph/Paragraph";

interface DateNumbersProps {
  style?: React.CSSProperties;
}

const data = Date.now();
const hoje = new Date(data);

export default function DateNumbers({ style }: DateNumbersProps) {
  return(
    <Paragraph style={style}>{`${hoje.toLocaleDateString('pt-BR')}`}</Paragraph>
  )
}
