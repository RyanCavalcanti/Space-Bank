export const BASE_URL = 'http://localhost:3012/api';

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

export const adicionarSaldo = async (valorTransacao: number) => {
  try {
    const token = localStorage.getItem('token'); // Obtenha o token armazenado localmente
    const response = await fetch(`${BASE_URL}/users/adicionar-saldo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token de autorização no cabeçalho
      },
      body: JSON.stringify({ valorTransacao }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao adicionar saldo. Tente novamente mais tarde.');
    }

    return data;
  } catch (error) {
    throw new Error('Erro ao adicionar saldo. Tente novamente mais tarde.');
  }
};

export const subtrairSaldo = async (valorTransacao: number) => {
  try {
    const token = localStorage.getItem('token'); // Obtenha o token armazenado localmente
    const response = await fetch(`${BASE_URL}/users/subtrair-saldo`, { // Corrigido o caminho da rota
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Inclua o token de autorização no cabeçalho
      },
      body: JSON.stringify({ valorTransacao }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao subtrair saldo. Tente novamente mais tarde.');
    }

    return data;
  } catch (error) {
    throw new Error('Erro ao subtrair saldo. Tente novamente mais tarde.');
  }
};
