import React, { useState, useEffect, useContext } from 'react';

import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalContext';
import './home.css';

async function fetchContasInfo( tokenJWT ) {
  return fetch('https://acc-manager.southindia.cloudapp.azure.com/mangobank-back/centralizarcontas', {
      method: 'GET', 
      headers: { 
        'x-access-token': tokenJWT
      }
  });    
}

async function handleFetch(tokenJWT, 
  setUsers,
  setSaldoCC,
  setSaldoPP) {  
    const response = await fetchContasInfo(tokenJWT)
    const data = await response.json()
    setUsers(data["membros"])
    setSaldoCC(parseFloat(data["saldo_cc"]))
    setSaldoPP(parseFloat(data["saldo_pp"]))
}

const FamiliaDados= () => {
    const [saldoCC, setSaldoCC] = useState('');
    const [saldoPP, setSaldoPP] = useState('');
    const [users, setUsers] = useState(['']);
  
    // const { tokenJWT } = useContext(GlobalContext) 
    
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    const id_login = document.cookie.split('id_login=')[1].split(';')[0] 

    useEffect(() => {
      handleFetch(tokenJWT, 
        setUsers,
        setSaldoCC,
        setSaldoPP)
    }, [] );  

    return (
        <div>
        <Navbar />
        <h3>Dados da família</h3>   
        <h4>Saldos totais</h4>   
        <p>Saldo CC: R$ { saldoCC }</p>
        <p>Saldo PP: R$ { saldoPP }</p>

        <div>
        {users.map((user, index) => (
          <div className="user-preview" key={index} >
            {/* <Link to={`/blogs/${account.id}`}> */}
              <h2>{ user.nome }</h2>
              <p>Saldo CC: R$ { user.saldo_cc }</p>
              <p>Saldo PP: R$ { user.saldo_pp }</p>
            {/* </Link> */}
          </div>
        ))}
        </div>
        
    </div>
    );
}

export default FamiliaDados;