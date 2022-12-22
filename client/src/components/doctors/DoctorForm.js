import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { DoctorConsumer } from '../../providers/DoctorProvider';

const DoctorForm = ({ addDoctor, setAdd, id, doctor_fname, doctor_lname, specialty, updateDoctor, setEdit }) => {
  const [doctor, setDoctor] = useState({ doctor_fname: '', doctor_lname: '', specialty: '' })

  useEffect(() => {
    if (id) {
      setDoctor({ doctor_fname, doctor_lname, specialty })
    }
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (id) {
      updateDoctor(id, doctor)
      setEdit(false)
    } else {
      addDoctor(doctor)
      setAdd(false)
    }
    setDoctor({ doctor_fname: '', doctor_lname: '', specialty: '' })
  }

  return (
    <>
      <h1>{id ? "Update" : 'Create'} Doctor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='doctor_fname'
            value={doctor.doctor_fname}
            onChange={(e) => setDoctor({...doctor, doctor_fname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='doctor_lname'
            value={doctor.doctor_lname}
            onChange={(e) => setDoctor({...doctor, doctor_lname: e.target.value })}
            required
          />
          <Form.Select 
            name='specialty'
            value={doctor.specialty}
            onChange={(e) => setDoctor({...doctor, specialty: e.target.value })}
            required
          >
            <option>Select a Specialty</option>
            <option value="OBGYN">OBGYN</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Emergency Med">Emergency Med</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedDoctorForm = (props) => (
  <DoctorConsumer>
    { value => <DoctorForm {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectedDoctorForm;