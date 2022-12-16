import { useState, useEffect } from 'react';
import UserList from './UserList';
import axios from 'axios';
import UserForm from './UserForm';

const Users = ({}) => {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get('/api/users')
      .then( res => setUsers(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addUser = (user) => {
    axios.post('/api/users', { user })
      .then( res => setUsers([...users, res.data]) )
      .catch( err => console.log(err) )
  }

  return (
    <>
      <UserForm addUser={addUser} />
      <UserList 
        users={users}
      />
    </>
  )
}

export default Users;