import './App.css';
import React from 'react';
import { ResourceSection } from './components/ResourceSection'; // Resource iteration
import { CategorySection } from './components/CategorySection'; // Category iteration
import { Heading } from './components/Header'; // Category iteration
import Example from './components/Header';

function App() {
  return (
    <div className='wrapper'>
      <Heading />
      <CategorySection />
      <ResourceSection />
    </div>
  );
}

export default App;
