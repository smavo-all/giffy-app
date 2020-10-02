import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Gif from './Components/Gif';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([]);
  /*const state = useState([]);
  const value = state[0];
  const updateValue = state[1];*/

  useEffect(function () {
    getGifs({ search: 'dog' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">{
        gifs.map(simplegifs =>
          <Gif
            key={simplegifs.id}
            title={simplegifs.title}
            url={simplegifs.url}
            id={simplegifs.id} />
        )
      }
      </section>
    </div>
  );
}

export default App;
