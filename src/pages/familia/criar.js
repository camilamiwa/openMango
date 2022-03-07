import React, {useState} from 'react'

const FamiliaCriar = () => {
    const [nomeFamilia, setNomeFamilia] = useState('');
    const [senhaFamilia, setSenhaFamilia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_family = { nomeFamilia, senhaFamilia };
        
        fetch('http://localhost:5000/family/create_family', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_family)
        }).then(() => {
            console.log('new family added');
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
        <h2>Criar nova família</h2>
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

            <label>Criar uma senha: </label>
            <input 
            type="password" 
            required 
            value={senhaFamilia}
            onChange={(e) => setSenhaFamilia(e.target.value)}
            />
            <br></br>
            <br></br>

            <button>Criar família</button>
        </form>
        </div>
    );
    }
   
export default FamiliaCriar;
