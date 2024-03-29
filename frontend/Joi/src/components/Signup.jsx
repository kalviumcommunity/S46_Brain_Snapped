import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://brain-snap-server.vercel.app/users', {
        name: name.toLocaleLowerCase(),
        email: email,
        password: password
      });
      console.log('Posted Successfully', response);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      setName('');
      setEmail('');
      setPassword('');  
      Cookies.set("Username",name);
      Cookies.set("Token", response.data.token)
      navigate('/main');
    } catch (err) {
      console.error('Error signing up:', err);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black',background:"black" }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>

        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'black' }}>Name :</label>
            <input 
              type="text" 
              placeholder="Enter your name in small" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }} 
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'black' }}>Email :</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }} 
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'black' }}>Password :</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="use atleast 7 characters" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              style={{ width: '80%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }} 
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              style={{ marginLeft: '10px',padding:"7px",width:"50px", backgroundColor: 'white', border: '1px solid black', borderRadius: '5px', cursor: 'pointer' }}
            >
              {showPassword ? "Hide" : "Show"} 
            </button>
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
