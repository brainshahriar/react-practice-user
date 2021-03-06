import React, { Component } from 'react'
import { Card,Button, Container, Row} from "react-bootstrap";
import AppUrl from '../api/AppUrl';
import axios from 'axios';
import { Link } from "react-router-dom";
class Cards extends Component {

  constructor(){
    super();
    this.state={
      showdata:[]
    }
  }
  componentDidMount(){
    axios.get(AppUrl.showData).then(response=>{
        this.setState({showdata:response.data});
    }).catch(error=>{

    })
}
  render() {

    const data=this.state.showdata;
    const View=data.map((data,i)=>{
      return(
        <Container>
        <Row>
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={data.image} />
<Card.Body>
<Card.Title><Link to={"/data/"+data.id}> {data.title}</Link></Card.Title>
<Card.Text>
{data.description}
</Card.Text>
<Button variant="primary">{data.name}</Button>
</Card.Body>
</Card>
</Row>
</Container>





      )

    });

    return (
        <>
  {View}
        </>
    )
  }
}

export default Cards

