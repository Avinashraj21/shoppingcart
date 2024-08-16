import React, { useState } from 'react';
import Navigation from './component/Navigation';
import Header from './component/Header';
import Section from './component/Section';

import Footer from './component/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navigation cartQuantity={cart.length} />
      <Header />
      <Section cart={cart} setCart={setCart} />
      
      <Footer />
    </>
  );
}

export default App;
