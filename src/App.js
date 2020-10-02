import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([]);
  /*const state = useState([]);
  const value = state[0];
  const updateValue = state[1];*/

  useEffect(function () {
    getGifs({search:'dog'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>
        {
          gifs.map(singleGif => <img src={singleGif} alt='Giphy' />)
        }

      </section>
    </div>
  );
}

export default App;
