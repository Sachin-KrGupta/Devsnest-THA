import React, {useContext} from 'react'
import {NavLink} from "react-router-dom"
import {Lcontext} from './App'

export default function Login() {
    const at = useContext(Lcontext);
    return (
        <div className="login-form">
            <form>
                <input type="text" minLength="1" required /><br/>
                <input type="password" minLength="1" required /><br/>
                <NavLink to='/loggedIn' onClick = {at.setLogin}>
                    <button>Login</button>
                </NavLink>
            </form>
        </div>
    )
}
