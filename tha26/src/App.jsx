import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeUsername } from './actions';
import './App.css';


function App() {
  const userName = useSelector((state) => state.userChanger);
  const email = useSelector((state) => state.emailChanger);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Input</h1>
      <input type="text" placeholder="Name" onChange={(e) => {
        dispatch(changeUsername(e.target.value));
      }} />
      <input type="email" placeholder="E-mail"  onChange={(e) => {
        dispatch(changeEmail(e.target.value));
      }}/>
      <h1>Data</h1>
      <p><b>Username: </b><span id="content">{userName}</span></p>
      <p><b>Email: </b><span id="content">{email}</span></p>
    </div>
  );
}

export default App;
