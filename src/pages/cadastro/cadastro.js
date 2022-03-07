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
        
        fetch('http://localhost:5000/cadastrar', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log(data.mensagem));

    }

    // somente quando clicar no link de cadastrar
    // receber mensagem do back
    // if (nome === 'Miwa') {
    //     alert('CPF já cadastrado');
    // }
    // else {
    //     alert('Usuário cadastrado com sucesso')
    // }

    return (
        <div>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
            <label>Nome: </label>
            <input
            type="text" 
            required 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Data de nascimento: </label>
            <input 
            type="date" 
            required 
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>CPF: </label>
            <input 
            type="text" 
            required 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Endereço completo: </label>
            <input
            type="text" 
            required 
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Telefone: </label>
            <input
            type="text" 
            required 
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Email: </label>
            <input 
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>

            <label>Senha: </label>
            <input 
            type="password" 
            required 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <br></br>
            <br></br>
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
