import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  useEffect(() => {
      document.title = 'Erin Argo | Portfolio'
  }); 
  return (
    <Routes>
      <Route path='/portfolio' element={ <Layout /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
    </Routes>
  );
}

export default App;
