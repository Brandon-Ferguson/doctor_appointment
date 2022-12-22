import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { DoctorConsumer } from '../../providers/DoctorProvider';
import DoctorForm from './DoctorForm';

const DoctorShow = ({ deleteDoctor }) => {
  const { id } = useParams()

  // optional if we are passing through the info through state 
  // in the link 
  const location = useLocation()
  const { doctor_fname, doctor_lname, specialty } = location.state 
  const [users, setUsers] = useState([])
  const [editing, setEdit] = useState(false)


  useEffect( () => {
    axios.get(`/api/${id}/doctorusers`)
      .then(res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  return(
    <>
      <h2>{doctor_fname} {doctor_lname}</h2>
      <h4>{specialty}</h4>
      <Link 
        to={`/${id}/appointments`}
        state={{ doctorDoctor_fname: doctor_fname }}
      >
        <Button>Appointments</Button>
      </Link>
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm
            id={id}
            doctor_fname={doctor_fname}
            doctor_lname={doctor_lname}
            specialty={specialty}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deleteDoctor(id)}>
        Delete
      </Button>
      <br />
      <br />
      <br />
      <h1>All Users with the Doctor</h1>
      { users.length > 0 ?
        <UserList users={users} />
      : <p>No users with the Doctor</p>}
    </>
  )
}

const ConnectDoctorShow = (props) => (
  <DoctorConsumer>
    { value => <DoctorShow {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectDoctorShow;