import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    let navigate = useNavigate();
    const [logged, setLogged] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = { email, senha };
        
        fetch('https://acc-manager.southindia.cloudapp.azure.com/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login)
        })
        .then(response => response.json())
        // .then(data => console.log(data.mensagem));
        .then(data => {
            if (data.mensagem === "OK") {
                fetch('https://acc-manager.southindia.cloudapp.azure.com/temfamilia', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" }
                })
                .then(second => second.json())
                // .then(data2 => console.log(data2.mensagem));
                .then(data2 => {
                    if (data2.mensagem === "FALSE") {
                        navigate("/family/no_family/")
                    } else{
                        navigate("/family/info_family/")
                    } 
                });                
            } else {
                setLogged(false)
            }
        });
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