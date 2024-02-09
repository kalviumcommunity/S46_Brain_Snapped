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
        <Navbar />
        <video autoPlay loop muted playsInline className="background-video">
          <source src="images/videos2.mp4" type="video/mp4" />
        </video>
        <Body />
      </div>
    </div>
    </>
  );
}

export default App;
