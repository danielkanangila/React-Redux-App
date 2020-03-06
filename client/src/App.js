import React from 'react';
import Articles from './components/articles/Articles';
import Navbar from './components/Navbar';
import { Container } from './components/styled-components';
import SubNav from './components/SubNav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Container>
        <Articles />
      </Container>
    </div>
  );
}

export default App;
