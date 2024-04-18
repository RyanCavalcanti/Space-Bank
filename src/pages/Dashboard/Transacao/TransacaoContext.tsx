import React, { createContext, useContext, useState } from 'react';

interface TransacaoContextType {
  tipoTransacao: string | null;
  valorTransacao: string;
  setTipoTransacao: (tipo: string) => void;
  setValorTransacao: (valor: string) => void;
}

interface TransacaoProviderProps {
  children: React.ReactNode;
}

const TransacaoContext = createContext<TransacaoContextType | undefined>(undefined);

export function TransacaoProvider({ children }: TransacaoProviderProps) {
  const [tipoTransacao, setTipoTransacao] = useState<string | null>(null);
  const [valorTransacao, setValorTransacao] = useState<string>('');

  return (
    <TransacaoContext.Provider value={{ tipoTransacao, valorTransacao, setTipoTransacao, setValorTransacao }}>
      {children}
    </TransacaoContext.Provider>
  );
}

export const useTransacao = (): TransacaoContextType => {
  const context = useContext(TransacaoContext);
  if (!context) {
    throw new Error('useTransacao deve ser usado dentro de um TransacaoProvider');
  }
  return context;
};
