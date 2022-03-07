import React from 'react'
import { Link } from "react-router-dom";

const SemFamilia = () => {   
    return (
        <>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Família</h2>
                <br/>
                <p>Você pode criar uma família no MangoBank</p>
                <br/>
                <Link to="/family/create_family">Criar</Link>
                <br/>
                <p>Ou entrar em uma família existente</p>
                <br/>
                <Link to="/family/join_family">Entrar</Link>
            </div>
        </>   
    )
    }
   
export default SemFamilia;
