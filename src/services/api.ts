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
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Failed to register user');
  }
};

export const loginUser = async (userData: { [key: string]: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao fazer login. Tente novamente mais tarde.');
    }

    return data;
  } catch (error) {
    throw new Error('Erro ao fazer login. Tente novamente mais tarde.');
  }
};

export const obterSaldo = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtenha o token armazenado localmente
    const response = await fetch(`${BASE_URL}/users/obter-saldo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token de autorização no cabeçalho
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao obter saldo. Tente novamente mais tarde.');
    }

    return data;
  } catch (error) {
    throw new Error('Erro ao obter saldo. Tente novamente mais tarde.');
  }
};

export const alterarSaldoNoBanco = async (transacao: Transacao) => {
  const token = localStorage.getItem('token');
  let url = '';
  let method = '';

  if (transacao.transacao === 'Depósito') {
    url = `${BASE_URL}/users/adicionar-saldo`;
    method = 'POST'; // Alteração para POST para adicionar saldo
  } else if (transacao.transacao === 'Transferência') {
    url = `${BASE_URL}/users/subtrair-saldo`;
    method = 'POST'; // Alteração para POST para subtrair saldo
  } else {
    throw new Error('Tipo de transação inválido');
  }

  try {
    const response = await fetch(url, {
      method: method, // Usar o método correto
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ valorTransacao: parseFloat(transacao.valor) }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao alterar o saldo no banco de dados');
    }

    console.log('Saldo alterado com sucesso!');
  } catch (error) {
    console.error('Erro ao comunicar com o servidor:', error);
    throw new Error('Erro ao comunicar com o servidor');
  }
};

export const saveTransaction = async (transactionData: TransactionData, token: string) => {
  try {
    await fetch(`${BASE_URL}/salvar-extrato`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(transactionData)
    });
  } catch (error) {
    throw new Error('Erro ao salvar transação');
  }
};

export const getTransactions = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/buscar-transacoes`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data.transactions;
  } catch (error) {
    throw new Error('Erro ao obter transações');
  }
};
