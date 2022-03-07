import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';

const FamiliaSemContas = () => {   
    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Família</h2>
            <br/>
            <p>Nenhum membro da sua família tem contas cadastradas</p>
            <p>Cadastre suas contas e elas aparecerão aqui para todos os membros da família</p>
            <br/>
            <Link to="/add_account">Cadastrar nova conta</Link>
        </div>
    )
    }
   
export default FamiliaSemContas;
