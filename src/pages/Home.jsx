import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

function Home() {
  return (
    <Container fluid className="px-0 w-100">
        <Row className="textOverImage w-100 mx-0">
            <img
             src="./assets/landing-page-bg.gif"
             className='px-0 w-100'
             style={{height: "91vh"}}
             alt="Background Landing Page" />
             <h5 className='centered text-white fw-bold'>TECHNOFEST 2022</h5>
        </Row>
        
        <Row className="mx-0 pt-4 pt-md-5" style={{backgroundColor: "#483d8b"}}>
            <Col xs={12} className="mt-5">
            </Col>
            <Col xs={12}>
                <h4 className='text-center fs-1 text-white' style={{fontFamily: "Rasa"}}>Our Sponsors</h4>
            </Col>
            <Col xs={10} md={6} lg={4} className="mt-md-2 my-5 py-md-4 py-lg-0">
                <Card className="text-center my-2 my-md-0 card bg-transparent mx-md-4" style={{border: "0px"}}>
                    <Card.Img className="mx-auto mt-3" variant="top" src="./assets/nestle.png" />
                </Card>
            </Col>
            <Col xs={10} md={6} lg={4} className="mt-md-2 my-5 py-md-4 py-lg-0">
                <Card className="text-center my-2 my-md-0 card bg-transparent mx-md-4" style={{border: "0px"}}>
                    <Card.Img className="mx-auto mt-3" variant="top" src="./assets/nestle.png" />
                </Card>
            </Col>
            <Col xs={10} md={6} lg={4} className="mt-md-2 my-5 py-md-4 py-lg-0">
                <Card className="text-center my-2 my-md-0 card bg-transparent mx-md-4" style={{border: "0px"}}>
                    <Card.Img className="mx-auto mt-3" variant="top" src="./assets/nestle.png" />
                </Card>
            </Col>
            <Col xs={12} className="mb-5">
            </Col>
        </Row>

        <Row className="mx-0 pt-4 pt-md-5" style={{backgroundColor: "rgb(109 66 113)"}}>
            <Col xs={12}>
                <h4 className='text-center fs-1 text-white' style={{fontFamily: "Rasa"}}>Guest Speakers</h4>
            </Col>
        </Row>

        <Row className='justify-content-center py-5 mx-0' style={{backgroundColor: "rgb(109 66 113)"}}>
          <Col xs={12} md={4} className='pt-2 pt-lg-5 pb-3 pb-lg-4 mb-5 mb-md-0'>
            <Card className='mx-2 mx-lg-5 text-center' style={{borderRadius: "20px"}}>
              <Card.Img src='./assets/avatar-1.jpg' className="cardImg" alt='card-image' variant='top' style={{width: '80px', height: '80px', position: 'absolute', top: '-40px', left: '154px', borderRadius: "50%"}} />
              <Card.Body>
                <h4 className='mt-3 mt-lg-4 mb-2 pt-2' style={{color: "purple"}}>Mrs. Lorem Ipsum</h4>
                <p style={{color: "darkviolet"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis fermentum justo vel lobortis.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className='pt-2 pt-lg-5 pb-3 pb-lg-4 mb-5 mb-md-0'>
            <Card className='mx-2 mx-lg-5 text-center' style={{borderRadius: "20px"}}>
              <Card.Img src='./assets/avatar-2.jpg' className="cardImg" alt='card-image' variant='top' style={{width: '80px', height: '80px', position: 'absolute', top: '-40px', left: '154px', borderRadius: "50%"}} />
              <Card.Body>
                <h4 className='mt-3 mt-lg-4 mb-2 pt-2' style={{color: "purple"}}>Mr. Lorem Ipsum</h4>
                <p style={{color: "darkviolet"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis fermentum justo vel lobortis.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className='pt-2 pt-lg-5 pb-3 pb-lg-4 mb-5 mb-md-0'>
            <Card className='mx-2 mx-lg-5 text-center' style={{borderRadius: "20px"}}>
              <Card.Img src='./assets/avatar-3.jpg' className="cardImg" alt='card-image' variant='top' style={{width: '80px', height: '80px', position: 'absolute', top: '-40px', left: '154px', borderRadius: "50%"}} />
              <Card.Body>
                <h4 className='mt-3 mt-lg-4 mb-2 pt-2' style={{color: "purple"}}>Mr. Bruce Wayne</h4>
                <p style={{color: "darkviolet"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis fermentum justo vel lobortis.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}

export default Home