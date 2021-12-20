import { Button, Container, Form } from "react-bootstrap";
export default function Addproduct(){
    return(
        <>
        <Container>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Phone" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
        </>
    )
}