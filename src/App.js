import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';


// import components

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <div style={{height: '2000px'}}></div>
    </>
  );
  };

export default App;
