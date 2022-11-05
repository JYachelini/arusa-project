import React from 'react';
import { Container } from '@mui/material';

import './App.css';
import './assets/fonts/RecklessNeue/stylesheet.css';
import './assets/fonts/NeueMontreal/stylesheet.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <Container disableGutters className="App" sx={{ position: 'relative' }}>
      <Navbar color={true} />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
