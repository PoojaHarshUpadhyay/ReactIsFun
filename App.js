import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
      <Greet name="Pooja"/>
      <Greet name="Harsh"/>
      <Welcome />
      <Message />
    </div>
  );
}

export default App;
