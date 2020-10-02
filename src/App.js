import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListGifs from './Components/ListGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <ListGifs search='stich'/>
      </section>
    </div>
  );
}

export default App;
