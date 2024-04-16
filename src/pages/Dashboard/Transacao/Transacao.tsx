import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

interface Transacao {
  transacao: string;
  valor: number; // Alterado para number para garantir que seja um número
  mes?: string;
}

interface FormularioProps {
  realizarTransacao: (transacao: Transacao) => Promise<void>;
}

const FormGroup = styled.form`
  /* Estilos aqui */
`;

const LegendaOpcoes = styled.h3`
  /* Estilos aqui */
`;

const GrupoOpcoes = styled.select`
  /* Estilos aqui */
`;

const Legenda = styled.label`
  /* Estilos aqui */
`;

const CampoValor = styled.input`
  /* Estilos aqui */
`;

const Botao = styled.button`
  /* Estilos aqui */
`;

export default function FormularioDeTransacao({ realizarTransacao }: FormularioProps) {
  const [valor, setValor] = useState<Transacao>({ transacao: '', valor: 0 }); // Inicializa valor como 0

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const valoresAtualizados = { ...valor, [name]: value };
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
    setValor({ transacao: '', valor: 0 }); // Limpa o formulário após a transação e define o valor como 0
  }

  return (
    <FormGroup onSubmit={handleSubmit}>
      <LegendaOpcoes>Nova Transação</LegendaOpcoes>
      <GrupoOpcoes onChange={handleChange} name="transacao" data-testid="select-opcoes">
        <option value="">Selecione um tipo de transação</option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </GrupoOpcoes>
      <Legenda htmlFor="valor">Valor</Legenda>
      <CampoValor onChange={handleChange} type="number" value={valor.valor} name="valor" id="valor" placeholder="Digite um valor" />
      <Botao type="submit">Realizar transação</Botao>
    </FormGroup>
  );
}
