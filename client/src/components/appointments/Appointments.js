import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import AppointmentList from './AppointmentList';

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const [appointed, setAppointed] = useState([])

  const { doctorId } = useParams()
  const location = useLocation()
  const { doctorName } = location.state

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
      .then( res => {
        setAppointments(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointed`)
      .then( res => {
        setAppointed(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  return (
    <>
      <h1>{doctorName}</h1>
      <AppointmentList appointments={appointments} appointed={appointed} />
    </>
  )
}

export default Appointments;