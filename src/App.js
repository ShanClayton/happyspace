import React from 'react'
import Footer from './components/Footer';
import HandV from './components/HandV';
import Search from './components/Search';
import HomesCondos from './components/HomesCondos';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomesCondos />
      <Search />
      <HandV />
      <Footer />
    </div>
  );
}

export default App;
