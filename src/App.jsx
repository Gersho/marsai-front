import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-primary">color primary</h1>
      <h1 className="bg-secondary">color secondary</h1>
      <h1 className="bg-tertiary">color tertiary</h1>
      <h1 className="bg-gradient">color gradient</h1>
      <h1 className="bg-accent">color accent</h1>
      <h1 className="bg-bg">color bg</h1>
      <h1 className="bg-white">color white</h1>
      <h1 className="bg-muted">color muted</h1>
      <h1 className="bg-subtitle">color subtitle</h1>
      <h1 className="font-default">font</h1>
      <h1 className="font-normal">weight</h1>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
