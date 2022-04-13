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
import GlobalContextProvider from './context/GlobalContext';
import SemContas from './pages/home/semContas';
import Consentimentos from './pages/consentimentos/consentimentos';
import Sucesso from './pages/add_account/sucesso';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Routes>
          <Route path="/mangobank-front" element={<Login />} />
          <Route path="/mangobank-front/login/" element={<Login />} />
          <Route path="/mangobank-front/cadastro/" element={<Cadastro />} />
          <Route path="/mangobank-front/cadastro/failed/" element={<CadastroFailed />} />
          <Route path="/mangobank-front/cadastro/successful/" element={<CadastroSuccess />} />

          {/* my accounts */}
          <Route path="/mangobank-front/my_accounts/" element={<MeusDados />} />


          {/* home */}
          <Route path="/mangobank-front/home/noAccounts/" element={<Home />} />
          <Route path="/mangobank-front/home/test/" element={<SemContas />} />


          {/* family */}
          <Route path="/mangobank-front/family/" element={<FamiliaHome />} />
          <Route path="/mangobank-front/family/no_family/" element={<SemFamilia />} />
          <Route path="/mangobank-front/family/no_accounts/" element={<FamiliaSemContas />} />
          <Route path="/mangobank-front/family/create_family/" element={<FamiliaCriar />} />
          <Route path="/mangobank-front/family/join_family/" element={<FamiliaEntrar />} />
          <Route path="/mangobank-front/family/info_family/" element={<FamiliaDados />} />

          {/* family */}
          <Route path="/mangobank-front/add_account/" element={<AddAccount />} />
          <Route path="/mangobank-front/sucesso/" element={<Sucesso />} />
        
          {/* configuracoes */}
          <Route path="/mangobank-front/consentimentos/" element={<Consentimentos />} />

        </Routes>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
