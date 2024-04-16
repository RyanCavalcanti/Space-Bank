import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const API_URL = 'http://localhost:3012/api';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

const sendRequest = async <T>(method: HttpMethod, endpoint: string, data?: Record<string, unknown>): Promise<T> => {
  try {
    const config: AxiosRequestConfig | undefined = data ? { data } : undefined;
    const response = await axios[method](`${API_URL}/${endpoint}`, config);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`Error ${method.toUpperCase()} ${endpoint}:`, axiosError.message);
    throw new Error(`Failed to ${method} ${endpoint}`);
  }
};


interface UserData {
  [key: string]: string;
}

export const registerUser = async (userData: UserData) => {
  return sendRequest<void>('post', 'users/register', userData);
};

export const loginUser = async (userData: UserData) => {
  return sendRequest<void>('post', 'auth/login', userData);
};

export const adicionarSaldo = async (valorTransacao: number): Promise<void> => {
  return sendRequest<void>('post', 'adicionar-saldo', { valorTransacao });
};

export const obterSaldo = async (): Promise<number> => {
  return sendRequest<number>('get', 'obter-saldo');
};
