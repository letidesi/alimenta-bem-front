import './App.css';

import React from 'react';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>
      <h1>Create a New User</h1>
      <CreateUser /> {/* Aqui é onde o formulário será renderizado */}
    </div>
  );
}

export default App;