import React, { useState, } from 'react';

export default function ToDo () {
    const [input, setInput] = useState("");
    const addItem = () => {
        if (input === "") return;
        console.log(input)
        const ul = document.getElementById("ul");
        const li = document.createElement("li");
        li.innerText = `${input}`;
        ul.appendChild(li);
        setInput("");

    }
    return (
        <>
            <input 
                type="text"
                value={input}
                placeholder="type to do item here..."
                onChange={event=>setInput(event.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <ul id="ul"></ul>
        </>
    )
}