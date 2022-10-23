import React, { useState, useEffect } from 'react';

export default function CharacterCard ({name, height, homeworld}) {
    const [home, setHome] = useState('')

    useEffect(()=>{
        fetch(homeworld)
        .then(res=>res.json())
        .then(res=>{
            // console.log('res from charcter', res)
            setHome(res.name)
        })
        .catch(error=>console.log(error))
    }, [])

    return (
        <div style={{
            border: '1px solid black',
            borderRadius: "10px",
            width: "250px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"

        }}>
            <h3>{name}</h3>
            <p>Height: {height}cm</p>
            <p>Home World: {home}</p>
        </div>
    )

}