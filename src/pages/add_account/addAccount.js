import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalContext';

async function fetchContas(token, new_account) {
    return fetch('http://localhost:5000/addconta', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'x-access-token': token
        },
        body: JSON.stringify(new_account)
    })
}

async function handleClick(token, new_account,
    navigate,
    setShowOutroCpfMsg,
    setShowDadosIncorretosMsg,
    setShowJaAdicionadaMsg,
    setIdBanco,
    setAgencia,
    setCc) {    
        const response = await fetchContas(token, new_account)
        const data = await response.json()
        if (data.mensagem === "OK") {
            navigate("/my_accounts/")
        } else if (data.mensagem === "OUTRO_CPF") {
            setShowOutroCpfMsg(false)
            setShowDadosIncorretosMsg(true)
            setShowJaAdicionadaMsg(true)
            setIdBanco('')
            setAgencia('')
            setCc('')
        } else if (data.mensagem === "NAO_ENCONTRADA") {
            setShowDadosIncorretosMsg(false)
            setShowOutroCpfMsg(true)
            setShowJaAdicionadaMsg(true)
            setIdBanco('')
            setAgencia('')
            setCc('')
        } else if (data.mensagem === "JA_ADICIONADA") {
            setShowJaAdicionadaMsg(false)
            setShowOutroCpfMsg(true)
            setShowDadosIncorretosMsg(true)
            setIdBanco('')
            setAgencia('')
            setCc('')
        } 
}

const AddAccount = () => {
    const [id_banco, setIdBanco] = useState('1');
    const [agencia, setAgencia] = useState('');
    const [cc, setCc] = useState('');
    
    const [showOutroCpfMsg, setShowOutroCpfMsg] = useState(true);
    const [showDadosIncorretosMsg, setShowDadosIncorretosMsg] = useState(true);
    const [showJaAdicionadaMsg, setShowJaAdicionadaMsg] = useState(true);
    
    const { token } = useContext(GlobalContext) 

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const new_account = { id_banco, agencia, cc };  
        
        handleClick(token, new_account,
            navigate,
            setShowOutroCpfMsg,
            setShowDadosIncorretosMsg,
            setShowJaAdicionadaMsg,
            setIdBanco,
            setAgencia,
            setCc)
    }

    return (
        <div>            
            <Navbar/>
            <h2>Adicione uma nova conta</h2>

            <div hidden={ showOutroCpfMsg }>
                <h3>Conta vinculada a outro CPF.</h3>
            </div>
            <div hidden={ showDadosIncorretosMsg }>
                <h3>Dados incorretos. Conta não encontrada.</h3>
            </div>
            <div hidden={ showJaAdicionadaMsg }>
                <h3>Conta ja foi adicionada.</h3>
                <p>Acesse os detalhes na aba <Link to="../my_accounts/">minhas contas</Link></p>
            </div>

            <form onSubmit={handleSubmit} hidden={ !showJaAdicionadaMsg }>

                <label>
                  Banco:   
                  <select value={ id_banco } onChange={(e) => setIdBanco(e.target.value)}>
                    <option value="1">1 - banco mexerica</option>
                    <option value="2">2 - banco limão</option>
                    <option value="567">567 - banco abacaxi</option>
                  </select>
                </label>
                <br></br>
                <br></br>

                <label>Agência: </label>
                <input
                type="text" 
                required 
                value={ agencia }
                onChange={(e) => setAgencia(e.target.value)}
                />
                <br></br>
                <br></br>

                <label>CC com dígito: </label>
                <input 
                type="text" 
                required 
                value={ cc }
                onChange={(e) => setCc(e.target.value)}
                />
                <br></br>
                <br></br>

                <button>Adicionar conta</button>
            </form>
        </div>
    );
    }
   
export default AddAccount;