import { Box } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {AiFillCar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut } = useAuth();
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
                        <Nav.Link style={{color: '#fff'}} as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link style={{color: '#fff'}} as={HashLink} to="/features#features">Features</Nav.Link>
                    <Nav.Link style={{color: '#fff'}} as={HashLink} to="/services#services">Services</Nav.Link>
                    <Nav.Link style={{textDecoration: 'none', color:'#fff'}} as={HashLink} to="/appointment">Appointment</Nav.Link>
                    <Nav.Link style={{textDecoration: 'none', color:'#fff'}} as={HashLink} to="/contact">Contact Us</Nav.Link>
                    {
                        user?.email ?
                        <Box className='d-flex m-2'>
                            <Nav.Link style={{}} as={Link} to="/dashboard"><Link style={{color: '#fff',textDecoration: 'none', marginRight: '15px'}} color='inherit'>DashBoard</Link><Link sx={{}} onClick={logOut} variant="contained" style={{textDecoration: 'none',color:'white', marginLeft:'10px'}}>LogOut</Link> </Nav.Link>                             
                        </Box>
                            :
                        <Nav.Link style={{color: '#fff'}} as={Link} to="/login">Login</Nav.Link>
                    }                        
                </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;