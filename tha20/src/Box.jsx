import React from 'react'
import {useState} from 'react'
import Block from './Block'

import './Block.css'

export default function Box() {
    const [cards, setItems] = useState([
        {
            'head' : 'Apple',
            'cal' : '67'
        },
        {
            'head' : 'Mango',
            'cal' : '69'
        },
        {
            'head' : 'PineApple',
            'cal' : '45'
        },
        {
            'head' : 'Watermelon',
            'cal' : '31'
        }
    ]);
    let arr = [];
    for(let i=0;i<cards.length;i++) {
        arr.push(
          <Block head={cards[i].head} cal={cards[i].cal} cds = {cards} setItems = {setItems} in = {i}/>
        );
    }
    return (
        <div className="box">
            {arr.length > 0 ? arr : <div>
                <h1 className="head">NO CARDS FOUND</h1>
            </div>}
        </div>
    );
}
