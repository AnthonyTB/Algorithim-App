import React from 'react';
import './App.css';
import AlgoForm from './components/AlgoForm/AlgoForm';
import Results from './components/Results/Results';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='toolHeader'>The tool of all tools</h1>
        <AlgoForm />
        <Results />
      </header>
    </div>
  );
}

export default App;
