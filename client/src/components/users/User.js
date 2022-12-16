import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = ({}) => {
 const [user, setUser] = useState({ first_name: '', Last_name: '' })
 const { userId } = useParams()

 useEffect( () => {
   axios.get(`/api/users/${userId}`)
     .then( res => setUser(res.data) )
     .catch( err => console.log(err) )
 }, [])

 const { first_name, last_name } = user
 return (
    <>
     <h1>{first_name}</h1>
    </>
  )
}

export default User;