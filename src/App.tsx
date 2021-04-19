// React
import React from 'react';

// Components
// import TiposBasicos from './typescript/TiposBasicos';
// import ObjetosLiterales from './typescript/ObjetosLiterales';
// import Funciones from './typescript/Funciones';
// import Contador from './components/Contador';
// import ContadorConHook from './components/ContadorConHook';
// import Login from './components/Login';
// import LoginPrueba from './components/LoginPrueba';
import Usuarios from './components/Usuarios';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <LoginPrueba /> */}
      <Usuarios />
    </div>
  );
};

export default App;
