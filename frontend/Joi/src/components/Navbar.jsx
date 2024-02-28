import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import RandomThingsGenerator from './RandomThingsGenerator';
import '../App.css';
import Cookies from 'js-cookie';

function Navbar() {
    const navigate = useNavigate(); // Define navigate using useNavigate

  return (
    <div className='body'>
        <nav>
            <h1>Brain Snapped</h1>
            <div id='headers'>
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/signin" >Signin</Link>
            </div>
        </nav>
        <div className='random-thing-generator'>
            <RandomThingsGenerator/>
      </div>
    </div>
  );
}

export default Navbar;
