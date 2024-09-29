import React from 'react';
import useScreenSize from './useScreenSize';
import './App.css';
import './styles.css';
import logo from './KomischeKatzenLogo.png';

const App = () => {
  const screenSize = useScreenSize();

  return (
    <div className="App">
      <header className="App-header">
        <div className="container ${screenSize}">
          <img src={logo} alt="Logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
