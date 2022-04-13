import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalContext';

async function fetchFamilia(tokenJWT, new_family) {
    return fetch('https://acc-manager.southindia.cloudapp.azure.com/mangobank-back/criarfamilia', {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json",
            'x-access-token': tokenJWT
        },
        body: JSON.stringify(new_family)
    })
}

async function handleClick(tokenJWT, new_family,
    navigate,
    setShowMessage,
    setIdFamilia,
    setSenhaFamilia) {
        const response = await fetchFamilia(tokenJWT, new_family)
        const data = await response.json()
        if (data.mensagem === "ID_NAO_DISPONIVEL") {
            setShowMessage(false)
            setIdFamilia('')
            setSenhaFamilia('')
        } else {
            navigate("/family/info_family/")
        }
}

const FamiliaCriar = () => {
    const [id_familia, setIdFamilia] = useState('');
    const [nome, setNomeFamilia] = useState('');
    const [senha, setSenhaFamilia] = useState('');
    const [showMessage, setShowMessage] = useState(true);
    // const { tokenJWT } = useContext(GlobalContext) 
    
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    const id_login = document.cookie.split('id_login=')[1].split(';')[0] 
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_family = { id_familia, nome, senha };         
        handleClick(tokenJWT, new_family,
            navigate,
            setShowMessage,
            setIdFamilia,
            setSenhaFamilia)
    }

    return (
        <div>            
            <Navbar/>
            <h2>Criar nova família</h2>

            <div hidden={ showMessage }>
                <h3>Id já cadastrado. Cadastre sua família com outro id.</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Insira o nome da sua família: </label>
                <input
                type="text" 
                required 
                value={ nome }
                onChange={(e) => setNomeFamilia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>Insira um id para sua família: </label>
                <input
                type="text" 
                required 
                value={ id_familia }
                onChange={(e) => setIdFamilia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>Criar uma senha: </label>
                <input 
                type="password" 
                required 
                value={ senha }
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
