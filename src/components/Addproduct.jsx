import axios from 'axios';
import React, { Component } from 'react'
import { Button, Container, Form } from "react-bootstrap";
import AppUrl from '../api/AppUrl';
import Validation from '../validation/Validation'
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
        let email=this.state.email;
        let name=this.state.name;
        let phone=this.state.phone;
        if(email.length===0){
            alert('Please write email');
        }
        else if(name.length===0)
        {
            alert('plese write name');
        }
        else if(phone.length===0){
            alert('write number');
        }
        else if(!(Validation.NameRegx).test(name)){
            alert('Invalid');
        }
        else{
            let formData = new FormData();
            formData.append("email",email)
            formData.append("name",name)
            formData.append("phone",phone)

            axios.post(AppUrl.storeDetails,formData)
            .then(function(response){
                if(response.status===200 && response.data===1){
                    alert("Submitted successfully");
                }
                else{
                    alert("error");
                }
            })
            .catch(function(error){
                alert(error);
            });

        }


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

