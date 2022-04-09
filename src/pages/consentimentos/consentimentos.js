import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

import Navbar from '../../components/Navbar';

const Consentimentos = () => {
    const { cpf } = useContext(GlobalContext) 
    let destino = `http://localhost:3001/consentimentos/?cpf=${cpf}`
    return (       
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Redirecione para a página do Open Banking para gerenciar consentimentos.</h3>
            <br/>
            <br/>
            <a href={destino} target='_blank'><button>Ir para OB</button></a>
        </div>         
    )
}
   
export default Consentimentos;