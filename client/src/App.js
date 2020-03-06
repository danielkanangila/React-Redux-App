import React from 'react';
import Articles from './components/articles/Articles';
import Navbar from './components/Navbar';
import { Container } from './components/styled-components';
import SubNav from './components/SubNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Container>
        <Articles />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
