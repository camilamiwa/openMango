import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './pages/login/login'
import Cadastro from './pages/cadastro/cadastro'
import CadastroFailed from './pages/cadastro/cadastroFailed'
import CadastroSuccess from './pages/cadastro/cadastroSuccess'

import MeusDados from './pages/my_accounts/my_home'

import Home from './pages/home/home'

import FamiliaHome from './pages/familia/home'
import SemFamilia from './pages/familia/semFamilia';
import FamiliaCriar from './pages/familia/criar';
import FamiliaEntrar from './pages/familia/entrar';
import FamiliaDados from './pages/familia/dados';
import FamiliaSemContas from './pages/familia/semContas';

import AddAccount from './pages/add_account/addAccount';
import GlobalContextProvider, { GlobalContext } from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/cadastro/" element={<Cadastro />} />
          <Route path="/cadastro/failed/" element={<CadastroFailed />} />
          <Route path="/cadastro/successful/" element={<CadastroSuccess />} />

          {/* my accounts */}
          <Route path="/my_accounts/" element={<MeusDados />} />


          {/* home */}
          <Route path="/home/noAccounts/" element={<Home />} />


          {/* family */}
          <Route path="/family/" element={<FamiliaHome />} />
          <Route path="/family/no_family/" element={<SemFamilia />} />
          <Route path="/family/no_accounts/" element={<FamiliaSemContas />} />
          <Route path="/family/create_family/" element={<FamiliaCriar />} />
          <Route path="/family/join_family/" element={<FamiliaEntrar />} />
          <Route path="/family/info_family/" element={<FamiliaDados />} />

          {/* family */}
          <Route path="/add_account/" element={<AddAccount />} />

        </Routes>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
