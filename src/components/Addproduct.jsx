import React, { Component } from 'react'
import { Button, Container, Form } from "react-bootstrap";
class Addproduct extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            name:"",
            phone:""
        }
    }
    emailOnchange=(e)=>{
        let email = e.target.value;
        this.setState({email:email})
    }
    nameOnchange=(e)=>{
        let name = e.target.value;
        this.setState({name:name})
    }
    phoneOnchange=(e)=>{
        let phone = e.target.value;
        this.setState({phone:phone})
    }
    submitForm=(e)=>{
        alert('hello');
        e.preventDefault();
    }
    render() {
        return (
            <>
             <Container>
         <Form onSubmit={this.submitForm} >
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control onChange={this.emailOnchange} type="email" placeholder="Enter email" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Name</Form.Label>
     <Form.Control onChange={this.nameOnchange} type="text" placeholder="Name" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Phone</Form.Label>
     <Form.Control onChange={this.phoneOnchange} type="text" placeholder="Phone" />
   </Form.Group>
   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>
 </Container>
            </>
        )
    }
}

export default Addproduct

