import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const footer = props =>  (
    <footer style={{marginTop: '20px'}}>
        <Navbar bg="primary" variant="dark" fixed='bottom'>
            <Navbar.Brand href="#/">AWS Quiz Time</Navbar.Brand>
            <Navbar.Text>
                Copyright 2019-2021: Nilendu Bhattacharya
            </Navbar.Text>
        </Navbar>
    </footer>
);

export default footer;  