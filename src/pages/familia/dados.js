import React, { useState, useEffect, useContext } from 'react';

import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../context/GlobalContext';
import './home.css';

async function fetchContasInfo(token) {
  return fetch('http://localhost:5000/centralizarcontas', {
      method: 'GET', 
      headers: { 
        'x-access-token': token
      }
  });    
}

async function handleFetch(token, 
  setUsers,
  setSaldoCC,
  setSaldoPP) {  
    const response = await fetchContasInfo(token)
    const data = await response.json()
    setUsers(data["membros"])
    setSaldoCC(parseFloat(data["saldo_cc"]))
    setSaldoPP(parseFloat(data["saldo_pp"]))
}

const FamiliaDados= () => {
    const [saldoCC, setSaldoCC] = useState('');
    const [saldoPP, setSaldoPP] = useState('');
    const [users, setUsers] = useState(['']);
  
    const { token } = useContext(GlobalContext) 

    useEffect(() => {
      handleFetch(token, 
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