import React from 'react';
import { Link } from 'react-router-dom';
import RandomThingsGenerator from './RandomThingsGenerator';
import '../App.css';

function Navbar() {
  return (
    <div className='body'>
      <nav>
        <h1>Brain Snapped</h1>
        <div id='headers'>
          <p>Home</p>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </div>
      </nav>
      <div className='random-thing-generator'>
        <RandomThingsGenerator/>
      </div>
    </div>
  );
}

export default Navbar;
