import React from 'react';
import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import SearchResult from './pages/SearchResult/index';
import StaticContext from './context/StaticContex';
import { GifsContextProvider } from './context/GifsContext';
import logo from './logo.svg'

function App() {

  return (
    <StaticContext.Provider>
      <div className="App">
        <section className="App-content">
          <Link to='/' >
            <img className='App-logo' alt='Giphy Logo' src={logo} />
          </Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
