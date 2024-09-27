import React from 'react';
// import './App.css';
import './styles.css';
// import logo from './KomischeKatzenLogo.png';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <img src={logo} alt="Logo"/>
//         </div>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const screenSize = useScreenSize();

  return (
    <div className={`container ${screenSize}`}>
      <h1>Responsive React App</h1>
      <p>Current screen size: {screenSize}</p>
    </div>
  );
};

export default App;
