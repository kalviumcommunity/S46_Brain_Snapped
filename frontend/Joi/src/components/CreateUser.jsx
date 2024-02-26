import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [username, setUserName] = useState('');
    const [snappedData, setSnappedData] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {
            username,
            snappedData
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => {
            console.error('Error creating user:', err);
        });
    }
    
    return (

        <div className='d-flex vh-100 bg-white justify-content-center align-items-center'>
        <div className='d-flex vh-100 bg-white   justify-content-center align-items-center'>

            <div className='bg-black rounded p-3 text-white ' style={{ width: '500px' ,border:'1px solid white'}}>
                <form onSubmit={Submit}>
                    <h2 className='text-center mb-2'>Create New User</h2>
                    <div className='m-1'>
                        <label htmlFor="" className='p-2 text-white'>Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter name' 
                            className='form-control bg-dark text-white' 
                            onChange={(event) => setUserName(event.target.value)}
                            required
                        />
                    </div>
                    <div className='m-2'>
                        <label htmlFor="" className='p-2 text-white'>Random Things</label>
                        <input 
                            type="text" 
                            placeholder='Enter a random thing you do' 
                            className='form-control bg-dark text-white' 
                            onChange={(event) => setSnappedData(event.target.value)}
                            required
                        />
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-success m-3'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
