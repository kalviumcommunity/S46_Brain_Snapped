import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/main" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
