import React,{useState} from 'react';
import "./App.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users.jsx';
import CreateUser from './components/CreateUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App