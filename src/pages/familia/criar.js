import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const FamiliaCriar = () => {
    const [idFamilia, setIdFamilia] = useState('');
    const [nomeFamilia, setNomeFamilia] = useState('');
    const [senhaFamilia, setSenhaFamilia] = useState('');
    const [showMessage, setShowMessage] = useState(true);
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_family = { idFamilia, nomeFamilia, senhaFamilia };       
        
        
        fetch('http://localhost:5000/criarfamilia', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_family)
        })
        .then(response => response.json())
        .then(data => {
            if (data.mensagem === "OK") {
                navigate("/family/info_family/")
            } else if (data.mensagem === "ID_NAO_DISPONIVEL") {
                setShowMessage(false)
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
            <h2>Criar nova família</h2>

            <div hidden={ showMessage }>
                <h3>Id já cadastrado. Cadastre sua família com outro id.</h3>
            </div>

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

                <label>Insira um id para sua família: </label>
                <input
                type="text" 
                required 
                value={idFamilia}
                onChange={(e) => setIdFamilia(e.target.value)}
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
