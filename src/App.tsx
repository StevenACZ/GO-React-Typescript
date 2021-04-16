// React
import React from 'react';

// Components
// import TiposBasicos from './typescript/TiposBasicos';
import ObjetosLiterales from './typescript/ObjetosLiterales';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      <ObjetosLiterales />
    </div>
  );
};

export default App;
