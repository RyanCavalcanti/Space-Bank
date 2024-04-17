import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import Paragraph from '../../../components/common/Paragraph';
import Title from '../../../components/common/Title';
import theme from '../../../styles/Theme';
import Image from '../../../components/common/Image';
import WomanCard from '../../../assets/Icon/Woman-card.svg';

export interface Transacao {
  transacao: string;
  valor: string;
  mes?: string;
}
interface FormularioProps {
  realizarTransacao: (transacao: Transacao) => Promise<void>;
}

const DivContainerStyles = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 690px){
    flex-direction: column;
  }
`

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 690px){
    width: 100%;
  }
`;

const GrupoOpcoes = styled.select`
    background-color: ${theme.colors.White};
    border: 1px solid ${theme.colors.Red};
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    padding: 8px;
    margin-top: 30px;
`;

const CampoValor = styled.input`
    background-color: ${theme.colors.White};
    border: 1px solid ${theme.colors.Red};
    border-radius: 6px;
    font-size: 14px;
    margin-bottom: 1rem;
    outline: none;
    padding: 8px;
    text-align: center;
    width: 70%;
    @media (max-width: 690px){
      width: 100%;
  }
`;

export default function FormularioDeTransacao({ realizarTransacao }: FormularioProps) {
  const [valor, setValor] = useState<Transacao>({ transacao: '', valor: '', mes: '' });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const novoValor = name === 'valor' ? value : e.target.value;
    const valoresAtualizados = { ...valor, [name]: novoValor };
    setValor(valoresAtualizados);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mesTransacao = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    await realizarTransacao({
      ...valor,
      mes: mesTransacao[0].toUpperCase() + mesTransacao.substring(1),
    });
    setValor({ transacao: '', valor: '', mes: '' });
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
