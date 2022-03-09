import React from 'react'
import { Link } from "react-router-dom";

function CadastroSuccess() {
  return (
    <div>
        <h3>Realizou cadastro com sucesso!</h3>
        <p>Faça seu login.</p>
        <br/>
        <Link to="../../login">Realize login</Link>
    </div>
  );
}

export default CadastroSuccess;
