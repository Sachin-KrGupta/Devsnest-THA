import React from 'react'
import './Block.css'

export default function Block(props) {
    return (
        <div className="block">
        <h3>{props.head}</h3>
        <p>You have consumed {props.cal} calories</p>
        </div>
    )
}
