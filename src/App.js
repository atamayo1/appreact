import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import MyComponent from "./components/MyComponent";
import Peliculas from "./components/Peliculas";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="components">
          <MyComponent></MyComponent>
          <Peliculas></Peliculas>
        </section>
      </header>

    </div>
  );
}

export default App;
