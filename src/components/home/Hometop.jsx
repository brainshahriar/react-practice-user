import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Megamenu from '../home/Megamenu'
import Homeslider from './Homeslider'
import AppUrl from '../../api/AppUrl';
import axios from 'axios'

class Hometop extends Component {
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
        return (
            <>
             <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={3} md={3} sm={12}>
                                <Megamenu data={this.state.showdata} />
                              </Col>

                              <Col lg={9} md={9} sm={12}>
                                <Homeslider/>
                              </Col>
                         </Row>
                    </Container>
            </>
        )
    }
}

export default Hometop
