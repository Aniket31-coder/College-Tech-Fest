import React, { useState } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap'

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [doubt, setdoubt] = useState('');
    const [fileInput, setFileInput] = useState('');
    const [isCounselor, setIsCounselor] = useState();

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleEmailChange = e => {
            setEmail(e.target.value);
    };

    const handleAgeChange = e => {
        setAge(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handledoubtChange = e => {
        setdoubt(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
        <Row className="w-100 mx-0 justify-content-center mt-4">
            <Col xs={12}>
                <h1 className='text-center' style={{fontFamily: "Rasa", color: "#FFE45"}}>Contact Us</h1>
            </Col>
        </Row>
        <div className='contactUs-page'>
            <Container align="center" style={{marginBottom: "20px"}}>
                <div className="contact-form">
                    <Form align="left" style={{paddingTop: "20px"}} onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="name" className="fields">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Name" onChange={handleNameChange} required/>
                        </Form.Group>

                        <Form.Group controlId="email" className="fields">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email-ID" onChange={handleEmailChange} required/>
                        </Form.Group>

                        <Form.Group controlId="age" className="fields">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Your Age" onChange={handleAgeChange} required />
                        </Form.Group>

                        <Form.Group controlId="doubt" className="fields">
                            <Form.Label style={{marginTop: "1px" }}>Ask Doubt</Form.Label>
                            <Form.Control type="textarea" placeholder="Ask Your Doubts" onChange={handledoubtChange} required/>
                        </Form.Group>
                        
                        {/* <Form.Group controlId="formBasicCheckbox" align="center">
                            <Form.Check type="checkbox" label="Agree to the terms and conditions." required/>
                        </Form.Group> */}
                        
                        <div className="center">
                        <Button variant="danger" type="submit" style={{width: "130px",background: "#FF6981", fontSize: "25px" ,height: "50px",marginTop: "1rem"}}>
                            SUBMIT
                        </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    </div>
    )
}

export default ContactUs