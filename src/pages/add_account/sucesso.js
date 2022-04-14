import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

async function fetchContas(tokenJWT, new_account) {
    return fetch('http://localhost:5000/addconta', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'x-access-token': tokenJWT
        },
        body: JSON.stringify(new_account)    
    })
}

async function handleFetch(tokenJWT, new_account,
    setSucesso,
    setShowJaAdicionadaMsg) { 
        const response = await fetchContas(tokenJWT, new_account)
        const data = await response.json()
        if (data.mensagem === "OK") {
            setSucesso(false)
            setShowJaAdicionadaMsg(true)
        } else if (data.mensagem === "JA_ADICIONADA") {
            setSucesso(true)
            setShowJaAdicionadaMsg(false)
        } 
}

const Sucesso = () => {    
    // Url
    var loc = document.location;
    let hash = loc.hash.slice(1, );
    // console.log(hash)

    let token = hash.split('&')[1].split('=')[1];
    let cpf = hash.split('&')[2].split('=')[1];
    let id_banco = hash.split('&')[3].split('=')[1];

    // let token = 'pVfjCd163h9xj3pYZ0Uj7v6LSbVOpXDke13RnPilDC'
    // let cpf = '27'
    // let id_banco = '2'
    
    const [sucesso, setSucesso] = useState(true);    
    const [showJaAdicionadaMsg, setShowJaAdicionadaMsg] = useState(true);
        
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    const id_login = document.cookie.split('id_login=')[1].split(';')[0] 

    const new_account = { id_banco, token, id_login, cpf }; 
    console.log(new_account)

    useEffect(() => {
        handleFetch(tokenJWT, new_account,
            setSucesso,
            setShowJaAdicionadaMsg)
    }, [] );  

    return (
        <div>            
            <Navbar/>
            <div hidden={ showJaAdicionadaMsg }>
                <h3>Conta já foi adicionada.</h3>
                <p>Acesse os detalhes na aba <Link to="../my_accounts/">minhas contas</Link></p>
            </div>

            <div className="container" hidden={ sucesso }>
                <h2>Sucesso</h2>
                <p>Conta adicionada com sucesso!</p>
                <p>Acesse os detalhes na aba <Link to="../my_accounts/">minhas contas</Link></p>
            </div>
            <div className="container" hidden={ !sucesso }>
                <h2>Carregando</h2>
            </div>
        </div>
    );
}
   
export default Sucesso;