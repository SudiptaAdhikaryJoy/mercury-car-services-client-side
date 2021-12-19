import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Register = () => {
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
        // e.reset();
        if(loginData.password !== loginData.password2){

            alert('password dont match');
            return
        }
    }
    return (
         <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt : 10}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
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
                        <TextField
                        sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="Confirm your password" 
                            type='password'
                            name='passwor2'
                            onChange={handleOnChange}
                            variant="standard" />
                            <Button sx={{width: '75%', m: 2}} type="submit" variant='contained'>Register</Button>
                            <NavLink style={{textDecoration: 'none'}} to='/login'><Button sx={{m: 2}} variant='text'>Already Registered? </Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;