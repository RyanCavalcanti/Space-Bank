import axios from 'axios';
import { Transacao } from "../pages/Dashboard/Transacao/Transacao";

export const BASE_URL = 'http://localhost:3333/api';

interface TransactionData {
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
    console.error('Error registering user:', error);
    throw new Error('Failed to register user');
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
    const response = await axios.get(`${BASE_URL}/users/obter-saldo`, {
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
    url = `${BASE_URL}/users/adicionar-saldo`;
  } else if (transacao.transacao === 'Transferência') {
    url = `${BASE_URL}/users/subtrair-saldo`;
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
    const response = await axios.post(`${BASE_URL}/users/salvar-extrato`, transactionData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao salvar transação');
  }
};

export const getTransactions = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/buscar-transacoes`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.transactions;
  } catch (error) {
    throw new Error('Erro ao obter transações');
  }
};
