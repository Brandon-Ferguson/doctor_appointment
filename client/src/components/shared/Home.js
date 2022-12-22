
import { Image, Container, Row, Col, Accordion } from 'react-bootstrap';



const Home = ( ) => (
  <>

    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col>
          <h1> Come Make An Apppointment Today!</h1>
          <p> We have the Best primary caregivers in various fields of expertise. </p>
        </Col>
      </Row>
      <Row md='4'>
        <Image
        src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt='home'
        width='100%'
        />
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col>
          <h1> Leading Industry Technologies and Advance Treatments</h1>
          <p>We have the top technological innovastions in all of the tools, equipments and facilities we have on site.</p>
        </Col>
        <Row md='4'> 
          <Image
          src='https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
          alt='home'
          width='100%'
          />
        </Row>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <Container>
          <h1 className= 'text-center'> FAQs </h1>
          <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How Much does it cost?</Accordion.Header>
          <Accordion.Body>
          Depends on what you would like to be seen for.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What care do you provide?</Accordion.Header>
          <Accordion.Body>
            Everything
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How do I make an appointment?</Accordion.Header>
          <Accordion.Body>
            On the site.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    <br />
    <br />
    <Container>
      <h1 className= 'text-center'> Still have a question? </h1>
      <p className= 'text-center'> Drop us a call!</p>
      <p className= 'text-center'> 888-123-1234</p>


    </Container>


  </>
)
 export default Home;