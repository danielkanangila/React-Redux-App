import React from 'react';
import axios from 'axios';
import Articles from './components/Articles';

function App() {

  const fetchData = () => {
    const key = process.env.REACT_APP_API_KEY;
    const BASE_API = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
    const url = `${BASE_API}${key}`;
    console.log(url);
    axios.get(url).then(res => console.log(res.data))
    .catch(err => console.log(err));
  }
  //fetchData()
  return (
    <div className="App">
      <Articles />
    </div>
  );
}

export default App;
