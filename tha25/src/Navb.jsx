import React from 'react'
import {Navbar, Badge, Container, Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export default function Navb() {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand style={{color:'white'}}><h4><Badge bg="dark">Art Gallery</Badge></h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><NavLink style={{textDecoration:'none'}} to='/'>Home</NavLink></Nav.Link>
                <Nav.Link><NavLink style={{textDecoration:'none'}} to='/about'>About</NavLink></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
