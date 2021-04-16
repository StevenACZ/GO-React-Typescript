// React
import React from 'react';

// Components
// import TiposBasicos from './typescript/TiposBasicos';
// import ObjetosLiterales from './typescript/ObjetosLiterales';
import Funciones from './typescript/Funciones';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      <Funciones />
    </div>
  );
};

export default App;
