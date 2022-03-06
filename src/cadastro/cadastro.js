import React, {useState} from 'react'
import './cadastro.css';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { nome, nascimento, cpf, endereco, telefone, email, senha };
        
        fetch('http://localhost:5000/cadastrar/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
        })
    }

    return (
        <div>
        <h2>Add a New User</h2>
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
            type="text" 
            required 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <label>Data de nascimento:</label>
            <input 
            type="date" 
            required 
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            />

            <label>CPF:</label>
            <input 
            type="text" 
            required 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />

            <label>Endereço completo:</label>
            <input
            type="text" 
            required 
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            />

            <label>Telefone:</label>
            <input
            type="text" 
            required 
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            />

            <label>Email:</label>
            <input 
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha:</label>
            <input 
            type="text" 
            required 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
{/* 
            <label>Confirme sua senha:</label>
            <input 
            type="text" 
            required 
            value={senhaConfirmacao}
            onChange={(e) => setSenhaConfirmacao(e.target.value)}
            /> */}

            <button>Cadastrar</button>
        </form>
        </div>
    );
    }
   
export default Cadastro;
