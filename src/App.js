import React from 'react';
import './App.css';
import Astronauts from './Astronauts'
import ISSLocation from './ISSLocation';

function App() {
  return (
    <div className="App">
      <h1 className="title"> International Space Station Over Earth</h1>
      <div className="container">
        <ISSLocation />
        <Astronauts /> 
      </div>
    </div>
  );
}

export default App;
