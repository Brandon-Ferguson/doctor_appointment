import { useState, useEffect } from 'react;'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const Doctor = ({}) => {
 const [doctor, setDoctor] = useState({ doctor_fname: '', doctor_lname: '', specility: ''  })
 const [appointment, setAppointment] = useState([])
 const { doctorId } = useParams()

 useEffect( () => {
   axios.get(`/api/doctors/${doctorId}`)
     .then( res => setDoctor(res.data) )
     .catch( err => console.log(err) )
 }, [])

 const { doctor_fname, doctor_lname, specility } = doctor
 return (
    <>
     <h1>{doctor_fname}</h1>
     <p>{doctor_lname}</p>
     <h3>{specility}</h3>
     <button>Update</button>
     <button>Delete</button>
     <Link to={`/doctors/${id}/appointments`} state={{ doctorName: doctor_fname }}>
       <button>Appointments</button>
       </Link>
     <h1>Appointments</h1>
     <ListGroup>
       { appointment.map((u) => (
         <ListGroup.Item>{`${u.first_name} ${u.last_name}`}</ListGroup.Item>
       ))}
     </ListGroup>
    </>
  )
}

export default Doctor;