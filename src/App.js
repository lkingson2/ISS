import React from 'react';
import Astronauts from './Components/Astronauts'
import ISSLocation from './Components/ISSLocation';
import './App.css';

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
