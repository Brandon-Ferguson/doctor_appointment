import { useState } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Button, Container } from 'react-bootstrap';
import { DoctorConsumer } from '../../providers/DoctorProvider';

const Doctors = ({ doctors }) => {
  const [adding, setAdd] = useState(false)
  // toggling add form and using conditional rendering option
  return (
    <Container>
      { adding ? 
        <>
          <DoctorForm
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>
            Cancel
          </Button>
        </>
        :
        <Button
        onClick={() => setAdd(true)}
        >
          +
        </Button>
      }
      <br />
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