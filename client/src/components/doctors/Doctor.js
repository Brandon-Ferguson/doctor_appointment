import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Doctor = ({}) => {
 const [doctor, setDoctor] = useState({ doctor_fname: '', doctor_lname: '', specility: '' })
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
    </>
  )
}

export default Doctor;