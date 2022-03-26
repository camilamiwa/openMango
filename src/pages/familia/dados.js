import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import './home.css';

function FamiliaDados() {
    const [saldoCC, setSaldoCC] = useState('');
    const [saldoPP, setSaldoPP] = useState('');
    const [users, setUsers] = useState(['']);
  
    useEffect(() => {
        fetch('http://localhost:5000/centralizarcontas', {
            method: 'GET', 
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data => {
          console.log("centralizar contas - família")
          setUsers(data["membros"])
          setSaldoCC(parseFloat(data["saldo_cc"]))
          setSaldoPP(parseFloat(data["saldo_pp"]))
        });    
    }, []);

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