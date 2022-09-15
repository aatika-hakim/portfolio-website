import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';


// import components

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <div style={{height: '2000px'}}></div>
    </>
  );
  };

export default App;
