import React, { Component } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

class Course extends Component {
    render() {
        return (
          <>
          <Container>
     <Row>
         <Col md={2}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

</Row>

</Container>
          </>
        )
    }
}

export default Course
