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
            <Link to="../cadastro">Cadastrar</Link>
            <Link to="../">Entrar</Link>

            {/* <button >Entrar</button>
            <button>Cadastrar</button> */}
        </div>
    );
}

function Login() {
  return (
    <div>
        <LoginForms />
        <LoginButtons />
    </div>
  );
}

export default Login;
