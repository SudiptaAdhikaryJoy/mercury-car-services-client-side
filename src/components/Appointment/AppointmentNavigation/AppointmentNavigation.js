import { Container, Grid } from '@mui/material';
import React from 'react';
import oil from '../../../images/carousel/slider1.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentNavigation = ({date, setDate}) => {
    return (
        <Container style={{marginTop: '15px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img className="img-fluid" style={{width: '100%'}} src={oil} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentNavigation;