import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Users from './components/Users.jsx';
import CreateUser from './components/CreateUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Body from './components/Body.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
