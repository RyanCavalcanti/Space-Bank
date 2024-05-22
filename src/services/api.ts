import axios from 'axios';
import { Transacao } from "../components/common/Transacao/Transacao";

export const BASE_URL = 'http://localhost:3333/api';

interface TransactionData {
  tipo: string;
  valor: string;
  data: string;
  mes: string;
}

interface BackendTransaction {
  transactionId: string;
  tipo: string;
  valor: string;
  data: string;
  mes: string;
}

export const registerUser = async (userData: { [key: string]: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw new Error('Falha ao registrar usuário');
  }
};

export const loginUser = async (userData: { [key: string]: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer login. Tente novamente mais tarde.');
  }
};

export const obterSaldo = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/users/saldo`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter saldo. Tente novamente mais tarde.');
  }
};

export const alterarSaldoNoBanco = async (transacao: Transacao) => {
  const token = localStorage.getItem('token');
  let url = '';

  if (transacao.transacao === 'Depósito') {
    url = `${BASE_URL}/users/saldo/entrada`;
  } else if (transacao.transacao === 'Transferência') {
    url = `${BASE_URL}/users/saldo/saida`;
  } else {
    throw new Error('Tipo de transação inválido');
  }

  try {
    await axios.post(url, { valorTransacao: parseFloat(transacao.valor) }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log('Saldo alterado com sucesso!');
  } catch (error) {
    console.error('Erro ao comunicar com o servidor:', error);
    throw new Error('Erro ao comunicar com o servidor');
  }
};

export const saveTransaction = async (transactionData: TransactionData, token: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/extrato`, transactionData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao salvar transação');
  }
};

export const getTransactions = async (token: string): Promise<BackendTransaction[]> => {
  try {
    const response = await axios.get<{ transactions: BackendTransaction[] }>(`${BASE_URL}/users/transacoes`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data.transactions.map(transaction => ({
      ...transaction,
      data: new Date(transaction.data).toLocaleDateString('pt-BR')
    }));
  } catch (error) {
    throw new Error('Erro ao obter transações');
  }
};
