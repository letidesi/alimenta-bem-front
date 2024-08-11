import './App.css';

import React from 'react';
import CreateUser from './components/CreateUser';
import CreateNaturalPerson from './components/CreateNaturalPerson';
import CreateOrganization from './components/CreateOrganization';
import CreateOrganizationRequirement from './components/CreateOrganizationRequirement';
import CreateDonation from './components/CreateDonation';

function App() {
  return (
    <>
        <div>
            <header className="project-header">
                <h1>AlimentaBem</h1>
                <p>Transforme vidas com suas doações. Conecte-se com organizações que precisam de você.</p>
            </header>
            <div className="form-container">
                <CreateUser />
                <CreateOrganizationRequirement />
                <CreateNaturalPerson />
                <CreateOrganization />
                <CreateDonation />
            </div>
        </div>
    </>
  );
}

export default App;
