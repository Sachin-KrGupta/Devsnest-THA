import React from 'react'
import {NavLink} from "react-router-dom"
import {useContext} from 'react'
import {Lcontext} from './App'


export default function Navbar() {
    const at = useContext(Lcontext);
    
    return (
        <div className="navbar">
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            {at.login===false ? <NavLink className="logInOut" to='/login'>
                Login
            </NavLink>: null}
            
            {at.login===true ? <NavLink className="logInOut" to='/' onClick = {at.setLogin}>
                Logout
            </NavLink>: null}
        </div>
    )
}
