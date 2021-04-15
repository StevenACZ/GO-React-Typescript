// React
import React from 'react';
import TiposBasicos from './typescript/TiposBasicos';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>
      <hr />
      <TiposBasicos />
    </div>
  );
};

export default App;
