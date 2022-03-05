import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComponent() {
  return (
    <>
        <Navbar expand="lg" className="navbar-color p-0" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        src= "./assets/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top logo ms-md-4 ms-1 "
                        alt="TechnoFest Logo"
                    />

                    <span className="d-inline-block align-center ms-md-4 ms-1 mt-1 title">
                        TechnoFest
                    </span>
                </Navbar.Brand>
            </LinkContainer>
                
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navbar-content">    

                    <LinkContainer to="/">
                        <Nav.Link  className="mx-4"><span className="linkText">Home</span></Nav.Link>
                    </LinkContainer>  

                    <LinkContainer to="/events">
                        <Nav.Link className="mx-4"><span className="linkText">Events</span></Nav.Link>
                    </LinkContainer>  

                    <LinkContainer to="/our-team">
                        <Nav.Link className="mx-4"><span className="linkText">Our Team</span></Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact-us">
                        <Nav.Link className="mx-4"><span className="linkText">Contact Us</span></Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavbarComponent