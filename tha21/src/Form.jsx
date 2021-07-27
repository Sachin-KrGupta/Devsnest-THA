import React, { useState } from 'react'
import './Form.css'


export default function Form(props) {

    const [text, setText] = useState("");
    const [cal, setCal] = useState("");
    function textHandler(e) {
        setText(e.target.value);
    }
    function calHandler(e) {
        setCal(e.target.value);
    }
    function formHandler(e) {
        e.preventDefault();
        props.setItems([...props.cds, {'head': text, 'cal': cal}]);
        setCal("");
        setText("");    
    }
    return (
        <div >
            <form className="form" onSubmit = {formHandler}>
                <input id="item" type="text" placeholder="Item" onChange={textHandler} value = {text} required/><br/>
                <input type="text" id="cal" placeholder="Calories" onChange={calHandler} value={cal} required/><br/>
                <button className="add-submit" type="submit">Add Item <i className="fas fa-plus"></i></button>
            </form>
        </div>
    );
}
