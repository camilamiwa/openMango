import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const FamiliaEntrar = () => {
    const [idFamilia, setIdFamilia] = useState('');
    const [senhaFamilia, setSenhaFamilia] = useState('');
    const [showPasswordMsg, setShowPasswordMsg] = useState(true);
    const [showIdFamiliyMsg, setShowIdFamiliyMsg] = useState(true);
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const join_family = { idFamilia, senhaFamilia };
        
        fetch('https://acc-manager.southindia.cloudapp.azure.com/entrarfamilia', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(join_family)
        })
        .then(response => response.json())
        // .then(data => console.log(data.mensagem));
        .then(data => {
            if (data.mensagem === "OK") {
                navigate("/family/info_family/")
            } else if (data.mensagem === "INC_OU_NEX") {
                setShowIdFamiliyMsg(false)
                setShowPasswordMsg(true)
                setIdFamilia('')
                setSenhaFamilia('')
            } else if (data.mensagem === "SENHA_INCORRETA") {
                setShowPasswordMsg(false)
                setShowIdFamiliyMsg(true)
                setIdFamilia('')
                setSenhaFamilia('')
            } else {
                navigate("/family/info_family/")
            }
        
        });
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
                value={ idFamilia }
                onChange={(e) => setIdFamilia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>Insira a senha da família: </label>
                <input 
                type="password" 
                required 
                value={ senhaFamilia }
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