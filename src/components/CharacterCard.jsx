import React, { useState, useEffect } from 'react';

export default function CharacterCard ({name, height, homeworld}) {
    // const [home, setHome] = useState('')

    // useEffect(()=>{
    //     fetch(homeworld)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         // console.log('res from charcter', res)
    //         setHome(res.name)
    //     })
    //     .catch(error=>console.log(error))
    // }, [])

    return (
        <div className={'characterCard'}>
            <h2>{name}</h2>
            <p>Height: {height}cm</p>
            <p>Home World: {homeworld}</p>
        </div>
    )

}