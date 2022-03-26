import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import './my_home.css';

function MeusDados() {
    const [saldoCC, setSaldoCC] = useState('');
    const [saldoPP, setSaldoPP] = useState('');
    const [accounts, setAccounts] = useState(['']);
  
    useEffect(() => {
        fetch('http://localhost:5000/centralizarcontas', {
            method: 'GET', 
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data => {
          console.log("centralizar contas - user")
          setAccounts(data["membros"][0]["contas"])
          setSaldoCC(parseFloat(data["membros"][0]["saldo_cc"]))
          setSaldoPP(parseFloat(data["membros"][0]["saldo_pp"]))
        });    
    }, []);

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