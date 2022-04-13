import React, { useState, useContext, useEffect } from 'react';

import Navbar from '../../components/Navbar';

import { GlobalContext } from '../../context/GlobalContext';
import './my_home.css';

async function fetchContasInfo(tokenJWT) {
  return fetch('https://acc-manager.southindia.cloudapp.azure.com/mangobank-back/centralizarcontas', {
      method: 'GET', 
      headers: { 
        'x-access-token': tokenJWT
      }
  });    
}

async function handleFetch(tokenJWT, 
  id_login,
  setAccounts,
  setSaldoCC,
  setSaldoPP) {  
    const response = await fetchContasInfo(tokenJWT)
    const data = await response.json()
    
    const aux_user_data = data["membros"].filter( element => element.id_usuario == id_login)
    const user_data = aux_user_data[0]

    setAccounts(user_data["contas"])
    setSaldoCC(parseFloat(user_data["saldo_cc"]))
    setSaldoPP(parseFloat(user_data["saldo_pp"]))
}

const MeusDados = () => {
    const [saldoCC, setSaldoCC] = useState('');
    const [saldoPP, setSaldoPP] = useState('');
    const [accounts, setAccounts] = useState(['']);
    
    // const { tokenJWT } = useContext(GlobalContext) 
    
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    const id_login = document.cookie.split('id_login=')[1].split(';')[0]
    
    useEffect(() => {
      handleFetch(tokenJWT,
        id_login, 
        setAccounts,
        setSaldoCC,
        setSaldoPP)
    }, [] );  

    
    return (
        <div>
        <Navbar />
        <h3>Meus dados - contas</h3>   

        <p>Saldo CC: R$ { saldoCC }</p>
        <p>Saldo PP: R$ { saldoPP }</p>

        <div>
        {accounts.map((account, index) => (
          <div className="account-preview" key={index} >
            {/* <Link to={`/blogs/${account.id}`}> */}
            <h2>{ account.id_banco }</h2>
            <p>Número da conta: { account.cc }</p>
            <p>Saldo CC: R$ { account.saldo_cc }</p>
            <p>Saldo PP: R$ { account.saldo_pp }</p>
            {/* </Link> */}
          </div>
        ))}
        </div>
        
    </div>
    );
}

export default MeusDados;