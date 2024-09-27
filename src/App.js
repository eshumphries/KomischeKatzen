import './App.css';
import logo from './KomischeKatzenLogo.png';
import { useMediaQuery } from 'react-responsive';

const AdjustForMobile = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600)' });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AdjustForMobile/>
          <img src={logo} alt="Logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
