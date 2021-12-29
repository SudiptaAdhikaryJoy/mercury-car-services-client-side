import { Container,Grid, Typography } from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';
// import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{marginTop: '15px',backgroundColor: grey[400], width: '100%'}}>
            <Grid container spacing={2} >
  <Grid item xs={12} md={8}>
    <img className='img-fluid shadow-lg rounded-pill border-1 border' src="https://media.istockphoto.com/videos/handsome-professional-car-mechanic-is-working-on-a-vehicle-in-a-is-video-id1210302414?s=640x640" alt="" />
  </Grid>
  <Grid item xs={12} md={4}>
    <Typography variant="h3">About Us</Typography>
    <Typography variant="text">Servicing your car will extend your engine life, reduce fuel consumption, increase the safety of your vehicle, prevent wearing of moving parts, maintains road worthiness and improves resale value.</Typography>
  </Grid>
  </Grid>
   </div>
    );
};

export default About;