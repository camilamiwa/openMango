import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

import Navbar from '../../components/Navbar';

const AddAccount = () => {
    
    const cpf = document.cookie.split('cpf=')[1].split(';')[0]
    
    let destino = `http://localhost:3001/compartilhamento/?cpf=${cpf}`
    return (       
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Redirecione para a página do Open Banking para adicionar nova conta.</h3>
            <br/>
            <br/>
            <a href={destino} target='_blank'><button>Ir para OB</button></a>
        </div>         
    )
}
   
export default AddAccount;