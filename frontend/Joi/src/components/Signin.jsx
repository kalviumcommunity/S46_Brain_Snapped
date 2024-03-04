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
      const response = await axios.post('https://brain-snap-server.vercel.app/users/signin', {
        name: name.toLocaleLowerCase(),
        password: password
      });
      console.log("User Details:")
      console.log(response.data);
      console.log('Name:', name);
      console.log('Password:', password);

      Cookies.set("Username",name);
      Cookies.set("Token",response.data.token);

      console.log("name",Cookies.get("Name"))
      setName("");
      setPassword("");
      setTimeout(() => {
        navigate('/main');
      }, 1500);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <form onSubmit={appendData} style={{ width: '400px', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>

        <h2 style={{ textAlign: 'center', color: 'black' }}>Sign In</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: 'black' }}>UserName :</label>
          <input 
          type='text' 
          placeholder='Enter your sign-up name' 
          required 
          onChange={(e) => { setName(e.target.value) }} 
          style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}
        />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: 'black' }}>Password :</label>
          <input type='password' 
          placeholder='6 - 16 characters' 
          required 
          onChange={(e) => { setPassword(e.target.value) }} 
          style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white  ', color: 'black' }} 
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border:"none", borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
