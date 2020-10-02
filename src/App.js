import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

const GIFS = ['https://media4.giphy.com/media/HDR31jsQUPqQo/200w.webp?cid=ecf05e47kwqvpiplwzjz9rck8k60de9ck73hhzfmwf9fw8d8&rid=200w.webp',
              'https://media2.giphy.com/media/KyBX9ektgXWve/giphy.webp?cid=ecf05e47kwqvpiplwzjz9rck8k60de9ck73hhzfmwf9fw8d8&rid=giphy.webp',
              'https://media4.giphy.com/media/aUhEBE0T8XNHa/200w.webp?cid=ecf05e47kwqvpiplwzjz9rck8k60de9ck73hhzfmwf9fw8d8&rid=200w.webp'];

function App() {
  const [gifs, setGifs] = useState(GIFS);
  /*const state = useState([]);
  const value = state[0];
  const updateValue = state[1];*/

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>
        {
          gifs.map(singleGif => <img src={singleGif} alt='Giphy'/>)
        }

      </section>
    </div>
  );
}

export default App;
