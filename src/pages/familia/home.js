import React from 'react'

import './home.css';
// import Navbar from '../../components/Navbar';

import SemFamilia from './semFamilia';
import FamiliaDados from './dados';

const FamiliaHome = () => {
    const tokenJWT = document.cookie.split('tokenJWT=')[1].split(';')[0]
    

  fetch('http://localhost:5000/temfamilia', {
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
