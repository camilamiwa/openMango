import React from 'react'
import { useNavigate } from "react-router-dom";

import './home.css';
// import Navbar from '../../components/Navbar';

import SemFamilia from './semFamilia';
import FamiliaDados from './dados';

const FamiliaHome = () => {
  let navigate = useNavigate();

  fetch('http://localhost:5000/temfamilia', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        if (data.mensagem === "FALSE") {
            return <SemFamilia />
        } else{
            return <FamiliaDados />
            // navigate("/family/info_family/")
        } 
    });  

    return <FamiliaDados />
}
   
export default FamiliaHome;
