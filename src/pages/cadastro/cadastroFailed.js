import React from 'react'
import { Link } from "react-router-dom";

function CadastroFailed() {
  return (
    <div>
        <h3>Email ou cpf já cadastrado...</h3>
        
        <Link to="../cadastro">Tente novamente</Link>

        <p>OU</p>
        
        <Link to="../../login">Realize login</Link>
    </div>
  );
}

export default CadastroFailed;
