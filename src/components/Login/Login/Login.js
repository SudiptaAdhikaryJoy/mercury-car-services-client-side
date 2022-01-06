import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LinearPro from './../../LinearProgress/LinearPro';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const {user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange= e =>{
    
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email,loginData.password, location, history);
        e.preventDefault();
        
    }
    const handleGoogle =()=>{
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt : 10}} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your email" 
                            name='email'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your password" 
                            type='password'
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard" />
                            <Button sx={{width: '75%', m: 2}} type="submit" variant='contained'>Login</Button>
                            <NavLink style={{textDecoration: 'none'}} to='/register'><Button sx={{m: 2}} variant='text'>New User? Click Register</Button></NavLink>
                            { isLoading && <LinearPro/>}
                    {user?.email ? <Alert severity="success" color="info">
                        Successfully Logged In
                        </Alert>:
                         <Alert variant="filled" severity="error">{authError}</Alert>}
                    </form>
                    <p>------------</p>
                    <Button onClick={handleGoogle}><GoogleIcon sx={{fontSize: 50}}></GoogleIcon></Button>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;