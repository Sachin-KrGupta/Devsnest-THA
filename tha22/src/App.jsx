import React, {useState, useEffect} from 'react';
import Temp from './Temp'
import Meme from './Meme'

import './App.css';

function App() {

  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      setTemplates(data.data.memes);
    });
  }, []);
  return (
    <div className="App">
      {meme === null ?  <Temp templates = {templates} setMeme = {setMeme} /> : <Meme meme={meme} setMeme = {setMeme} />}
    </div>
  );
}

export default App;
