import React from 'react'

import './home.css';
// import Navbar from '../../components/Navbar';

import SemFamilia from './semFamilia';
import FamiliaDados from './dados';

const FamiliaHome = () => {

  fetch('http://localhost:5000/temfamilia', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
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
