import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Megamenu from '../home/Megamenu'
import Homeslider from './Homeslider'

class Hometop extends Component {
    render() {
        return (
            <>
             <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={3} md={3} sm={12}>
                                <Megamenu />
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
