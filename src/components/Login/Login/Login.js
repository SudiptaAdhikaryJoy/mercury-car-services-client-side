import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange= e =>{
    
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
        alert('submit')
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt : 10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your email" 
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="your password" 
                            type='password'
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />
                            <Button sx={{width: '75%', m: 2}} type="submit" variant='contained'>Login</Button>
                            <NavLink style={{textDecoration: 'none'}} to='/register'><Button sx={{m: 2}} variant='text'>New User? Click Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;