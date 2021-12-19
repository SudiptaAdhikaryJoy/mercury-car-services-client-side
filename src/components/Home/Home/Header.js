import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {AiFillCar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const style= {
        color: 'yellow',
        fontsize: '1.5em'
    }
    return (
        <>
          <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} style={{frontWeight: 700, color:'#fff', fontSize: 25}} to="/home#home"><span className="nav-container border"><AiFillCar style={style} /> Mercury Car Services</span></Navbar.Brand>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/appointment"><Button>Appointment</Button></Nav.Link>
                    <Nav.Link as={Link} to="/login">Login
                    </Nav.Link>
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;