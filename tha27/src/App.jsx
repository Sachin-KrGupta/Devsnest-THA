import './App.css';
import{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearAll, removeItem } from './actions';
import todoReducer from './reducers/todoReducer';

function App() {

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const lists = useSelector((state) => state.todoReducer);
  function textHandler(e) {
    setText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if(text.length !== 0) {
      dispatch(addItem(text));
    }
    setText("");
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={textHandler} value={text} />
        <input type="submit" value="Add" />
      </form>
      <button onClick={() => {
        dispatch(clearAll()); 
      }}>Clear All</button>
      
      <ul>
        {lists.map((item, index) => {
          return <li key={index}>{item} <button onClick={() => {
            dispatch(removeItem(index));
          }}> X </button></li>
        })}
      </ul>
    </div>
  );
}

export default App;
