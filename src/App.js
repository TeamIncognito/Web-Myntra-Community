import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Context from './Global/Context';
function App() {
  return (
    <Context>
      <Navbar/>
      <Model/>
    </Context>
  );
}

export default App;
