import React from 'react';
import { Link } from 'react-router-dom';
export default function Booklist () {


    return (
        <>
            <h1>Book List</h1>
            <Link to='/books/1'>Book 1</Link>
            <Link to='/books/2'>Book 2</Link>
        </>

    )
} 