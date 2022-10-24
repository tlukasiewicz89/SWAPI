import React from 'react';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import ToDo from './components/ToDo.jsx';
import SWAPI from './components/SWAPI.jsx';

export default function App () {

    

    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">ToDo</Link></li>
                <li><Link to="/SWAPI">SWAPI</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path="/" element={<ToDo />}/>
                <Route path="/SWAPI" element={<SWAPI />}/>
            </Routes>
        </>
            
    )
}