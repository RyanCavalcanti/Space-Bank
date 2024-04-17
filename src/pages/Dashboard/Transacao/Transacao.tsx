import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import Paragraph from '../../../components/common/Paragraph';
import Title from '../../../components/common/Title';

export interface Transacao {
  transacao: string;
  valor: string;
  mes?: string;
}

interface FormularioProps {
  realizarTransacao: (transacao: Transacao) => Promise<void>;
}

const FormGroup = styled.form`
  /* Estilos aqui */
`;

const GrupoOpcoes = styled.select`
  /* Estilos aqui */
`;

const CampoValor = styled.input`
  /* Estilos aqui */
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
    <FormGroup onSubmit={handleSubmit}>
      <Title as='h5'>Nova Transação</Title>
      <GrupoOpcoes onChange={handleChange} value={valor.transacao} name="transacao"> {/* Adicionado o atributo name */}
        <option value=''>Selecione um tipo de transação</option>
        <option value='Depósito'>Depósito</option>
        <option value='Transferência'>Transferência</option>
      </GrupoOpcoes>
      <Paragraph>Valor</Paragraph>
      <CampoValor onChange={handleChange} type="number" value={valor.valor} name='valor' id='valor' placeholder="Digite um valor" />
      <Button type="submit" variant='primary'>Realizar transação</Button>
    </FormGroup>
  );
}
