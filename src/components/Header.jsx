import {  Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand> <Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >  <Link to="/add">Add</Link></Nav.Link>
      <Nav.Link ><Link to="/update">Update</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      <Nav.Link><Link to="/register">Register</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        {/* <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Link to="/add">Add</Link>
          <Link to="/update">Update</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
        </>
    )
};