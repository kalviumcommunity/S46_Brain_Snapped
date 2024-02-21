import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(()=> {
        axios.get("http://localhost:3001/")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
        .then(res => {
            console.log(res)
            // Filter out the deleted user from the users state
            setUsers(users.filter(user => user._id !== id));
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-content-center'>
            <div className='w-100 bg-white rounded p-5'>
                <h1 className='text-center p-2'>Random Things we do for no reason</h1>
                <hr />
                <Link to='/create' className='btn btn-success'> Create New User </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Random Things</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((person) => {
                            return (
                                <tr key={person._id}>
                                    <td>{person.username}</td>
                                    <td>{person.snappedData}</td>
                                    <td>
                                        <Link to={`/update/${person._id}`} className='btn btn-primary mr-4'>✏️Edit</Link>
                                        <button 
                                            className='btn btn-danger'
                                            onClick={(e) => handleDelete(person._id)}
                                            >
                                                ☠️Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
