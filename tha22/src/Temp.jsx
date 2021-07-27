import React from 'react';
import {useState, useEffect} from 'react'

export default function Temp({templates, setMeme}) {
    return (
        <div>
            <h1>MEME TEMPLATES ! CLICK ON ONE TO GENERATE MEME !</h1>
            {console.log(templates)}
            {templates.map((e,i) => {
                return (
                <div key={i} className="prnt">
                    <div style={{backgroundImage:`url(${e.url})`}} className="image" onClick = {() => {
                        setMeme(e);
                    }}>
                    </div>
                </div>
                
                );
            })}
        </div>
    )
}
