import './App.css';
import React from 'react';
import { Heading } from './components/Header'; // Category iteration
import { Main } from './components/Main';

function App() {
  return (
    <div className='wrapper'>
      <Heading />
      <Main />
    </div>
  );
}

export default App;
