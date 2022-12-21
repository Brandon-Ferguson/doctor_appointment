import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = ({}) => {
 const [user, setUser] = useState({ first_name: '', last_name: '' })
 const [doctors, setDoctors] = useState([])
 const { userId } = useParams()

 useEffect( () => {
  axios.get(`/api/users/${userId}`)
    .then( res => setUser(res.data) )
    .catch( err => console.log(err) )
}, [])

useEffect( () => {
  axios.get(`/api/${userId}/doctorss`)
    .then( res => setDoctors(res.data) )
    .catch( err => console.log(err) )
}, [])

const { first_name, last_name } = user
return (
  <>
   <h1>{first_name} {last_name}</h1>
   <h1>Appointments</h1>
   <ListGroup>
     { courses.map((c) => (
       <ListGroup.Item>{c.title}</ListGroup.Item>
     ))}
   </ListGroup>
  </>
)
}

export default User;