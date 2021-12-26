import React, { Component } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl'
import { toast, ToastContainer } from 'react-toastify';
import Validation from '../../validation/Validation'
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            phone:"",
            email:"",
            message:""
        }
    }

    onNumber=(e)=>{
        let number=e.target.value;
        this.setState({phone:number})
    }
    onEmail=(e)=>{
        let email=e.target.value;
        this.setState({email:email})
    }
    onMessage=(e)=>{
        let message=e.target.value;
        this.setState({message:message})
    }
    form=(e)=>{
        let phone=this.state.phone;
        let email=this.state.email;
        let message=this.state.message;
        let sendbutton=document.getElementById('sendbtn');
        let reset=document.getElementById('reset');

        if(email.length===0){
            toast.error('Please write email');
        }
        else if(message.length===0)
        {
            toast.error('plese write message');
        }
        else if(phone.length===0){
            toast.error('write number');
        }
        else if(!(Validation.NameRegx).test(message)){
            toast.error('Invalid Name');
        }
        else{
            sendbutton.innerHTML='Sending...';
            let formData = new FormData();
            formData.append("email",email)
            formData.append("message",message)
            formData.append("phone",phone)

            axios.post(AppUrl.ContactDetails,formData)
            .then(function(response){
                if(response.status===200 && response.data===1){
                    toast.success("Sending successfully");
                    sendbutton.innerHTML='Send'
                    reset.reset();
                }
                else{
                    toast.error("error");
                    sendbutton.innerHTML='Send';
                }
            })
            .catch(function(error){
                toast.error(error);
                sendbutton.innerHTML='Send';
            });

        }
        e.preventDefault();

    }

    render() {
        return (
            <>  
                  <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
     <Form id="reset" onSubmit={this.form} className="onboardForm">
          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
          <input onChange={this.onNumber} className="form-control m-2"  type="text" placeholder="Enter Mobile Number" />

          <input onChange={this.onEmail} className="form-control m-2" type="email" placeholder="Enter Email" />

          <Form.Control  onChange={this.onMessage} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />
          <Button id="sendbtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>

     </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
             1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
             Email: Support@easylearningbd.com
           </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                         </Col>
                    </Row>
                         </Col>
                    </Row>
               </Container>
               <ToastContainer/>
            </>
        )
    }
}

export default Contact
