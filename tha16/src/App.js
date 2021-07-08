import './App.css';
import Meme from './Meme.js';
import Chess from './Chess';
// import Row from './Row.js';

function App() {
  return (
    <div className="App">
      <Meme source = "https://i.kym-cdn.com/entries/icons/original/000/020/002/memeeman.jpg" text = "This is a Meme." title = "Stonks !" />
      <Chess />
    </div>
  );
}

export default App;
