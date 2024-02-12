// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <>
    
    <div className="app">
      <div className="vertical-split">
        <Navbar/>
        <Body />
      </div>
    </div>
    </>
  );
}

export default App;
