import React from 'react';
import './App.css';
import { Img } from 'react-image';
import logo from './KomischeKatzenLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt="Logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
