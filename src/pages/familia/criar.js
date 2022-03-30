import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const FamiliaCriar = () => {
    const [id_familia, setIdFamilia] = useState('');
    const [nome, setNomeFamilia] = useState('');
    const [senha, setSenhaFamilia] = useState('');
    const [showMessage, setShowMessage] = useState(true);
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_family = { id_familia, nome, senha };       
        
        
        fetch('https://acc-manager.southindia.cloudapp.azure.com/criarfamilia', {
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
