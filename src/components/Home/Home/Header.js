import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {AiFillCar} from 'react-icons/ai';
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
                    <Navbar.Brand style={{frontWeight: 700, color:'#fff', fontSize: 25}} href="#home"><span className="nav-container border"><AiFillCar style={style} /> Mercury Car Services</span></Navbar.Brand>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="login">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Nav.Link>
                </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;