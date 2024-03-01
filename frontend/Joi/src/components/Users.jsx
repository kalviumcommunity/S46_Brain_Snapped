import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import Cookies from 'js-cookie';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://s46-brain-snapped.onrender.com/main", { headers: { Authorization: `Bearer ${Cookies.get('Token')}` } })
      .then(result => {
        setUsers(result.data);
        setFilteredUsers(result.data); // Initialize filteredUsers with all users initially
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://s46-brain-snapped.onrender.com/main/deleteUser/${id}`)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user._id !== id)); // Update users list after deletion
        setFilteredUsers(filteredUsers.filter(user => user._id !== id)); // Update filteredUsers list after deletion
      })
      .catch(err => console.log(err));
  }

  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase(); 
    if (keyword === 'all') {
      setFilteredUsers(users); 
    } else {
      setFilteredUsers(users.filter(user => user.username.toLowerCase().includes(keyword)));
    }
  }

  return (
    <>
      <Navbar />
      <div className='container vh-100'>
        <div className='h-100 bg-white rounded p-5' style={{ color: 'black' }}>
          <h1 className='text-center'>Random Things we do for no reason</h1>
          <hr />

          <div className="" style={{ display: 'flex',alignItems:"center", justifyContent: "space-between" }}>
            <Link to='/create' className='btn btn-success'> Add your data </Link>
            <select onChange={handleFilter} className='p-2 ' style={{borderRadius:"20px"}}>
              <option value='all'>All</option>
              {[...new Set(users.map(user => user.username))].map(username => (
                <option key={username} value={username}> {username} </option>
              ))}
            </select>
          </div>

          <div className="row mt-4">
            {filteredUsers.map((person, index) => (
              <div className="col-md-6 mb-4" key={person._id}>
                <div className="card h-auto" style={{ backgroundColor: 'black', color: 'white' }}>
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title ">{person.username}</h3>
                    <hr />
                    <p className="card-text flex-grow-1 h-auto p">{person.snappedData}</p>
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
