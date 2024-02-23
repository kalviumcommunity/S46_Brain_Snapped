import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const {id} = useParams();
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatedSnappedData, setUpdatedSnappedData] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get("http://localhost:3001/getNewUser/"+id)
        .then(result => {
            console.log(result.data);
            setUpdatedUsername(result.data.username);
            setUpdatedSnappedData(result.data.snappedData);
        })
        .catch(err => console.log(err))
    },[id])

    const Submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, {
            updatedUsername,
            updatedSnappedData
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    };
    

    return (
        <div className='d-flex vh-100 bg-white justify-content-center align-items-center'>
            <div className='bg-black rounded p-3 text-white' style={{ width: '500px', border: '1px solid white' }}>
                <form onSubmit={Submit}>
                    <h2 className='text-center mb-2'>Update Users</h2>
                    <div className='m-1'>
                        <label htmlFor="" className='p-2 text-white'>Name</label>
                        <input 
                            type="text" 
                            value={updatedUsername}
                            placeholder='Enter name' 
                            className='form-control bg-dark text-white' 
                            onChange={(event) => setUpdatedUsername(event.target.value)}
                            required
                        />
                    </div>
                    <div className='m-2'>
                        <label htmlFor="" className='p-2 text-white'>Random Things</label>
                        <input 
                            type="text" 
                            value={updatedSnappedData}
                            placeholder='Enter a random thing you do' 
                            className='form-control bg-dark text-white' 
                            onChange={(event) => setUpdatedSnappedData(event.target.value)}
                            required
                        />
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary m-2'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
