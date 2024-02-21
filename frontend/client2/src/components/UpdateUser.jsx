import React,{useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const {id} = useParams();
    const [updatedUsername, setUpdatedUsername] = useState('');
    // const [updatedUserID, setUpdatedUserID] = useState('');
    const [updatedSnappedData, setUpdatedSnappedData] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get("http://localhost:3001/getNewUser/"+id)
        .then(result => {
            console.log(result.data);
            setUpdatedUsername(result.data.username);
            // setUpdatedUserID(result.data.userID);
            setUpdatedSnappedData(result.data.snappedData);
        })
        .catch(err => console.log(err))
    },[id])

    const Submit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/updateUser/${id}`, {
            updatedUsername,
            // updatedUserID,
            updatedSnappedData
        })
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center '>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Update Users</h2>
                    <div>
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            value={updatedUsername}
                            placeholder='Enter name' 
                            className='form-control' 
                            onChange={(event)=>setUpdatedUsername(event.target.value)}
                            required
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="">UserId</label>
                        <input 
                            type="Number"
                            value={updatedUserID}
                            placeholder='enter a digits'
                            className='form-control'
                            onChange={(event)=>setUpdatedUserID(event.target.value)}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="">Random Things</label>
                        <input 
                            type="text" 
                            value={updatedSnappedData}
                            placeholder='Enter a random thing you do' 
                            className='form-control' 
                            onChange={(event)=>setUpdatedSnappedData(event.target.value)}
                            required
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;
