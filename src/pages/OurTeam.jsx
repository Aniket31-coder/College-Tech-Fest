import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function OurTeam() {
  return (
    <Container fluid className="px-0">
        <Row className="mx-0 pt-4 pt-2" style={{backgroundColor: "rgb(109 66 113)"}}>
            <Col xs={12}>
                <h4 className='text-center fs-1 text-white' style={{fontFamily: "Rasa"}}>Our Team</h4>
            </Col>
        </Row>

        <Row className='justify-content-center py-3 mx-0' style={{backgroundColor: "rgb(109 66 113)"}}>
            <Col xs={12} md={4} className='pb-3 mb-md-0'>
                <Card className='mx-2 mx-lg-5 text-center bg-transparent border-0'>
                <Card.Img src='./assets/avatar-1.jpg' className="cardImg" alt='card-image' variant='top' style={{borderRadius: "50%"}} />
                <Card.Body>
                    <h4 className='mt-2' style={{color: "#FFF", paddingTop: "5px"}}>Mrs. Lorem Ipsum</h4>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className='pb-3 mb-md-0'>
                <Card className='mx-2 mx-lg-5 text-center bg-transparent border-0'>
                <Card.Img src='./assets/avatar-2.jpg' className="cardImg" alt='card-image' variant='top' style={{borderRadius: "50%"}} />
                <Card.Body>
                    <h4 className='mt-2' style={{color: "#FFF", paddingTop: "5px"}}>Mr. Lorem Ipsum</h4>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4} className='pb-3 mb-md-0'>
                <Card className='mx-2 mx-lg-5 text-center bg-transparent border-0'>
                <Card.Img src='./assets/avatar-3.jpg' className="cardImg" alt='card-image' variant='top' style={{borderRadius: "50%"}} />
                <Card.Body>
                    <h4 className='mt-2' style={{color: "#FFF", paddingTop: "5px"}}>Mr. Bruce Wayne</h4>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default OurTeam