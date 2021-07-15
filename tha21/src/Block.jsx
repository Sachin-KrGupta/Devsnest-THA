import React from 'react'
import {useState} from 'react'

import './Block.css'

export default function Block(props) {
    let arr = props.cds;
    const [flag, setFlag] = useState(0);
    const [head, setHead] = useState("");
    const [cals, setCals] = useState("");
    function headHandler(e) {
        setHead(e.target.value);
    }
    function calsHandler(e) {
        setCals(e.target.value);
    }
    function editHandler(e) {
        let x = 3;
        e.preventDefault();
        console.log(head,cals);
        props.setItems(prevState => {
            return prevState.map((cd, i) => {
              if (i === props.in) return {'head': head,'cal': cals };
              return cd;
            });
          });
        setCals("");
        setHead("");    
        setFlag(0);
    }
    return (
        <div className="block">
        {(flag===1) ? <form className='edit-form' onSubmit={editHandler}>
            <input className="edit-input" type="text" onChange={headHandler} placeholder="Item" value={head} />
            <input className="edit-input" type="text" onChange={calsHandler} placeholder="Calories" value={cals}/><br/>
            <button className="edit-submit" type="submit"><i className="fas fa-check-circle fa-2x"></i></button>
        </form> :   <div className="hello">
                <h3>{props.head}</h3>
            <p>You have consumed {console.log(props.cal)} {props.cal} calories </p>
            <div className="btns">
                <i className="fas fa-times-circle dlt fa-2x" onClick = {
                    () => {
                        let x = arr.filter((el, i) => i != props.in);
                        console.log(x);
                        props.setItems(x);
                    }
                }></i>
                <i className="fas fa-edit edit fa-2x" onClick={()=>{
                    setHead(props.head);
                    setCals(props.cal);
                    setFlag(1);
                }}></i>
            </div>
        </div> }
        
        
        
        </div>
    )
}
