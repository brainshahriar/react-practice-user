import React, { Component } from 'react'
import { Container,Card,Col,Row } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import axios from 'axios'

class Categories extends Component {
     constructor(){
          super();
          this.state={
               showdata:[]
          }
          
     }
     componentDidMount(){
          axios.get(AppUrl.Categoryall).then(response=>{
              this.setState({showdata:response.data});
          }).catch(error=>{
  
          })
      }
    render() {
     const ShowData=this.state.showdata;
     const View=ShowData.map((showdata,i)=>{
          return (
               // eslint-disable-next-line react/jsx-no-duplicate-props
               <Col  key={i.toString()} className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
               <Card className="h-100 w-100 text-center">          
               <Card.Body> 
               <img alt="" className="center" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />  
               <h5 className="category-name">{showdata.category_name}</h5>  
               </Card.Body>
               </Card> 
               </Col>
          )
     });
        return (
            <>
            <Container>
            <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
               {View}
          </Row>


                    </Container> 
            </Container>
            </>
        )
    }
}

export default Categories
