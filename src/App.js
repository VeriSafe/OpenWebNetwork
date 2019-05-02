import React from 'react';
import logo from './verisafe-logo-mono.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="VeriSafe Logo" />
        <p>
         VeriSafe - This demo page is powered by https://openweb.network/
        </p>
        <a
          className="App-link"
          href="https://verisafe.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          VeriSafe - 'Normal' website
        </a>
      </header>
    </div>
  );
}

export default App;
