import './App.css';

import React from 'react';
import CreateUser from './components/CreateUser';
import CreateNaturalPerson from './components/CreateNaturalPerson';

function App() {
  return (
    <>
      <div>
        <h1>Usuário</h1>
        <CreateUser /> {/* Primeiro formulário */}
      </div>

      <div>
        <h1>Doador</h1>
        <CreateNaturalPerson /> {/* Segundo formulário */}
      </div>
    </>
  );
}

export default App;
