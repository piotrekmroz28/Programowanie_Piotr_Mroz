import React from 'react';
import Zamowienie from './components/zamowienie';
import Skomponuj from './components/skomponuj';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zamów pizzę</h1>
      </header>
      <div className='content'>
        <Skomponuj />
        <Zamowienie />
      </div>
      
    </div>
  );
}

export default App;
