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
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/appointment"><Link style={{textDecoration: 'none'}}>Appointment</Link></Nav.Link>
                    {
                        user?.email ?
                        <Box className='d-flex m-2'>
                            <Nav.Link  as={Link} to="/dashboard"><Link style={{textDecoration: 'none'}} color='inherit'>DashBoard</Link></Nav.Link> 
                            <Link sx={{color:'white'}} onClick={logOut} variant="contained" style={{textDecoration: 'none'}}>LogOut</Link> 
                        </Box>
                            :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                        
                </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;