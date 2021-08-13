import {useState, createContext} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'
import About from './About'
import LoggedIn from './LoggedIn'

const Lcontext = createContext();


function App() {
  
  const [login, setLogin] = useState(false);
  const auth = {login: login, setLogin: () => {setLogin(!login)}};
  return (
    <div className="App">
      <Router>
        
        <Lcontext.Provider value={auth}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loggedIn" component={LoggedIn} />
          </Switch>
        </Lcontext.Provider>
        
      </Router>
    </div>
  );
}

export default App;
export {Lcontext};