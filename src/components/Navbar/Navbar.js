import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbar = props => (
    <Navbar style={{backgroundColor: 'Orange'}} variant="dark">
        <Navbar.Brand href="/">AWS Quiz Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;