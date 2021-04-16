// React
import React from 'react';

interface Props {}

const TiposBasicos: React.FC<Props> = () => {
  const nombre: string = 'Fernando';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = [];

  poderes.push('hola');

  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre}, {edad}, {estaActivo ? 'true' : 'false'}
      <br />
      {poderes.join(', ')}
    </>
  );
};

export default TiposBasicos;
