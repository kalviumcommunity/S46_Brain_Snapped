import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [username, setUserName] = useState('');
    const [snappedData, setSnappedData] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/main/createUser", {
            username,
            snappedData
        })
        .then(result => {
            console.log(result);
            navigate('/main');
        })
        .catch(err => {
            console.error('Error creating user:', err);
        });
    }
    
    return (
        <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
            <div className='bg-white rounded p-3 text-white' style={{ width: '460px', border: '1px solid white' }}>
                <form onSubmit={Submit}>
                    <h2 className='text-center text-black mb-1'>Create New User</h2>
                    <div className=''>
                        <label htmlFor="" className='p-1 text-black'>Name :</label>
                        <input 
                            type="text" 
                            placeholder='Use your login name' 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: 'white', color: 'black', border: '1px solid black' }} 
                            onChange={(event) => setUserName(event.target.value)}
                            required
                        />
                    </div>
                    <div className='pt-2'>
                        <label htmlFor="" className='p-1 text-black'>Random Things :</label>
                        <input 
                            type="text" 
                            placeholder='Enter a random thing you do' 
                            style={{ width: '100%', padding: '10px',border: '1px solid black' ,  borderRadius: '5px', backgroundColor: 'white', color: 'black', }}   
                            onChange={(event) => setSnappedData(event.target.value)}
                            required
                        />
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success mt-3'>Add data</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
