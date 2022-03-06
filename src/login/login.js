import React from 'react'
import './login.css';
import { Link } from "react-router-dom";

function LoginForms() {
    return (
        <div>
            <p>Login</p>
            <input type = "text" />
            <p>Senha</p>
            <input type = "text" />
        </div>
    );
}

function LoginButtons() {
    return (
        <div>
            <Link to="../">Entre</Link>
            <p>OU</p>

            <Link to="../cadastro">Cadastre-se</Link>
            
            {/* <button >Entrar</button>
            <button>Cadastrar</button> */}
        </div>
    );
}

function Login() {
  return (
    <div>
        <h3>Entrar</h3>
        <LoginForms />
        <br></br>
        <LoginButtons />
    </div>
  );
}

export default Login;
