import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <Container>
    <Row sm='12' md='4'>
      { doctors.map( c =>
        <Col key={c.id}>
          <Card style={{ width: '16rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>{c.doctor_fname} {c.doctor_lname}</Card.Title>
              <Card.Text>
                {c.specialty}
              </Card.Text>
              <Link 
                to={`/doctors/${c.id}`}
                state={ {...c} }
              >
                <Button variant="primary">
                  Show
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default DoctorList;