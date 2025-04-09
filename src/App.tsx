import './App.css';
import TodoList from './Todolist';
import Timer from './Timer';
import React from 'react';  
import { useState } from 'react';

function App() {
  let name = "react";
  const style = {
    backgroundColor: 'blue',
    color: 'white',
  }

  return (
    <div className="App-header">
      <TodoList />
      <Timer />
    </div>
  );
}


export default App;
