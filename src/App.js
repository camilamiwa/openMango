import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/login'
import Cadastro from './pages/cadastro/cadastro'
import Home from './pages/home/home'

import FamiliaHome from './pages/familia/home'
import SemFamilia from './pages/familia/semFamilia';
import FamiliaCriar from './pages/familia/criar';
import FamiliaEntrar from './pages/familia/entrar';
import FamiliaDados from './pages/familia/dados';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />


        {/* home */}
        <Route path="/home/noAccounts" element={<Home />} />


        {/* family */}
        <Route path="/family" element={<FamiliaHome />} />
        <Route path="/family/no_family" element={<SemFamilia />} />
        <Route path="/family/create_family" element={<FamiliaCriar />} />
        <Route path="/family/join_family" element={<FamiliaEntrar />} />
        <Route path="/family/info_family" element={<FamiliaDados />} />


      </Routes>
    </div>
  );
}

export default App;
