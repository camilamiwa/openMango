import React from 'react'

import './home.css';
// import Navbar from '../../components/Navbar';

import SemFamilia from './semFamilia';
import FamiliaDados from './dados';

const FamiliaHome = () => {
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    

  fetch('https://acc-manager.southindia.cloudapp.azure.com/temfamilia', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'x-access-token': tokenJWT
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensagem === "FALSE") {
            return <SemFamilia />
        } else{
            return <FamiliaDados />
        } 
    });  

    return <FamiliaDados />
}
   
export default FamiliaHome;
