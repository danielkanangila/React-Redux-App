import React from 'react';
import Articles from './components/articles/Articles';
import Navbar from './components/Navbar';
import { Container } from './components/styled-components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Articles />
      </Container>
    </div>
  );
}

export default App;
