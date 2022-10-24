import React from 'react';
import CharacterCard from './CharacterCard.jsx';
import axios from 'axios';
import { useState } from 'react';

export default function SWAPI () {    
    const [people, setPeople] = useState([]);
    const [homes, setHomes] = useState({});
    const [pageURL, setPageURL] = useState('https://swapi.dev/api/people/?page=1');

    const loadChars = async () => {
        try {
            const chars = await axios.get(pageURL);
            let obj = homes;
            //iterate over the characters array 
            for (const char of chars.data.results) {
                if (!obj[char.homeworld]) {
                    const data = await axios.get(char.homeworld);
                    obj[char.homeworld] = data.data;
                } 
            }
            setPeople(prev=>prev.concat(chars.data.results))
            setPageURL(chars.data.next);
            setHomes({...homes, ...obj});
        } catch (error) {
            console.log({ error });
        }
    };

    return (
        <>
            <h1>Star Wars API</h1>
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
                                homeworld={homes[person.homeworld].name}
                            />
                        )
                    })}
                </div>
            )}
            
            {pageURL &&(
                <button onClick={loadChars}>
                    Load More
                </button>
            )}
        </>
        
    )
}