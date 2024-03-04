import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function UpdateUser() {
    const { id } = useParams();
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatedSnappedData, setUpdatedSnappedData] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://brain-snapped-zng6.onrender.com/main/getNewUser/${id}`)
            .then(result => {
                console.log(result.data);
                setUpdatedUsername(result.data.username); 
                setUpdatedSnappedData(result.data.snappedData); 
            },{headers : {Authorization: `Bearer ${Cookies.get('Token')}`}})
            .catch(err => console.log(err));
    }, [id]);

    const Submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:2001/main/updateUser/${id}`, {
            updatedUsername,
            updatedSnappedData
        })
        .then(result => {
            console.log(result);
            navigate('/main'); 
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
            <div className='bg-white rounded p-3 text-black' style={{ width: '460px' }}>
                <form onSubmit={Submit}>
                    <h2 className='text-center mb-1'>Update Data</h2>
                    <div >
                        <label htmlFor='' className='p-1 text-black'>Name :</label>
                        <input 
                            type='text' 
                            value={updatedUsername}
                            placeholder='Use your login name' 
                            readOnly={true}
                            style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }} 
                            onChange={(event) => setUpdatedUsername(event.target.value)}
                            required
                        />
                    </div>
                    <div className='pt-2'>
                        <label htmlFor='' className='p-1 text-black'>Random Things :</label>
                        <input 
                            type='text' 
                            value={updatedSnappedData}
                            placeholder='Enter a random thing you do' 
                            style={{ width: '100%', padding: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'white', color: 'black' }} 
                            onChange={(event) => setUpdatedSnappedData(event.target.value)}
                            required
                        />
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary mt-3'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
