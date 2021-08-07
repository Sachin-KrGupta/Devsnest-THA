import React from 'react'
import { useState } from  "react"
import EditArray from "./EditArray"

export default function Main() {
    const lst = EditArray(["Mango", "PineApple", "Guava", "Watermelon"]);
    const [value, setValue] = useState("");
    const [del, setDel] = useState();
    return (
        <div className="main">
            <input type="text" placeholder="add" value = {value} onChange= {(e) => {
                setValue(e.target.value);
            }} />
            <button onClick = {() => {
                lst.push(value);
                setValue("");
            }}>add</button>
            <input type="number" placeholder="erase element (enter index)" value = {del} onChange= {(e) => {
                setDel(parseInt(e.target.value));
            }} />
            <button onClick = {() => {
                lst.erase(del);
                setDel("");
            }}>Erase</button>
            {
                lst.item.length > 0 ? <button onClick={() => {
                    lst.eraseAll();
                }}>Erase All</button> : <button onClick={() => {
                    lst.eraseAll();
                }} disabled>Erase All</button>
            }
            <ul>
                {lst.item.map((i,index) => {
                return <div><li className="list">{index} {i}</li><hr/></div>
                })}
            </ul>
            
            
        </div>
    )
}
