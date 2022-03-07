import React from 'react'
import { Link } from "react-router-dom";

import './home.css';
import Navbar from '../../components/Navbar';

const FamiliaHome = () => {
    return (
        <div>
          <Navbar/>
          <h1>Menu Família</h1>
          <Link to="no_family">Sem família cadastrada</Link>
          <br/>
          <Link to="create_family">Criar</Link>
          <br/>
          <Link to="join_family">Join</Link>
          <br/>
          <Link to="info_family">Info</Link>
          <br/>
          <Link to="no_accounts">No accounts</Link>
        </div>
      );
    }
   
export default FamiliaHome;
