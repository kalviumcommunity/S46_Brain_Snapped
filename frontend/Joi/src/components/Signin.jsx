import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const appendData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users/signin', {
        name: name,
        password: password
      });
      console.log(response.data)
      setName("");
      setPassword("");
      Cookies.set("Username", name);
      setTimeout(() => {
        navigate('/');
      }, 1500);


    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <form onSubmit={appendData} style={{ width: '400px', padding: '20px', borderRadius: '10px', backgroundColor: 'black' }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Sign In</h2>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: 'white' }}>UserName :</label>
          <input type='text' placeholder='' required onChange={(e) => { setName(e.target.value) }} style={{ width: '100%', padding: '10px', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', color: 'white' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: 'white' }}>Password :</label>
          <input type='password' placeholder='6 - 16 characters' required onChange={(e) => { setPassword(e.target.value) }} style={{ width: '100%', padding: '10px', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', color: 'white' }} />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', border: '1px solid white', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>

      </form>
    </div>
  )
}

export default SignIn;
