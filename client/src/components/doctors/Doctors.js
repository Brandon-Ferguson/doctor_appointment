import { useState } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Button, Container, Modal } from 'react-bootstrap';
import { DoctorConsumer } from '../../providers/DoctorProvider';

const Doctors = ({ doctors }) => {
  const [adding, setAdd] = useState(false)
  // toggling add form and using conditional rendering option
  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Doctors</h1>
      <DoctorList 
        doctors={doctors}
      />
    </Container>
  )
}

const ConnectedDoctors = (props) => (
  <DoctorConsumer>
    { value => <Doctors {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectedDoctors;
