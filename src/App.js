import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <div style={{ height: '400px', width: '250px', border: '1px solid black', margin: '40px' }}>
        <h1>Halo Dunia</h1>
      </div>

      {/* <Navbar />

      <Container className="py-6">
        <Banner />
        <Products />
      </Container> */}

    </div>
  );
};

export default App;
