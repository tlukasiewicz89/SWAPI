import React from 'react';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import ToDo from './components/ToDo.jsx';
import SWAPI from './components/SWAPI.jsx';
import Book from './components/Book.jsx';
import Booklist from './components/Booklist.jsx';
export default function App () {

    

    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">ToDo</Link></li>
                <li><Link to="/SWAPI">SWAPI</Link></li>
                <li><Link to="/books">Books</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path="/" element={<ToDo />}/>
                <Route path="/SWAPI" element={<SWAPI />}/>
                <Route path="/books">
                    <Route index element={<Booklist />} />
                    <Route path=":id" element={<Book />} />
                </Route>
                {/* <Route path="/books" element={<Booklist />} />
                <Route path="/books/:id" element={<Book />} /> */}
            </Routes>
        </>
            
    )
}