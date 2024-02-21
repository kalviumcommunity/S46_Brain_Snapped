import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [username,setUserName] = useState();
    // const [userID, setUserID] = useState();
    const [snappedData,setSnappedData] = useState();
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/createUser",{
            username,
            // userID,
            snappedData
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
                <h2>Create New User</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                    type="text" 
                    placeholder='Enter name' 
                    className='form-control' 
                    onChange={(event)=>setUserName(event.target.value)}
                    required
                    />
                </div>
                {/* <div>
                    <label htmlFor="">UserId</label>
                    <input 
                    type="Number"
                    placeholder='enter 5 digits'
                    className='form-control'
                    onChange={(event)=>setUserID(event.target.value)}
                     />
                </div> */}
                <div>
                    <label htmlFor="">Random Things</label>
                    <input 
                    type="text" 
                    placeholder='Enter a random thing you do' 
                    className='form-control' 
                    onChange={(event)=>setSnappedData(event.target.value)}
                    required
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser;