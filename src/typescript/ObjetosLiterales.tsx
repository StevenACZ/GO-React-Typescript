// React
import React from 'react';

interface Props {}

interface Persona {
  nombreCompleto: string;
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

const ObjetosLiterales: React.FC<Props> = () => {
  const persona: Persona = {
    nombreCompleto: 'Fernando Perez',
    nombre: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'Canada',
      casaNo: 134,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;
