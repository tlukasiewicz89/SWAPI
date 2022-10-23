import React from 'react';
import { useState } from 'react';
import CharacterCard from './components/CharacterCard'
import axios from 'axios';
export default function App () {

    const [people, setPeople] = useState([]);
    const [page, setPage] = useState('https://swapi.dev/api/people/?page=1');
    const [homes, setHomes] = useState({});

    const getHome = async (url) => {
        console.log(url)
        
        if (homes[url] === undefined) {
            const res = await axios.get(url)
            console.log({res})
            // setHomes({...homes, [url]: res})
        }
    }

    const loadChars = () => {

        fetch (page)
        .then(res=>res.json())
        .then(res=>{
            setPeople(prev=>prev.concat(res.results))
            setPage(res.next);
            // res.results.forEach(person =>{
            //     getHome(person.homeworld);
            // })
        })
        .catch(error=>console.log(error));

    }

    console.log({homes})
    return (
        <>
            <h1>SWAPI</h1>
            {people.length > 0 &&(
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {people.map(person=>{
                        return (
                            <CharacterCard 
                                key={person.name}
                                name={person.name}
                                height={person.height}
                                homeworld={person.homeworld}
                            />
                        )
                    })}
                </div>
            )}
            
            {page &&(
                <button onClick={loadChars}>
                    Load
                </button>
            )}
            
        </>
        
    )
}