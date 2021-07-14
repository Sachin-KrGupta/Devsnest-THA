import React from 'react'
import {useState} from 'react'

import './Block.css'

export default function Block(props) {
    let arr = props.cds;
    return (
        <div className="block">
        <h3>{props.head}</h3>
        <p>You have consumed {props.cal} calories <i class="fas fa-times-circle dlt fa-2x" onClick = {
            () => {
                let x = arr.filter((el, i) => i != props.in);
                console.log(x);
                props.setItems(x);
            }
        }></i></p>
        
        
        </div>
    )
}
