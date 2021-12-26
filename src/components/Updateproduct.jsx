import axios from 'axios';
import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import AppUrl from '../api/AppUrl';

class Updateproduct extends Component {

    constructor(){
        super();
        this.state={
            showdata:[]
        }
    }
    componentDidMount(){ 
        axios.get(AppUrl.showDetails).then(response=>{
            this.setState({showdata:response.data});
        }).catch(error=>{

        })
    }
    render() {

        const ShowData=this.state.showdata;
        const View = ShowData.map((ShowData,i)=>{
            return (

    
            // <div key={i.toString()}>
                <tr>
                <td>{ShowData.id}</td>
                <td>{ShowData.email}</td>
                <td>{ShowData.name}</td>
                <td>{ShowData.phone}</td>
                </tr>
                        )
            // </div>
        });

        return (
            <>
            <Container>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Email</th>
      <th>Name</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>

            {View}

  </tbody>
</Table>
</Container>
            </>
        )
    }
}

export default Updateproduct
