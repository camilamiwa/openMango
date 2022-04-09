import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import { GlobalContext } from '../../context/GlobalContext';

import './login.css';

async function fetchTemFamilia(token) {
    return fetch('http://localhost:5000/temfamilia', {
        method: 'GET',
        headers: { 
            'x-access-token': token
        }
    })
}

async function fetchLogin(login) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login)
    })    
}

async function handleClick(navigate, login, setIdLogin, setToken, setCpf, setLogged) {
    const response = await fetchLogin(login)
    const data = await response.json()
    if (data.mensagem === "OK") {
        setToken( data.token )   
        setCpf( '27' )   
        const auxToken = data.token

        const second = await fetchTemFamilia(auxToken)
        const data2 = await second.json()
        if (data2.mensagem === "FALSE") {
            navigate("/family/no_family/")
        } else{
            navigate("/family/info_family/")
        }                     
        setIdLogin('')
    } else {
        setLogged(false)
        setIdLogin('')
    }
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const { id_login, setIdLogin } = useContext(GlobalContext) 
    const { cpf, setCpf } = useContext(GlobalContext) 
    const { token, setToken } = useContext(GlobalContext) 
    
    let navigate = useNavigate();
    const [logged, setLogged] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = { email, senha };
        handleClick(navigate, login, setIdLogin, setToken, setCpf, setLogged)
    }

    return (
        <div>
        <h2>Entrar</h2>

        <div hidden={ logged }>
            <h3>Email ou senha incorretos. Tente novamente.</h3>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Login: </label>
            <input
            type="text" 
            required 
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Senha: </label>
            <input 
            type="password" 
            required 
            value={ senha }
            onChange={(e) => setSenha(e.target.value)}
            />
            <br></br>
            <br></br>

            <Link to="../cadastro">Cadastre-se</Link>
            
            <p>OU</p>

            <button>Entrar</button>
        </form>
        </div>
    );
    }

export default Login;