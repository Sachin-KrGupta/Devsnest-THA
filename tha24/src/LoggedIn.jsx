import React from 'react'
import {useContext} from 'react'
import {Lcontext} from './App'

export default function LoggedIn() {
    const at = useContext(Lcontext);
    return (
        <div>
            {at.login===true ? <h1>You are Logged In</h1> : <h1>You are not logged in</h1>}
        </div>
    )
}
