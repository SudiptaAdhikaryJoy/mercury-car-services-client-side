import React, { useState } from 'react';
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LinearPro from './../../LinearProgress/LinearPro';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    
    const {user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur= e =>{
    
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
        // e.reset();
        if(loginData.password !== loginData.password2){
            alert('password dont match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }
    return (
         <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt : 10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your name" 
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your email" 
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your password" 
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="Confirm your password" 
                            type='password'
                            name='password2'
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <Button sx={{width: '75%', m: 2}} type="submit" variant='contained'>Register</Button>
                            <NavLink style={{textDecoration: 'none'}} to='/login'><Button sx={{m: 2}} variant='text'>Already Registered? </Button></NavLink>
                    </form>}
                    { isLoading && <LinearPro/>}
                    {user?.email && <Alert severity="success" color="info">
                        This is a success alert — check it out!
                        </Alert>}
                        {user?.email && <Alert variant="filled" severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;