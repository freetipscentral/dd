import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const navbar = props => (
    <Navbar style={{backgroundColor: 'Orange'}} variant="dark">
        <Navbar.Brand href="/">AWS Quiz Time</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
    </Navbar>
);

export default navbar;