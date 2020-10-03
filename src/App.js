import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import ListGifs from './Components/ListGifs';
import { Link, Route } from "wouter";
import Home from './pages/Home/Index';
import Detail from './pages/Detail/Index';
import SearchResult from './pages/SearchResult/Index';
import logo from './logo.svg';
function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/' >
          <img className='App-logo' alt='Giphy Logo' src={logo} />
        </Link>

        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResult}
          path='/search/:search'
        />

        <Route
          component={Detail}
          path='/gif/:id'
        />
      </section>
    </div>
  );
}

export default App;
