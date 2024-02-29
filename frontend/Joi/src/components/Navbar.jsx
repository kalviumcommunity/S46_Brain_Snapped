import React from 'react';
import { Link } from 'react-router-dom';
import RandomThingsGenerator from './RandomThingsGenerator';
import '../App.css';
import Cookies from 'js-cookie';

function Navbar() {
  const handleLogout = () => {
    Cookies.remove('Username');
    Cookies.remove('Token');
    setTimeout(()=>{
      navigate('/');
    },1500)
  }

  return (
    <div className='body'>
        <nav>
            <h1>Brain Snapped</h1>
            <div id='headers'>
                <Link to="/" className="nav-link" onClick={handleLogout}>Home</Link>
                <Link to="/signup" className="nav-link">🌱New User</Link>
                <Link to="/signin" className="nav-link" >🌳Already an User?</Link>
            </div>
        </nav>
        <div className='random-thing-generator'>
            <RandomThingsGenerator/>
      </div>
    </div>
  );
}

export default Navbar;
