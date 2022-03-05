import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function FooterComponent() {
  return (
    <Container fluid>
        <Row className="text-center py-3 text-white" style={{backgroundColor: "rgb(100 21 86)"}}>
            <Col xs={12}>
                © Copyrights Reserved 2022 - Made with ❤️ By Aniket Dewnani
            </Col>
        </Row>
    </Container>
  )
}

export default FooterComponent