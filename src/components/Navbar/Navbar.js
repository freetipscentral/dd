import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

const navbar = props => (
    <Navbar style={{backgroundColor: 'Orange'}} variant="dark">
        <Navbar.Brand><Link to="/" style={{color:'White'}}>AWS Quiz Time</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/aboutUs" style={{color:'White'}}>About Us</Link>
                <Link to="/faq" style={{color:'White', marginLeft:'10px'}}>FAQ</Link>
            </Nav>
        </Navbar.Collapse> 
    </Navbar>
);

export default navbar;