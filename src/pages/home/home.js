import React from 'react'
import { Routes, Route } from "react-router-dom";

import './home.css';
import Navbar from '../../components/Navbar';
import SemContas from './semContas';

const Home = () => {
    return (
        <div>
          <Navbar/>
          <Routes>
            <Route path="" element={<SemContas />} />
          </Routes>
        </div>
      );
    }
   
export default Home;
