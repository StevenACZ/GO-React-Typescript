// React
import React, { useState } from 'react';

interface Props {}

const Contador: React.FC<Props> = () => {
  const [valor, setValor] = useState<number>(10);

  const acumular = (numero: number): void => {
    setValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>{' '}
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};

export default Contador;
