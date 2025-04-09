import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "react";
  const style = {
    backgroundColor: 'blue',
    color: 'white',
  }

  return (
    <div className="App-header">
      <h1 style={style}>Hello, {
        name === 'react' ? name : 'no'
      }</h1>
    </div>
  );
}


export default App;
