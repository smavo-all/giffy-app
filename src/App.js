import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListGifs from './Components/ListGifs';
import { Link, Route } from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>
        <Link to='/gif/stich'>Gifs de Stich</Link>
        <Link to='/gif/goku'>Gifs de Goku</Link>
        <Route
          component={ListGifs}
          path='/gif/:search'
        />
      </section>
    </div>
  );
}

export default App;
