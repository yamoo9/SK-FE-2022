import logoPath from '../assets/logo.svg'
import { Logo } from '../components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo source={logoPath} label={'React logo'} />
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
      </header>
    </div>
  );
}

export default App;
