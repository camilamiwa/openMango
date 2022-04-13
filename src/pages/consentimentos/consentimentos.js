import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

import Navbar from '../../components/Navbar';

const Consentimentos = () => {
    const cpf = document.cookie.split('cpf=')[1].split(';')[0]

    let destino = `https://acc-manager.southindia.cloudapp.azure.com/openbanking-front/gestao/?cpf=${cpf}`
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