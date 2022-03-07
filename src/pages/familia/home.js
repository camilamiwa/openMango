import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import './home.css';
import Navbar from '../../components/Navbar';

const FamiliaHome = () => {
    return (
        <div>
          <Navbar/>
          <h1>Menu Família</h1>
          <Link to="no_family">No</Link>
          <br/>
          <Link to="create_family">Criar</Link>
          <br/>
          <Link to="join_family">Join</Link>
          <br/>
          <Link to="info_family">Info</Link>
        </div>
      );
    }
   
export default FamiliaHome;
