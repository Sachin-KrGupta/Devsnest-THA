import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import App from './App'
import About from './About'
import Navb from './Navb'

export default function Routes() {
    return (
        <Router>
          <Navb />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <h1>Page not found</h1>
          </Switch>    
      </Router>
    )
}
