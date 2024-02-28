import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from "./Navbar";
import Cookies from 'js-cookie';

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    axios.get("http://localhost:3001/main")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/main/deleteUser/${id}`)
      .then(res => {
        console.log(res)
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(err => console.log(err))
  }
  
  const handleLogout = () => {
    Cookies.remove('Username');
    Cookies.remove('Token');
    setTimeout(()=>{
      navigate('/');
    },1500)
  }

  return (
    <>
      <Navbar/>
      <div className='container vh-100'>
        <div className='h-100 bg-white rounded p-5' style={{ color: 'black' }}>
          <h1 className='text-center p-2'>Random Things we do for no reason</h1>
          <hr />
          <div className="" style ={{display:'flex',justifyContent:"space-between"}}>
            <Link to='/create' className='btn btn-success'> Add your data </Link>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          </div>
          <div className="row mt-4">
            {users.map((person, index) => (
              <div className="col-md-4 mb-5" key={person._id}>
                <div className="card h-100" style={{ backgroundColor: 'black', color: 'white' }}>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title large-text">{person.username}</h5>
                    <hr />
                    <p className="card-text flex-grow-1">{person.snappedData}</p>

                    {person.username === Cookies.get("Username") &&
    
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/update/${person._id}`} className='btn btn-primary'>✏️Edit</Link>
                            <button
                                className='btn btn-danger'
                                onClick={(e) => handleDelete(person._id)}
                                >
                                ☠️Delete
                            </button>
                        </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
