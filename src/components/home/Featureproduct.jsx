import React, { Component } from 'react'
import { Col, Container, Row,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppUrl from '../../api/AppUrl';
import axios from 'axios'

 class Featureproduct extends Component {
      constructor(){
           super();
           this.state={
                alldata:[]
           }
      }
      componentDidMount(){
          axios.get(AppUrl.ProductAll).then(response=>{
              this.setState({alldata:response.data});
          }).catch(error=>{
          })
      }
    render() {
         const Alldata=this.state.alldata;
         const View=Alldata.map((list,i)=>{
              return (
               <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
               <Link to={"/productdetails/"+list.id}>
               <Card className="image-box card">
                    <img alt="" className="center" src={list.image} />   
                    <Card.Body> 
                    <p className="product-name-on-card">{list.name}</p>
                    <p className="product-price-on-card">Price : ${list.price}</p>
          
                    </Card.Body>
                    </Card>
                    </Link>
               </Col>
              )
         });
        return (
            <>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


          <Row>
          {View}
</Row>


                   </Container>
            </>
        )
    }
}

export default Featureproduct
