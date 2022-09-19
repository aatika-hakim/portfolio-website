import React from 'react';

// import components

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Contacts />
      <Footer />
      <BackToTopBtn />
    </>
  );
  };

export default App;
