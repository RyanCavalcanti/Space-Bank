import Paragraph from "./Paragraph";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];


export default function DateBrasil() {
  return(
    <Paragraph>{`${diasDaSemana[hoje.getDay()]}, ${hoje.toLocaleDateString('pt-BR')}`}</Paragraph>
  )
}
