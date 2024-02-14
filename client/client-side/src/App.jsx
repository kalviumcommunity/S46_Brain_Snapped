import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5173/getData")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.snappedData}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App;
