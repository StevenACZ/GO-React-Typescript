// React
import { useState } from 'react';

const useCounter = (initialValue: number = 10) => {
  const [valor, setValor] = useState<number>(initialValue);

  const acumular = (numero: number): void => {
    setValor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};

export default useCounter;
