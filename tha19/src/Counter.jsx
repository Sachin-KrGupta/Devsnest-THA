import React from 'react';
import {useState} from 'react';


export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="block">
            <button className="btn" onClick={()=>{
                let x = count;
                x += 1;
                setCount(x);
            }}>{count}</button>
        </div>
    );
}

