import { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import theme from '../../../styles/Theme';
import Image from '../Image/Image';
import WomanCard from '../../../assets/Icon/Woman-card.svg';
import { CampoValor, DivContainerStyles, FormGroup, GrupoOpcoes } from './Transacao.styles';

export interface Transacao {
  transacao: string;
  valor: string;
}
interface FormularioProps {
  realizarTransacao: (transacao: Transacao) => Promise<void>;
}

export default function FormularioDeTransacao({ realizarTransacao }: FormularioProps) {
  const [valor, setValor] = useState<Transacao>({ transacao: '', valor: '' });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const novoValor = name === 'valor' ? value.replace(/[^\d]/g, '') : e.target.value;
    const valoresAtualizados = { ...valor, [name]: novoValor };
    setValor(valoresAtualizados);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await realizarTransacao(valor);
    setValor({ transacao: '', valor: '' });
  }

  return (
    <DivContainerStyles>
      <FormGroup onSubmit={handleSubmit}>
        <Title as='h3' color={theme.colors.Red} fontWeight={700} style={{ marginTop: '20px' }}>Nova Transação</Title>
        <GrupoOpcoes onChange={handleChange} value={valor.transacao} name="transacao">
          <option value=''>Selecione um tipo de transação</option>
          <option value='Depósito'>Depósito</option>
          <option value='Transferência'>Transferência</option>
        </GrupoOpcoes>
        <Paragraph marginTop='30px' fontWeight={700} color={theme.colors.Red}>Valor</Paragraph>
        <CampoValor onChange={handleChange} type="number" value={valor.valor} name='valor' id='valor' placeholder="Digite um valor" />
        <Button type="submit" variant='secondary' style={{ width: '70%' }}>Realizar transação</Button>
      </FormGroup>

      <Image img={WomanCard} alt='Woman Credit Card' style={{ marginTop: '50px' }}/>
    </DivContainerStyles>
  );
}
