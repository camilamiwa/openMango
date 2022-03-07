import React, {useState} from 'react'
import Navbar from '../../components/Navbar';

const FamiliaEntrar = () => {
    const [nomeFamilia, setNomeFamilia] = useState('');
    const [senhaFamilia, setSenhaFamilia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const join_family = { nomeFamilia, senhaFamilia };
        
        fetch('http://localhost:5000/family/join_family', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(join_family)
        }).then(() => {
            console.log('entered into family');
        })
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
            <Navbar/>
            <h2>Entre em uma família</h2>
            <form onSubmit={handleSubmit}>
                <label>Insira o nome da sua família: </label>
                <input
                type="text" 
                required 
                value={nomeFamilia}
                onChange={(e) => setNomeFamilia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>Insira a senha da família: </label>
                <input 
                type="password" 
                required 
                value={senhaFamilia}
                onChange={(e) => setSenhaFamilia(e.target.value)}
                />
                <br></br>
                <br></br>

                <button>Entrar na família</button>
            </form>
        </div>
    );
    }
   
export default FamiliaEntrar;