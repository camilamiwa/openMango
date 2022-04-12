import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalContext';

async function fetchFamilia(tokenJWT, join_family) {
    return fetch('https://acc-manager.southindia.cloudapp.azure.com/entrarfamilia', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'x-access-token': tokenJWT
        },
        body: JSON.stringify(join_family)
    })
}

async function handleClick(tokenJWT, join_family,
    navigate,
    setShowIdFamiliyMsg,
    setShowPasswordMsg,
    setid_familia,
    setsenha) {
        const response = await fetchFamilia(tokenJWT, join_family)
        const data = await response.json()
        if (data.mensagem === "INC_OU_NEX") {
            setShowIdFamiliyMsg(false)
            setShowPasswordMsg(true)
            setid_familia('')
            setsenha('')
        } else if (data.mensagem === "SENHA_INCORRETA") {
            setShowPasswordMsg(false)
            setShowIdFamiliyMsg(true)
            setid_familia('')
            setsenha('')
        } else {
            navigate("/family/info_family/")
        }
}

const FamiliaEntrar = () => {
    const [id_familia, setid_familia] = useState('');
    const [senha, setsenha] = useState('');
    const [showPasswordMsg, setShowPasswordMsg] = useState(true);
    const [showIdFamiliyMsg, setShowIdFamiliyMsg] = useState(true);
    // const { tokenJWT } = useContext(GlobalContext) 
    
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    const id_login = document.cookie.split('id_login=')[1].split(';')[0]         
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const join_family = { id_familia, senha };
        handleClick(tokenJWT, join_family,
            navigate,
            setShowIdFamiliyMsg,
            setShowPasswordMsg,
            setid_familia,
            setsenha)
    }

    return (
        <div>
            <Navbar/>
            <h2>Entre em uma família</h2>
            
            <div hidden={ showPasswordMsg }>
                <h3>Senha incorreta.</h3>
            </div>
            <div hidden={ showIdFamiliyMsg }>
                <h3>Dados incorretos ou a familia nao existe</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Insira o id da sua família: </label>
                <input
                type="text" 
                required 
                value={ id_familia }
                onChange={(e) => setid_familia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>Insira a senha da família: </label>
                <input 
                type="password" 
                required 
                value={ senha }
                onChange={(e) => setsenha(e.target.value)}
                />
                <br></br>
                <br></br>

                <button>Entrar na família</button>
            </form>
        </div>
    );
    }
   
export default FamiliaEntrar;