import React from 'react';
import RandomThingsGenerator from './RandomThingsGenerator';
import '../App.css'

function Navbar() {
  return (
    <div className='body'>
        <nav>
            <h1>Brain Snapped</h1>
            <div className='headers'>
                <p>Home</p>
                <p>Login</p>
            </div>
        </nav>
        <div className='random-thing-generator'>
            <RandomThingsGenerator/>
        </div>
    </div>
    

  )
}

export default Navbar