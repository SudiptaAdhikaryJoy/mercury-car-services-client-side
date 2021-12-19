import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import TimeSlots from '../TimeSlots/TimeSlots';

const AvailableAppointment = ({date, setDate}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{color: '#203A43', mb: 2, fontWeight: 500}}>Car servicing {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    timeSlots.map(timeSlot =>
                        <TimeSlots
                            key={timeSlot.id}
                            timeSlot={timeSlot}
                        ></TimeSlots>
                        )
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;

const timeSlots = [
    { id: 1, name:'Engine Diagnostics', time: '10.00 AM - 12.00 PM', slots: 3},
    { id: 2, name:'Lube, Oil and Filters', time: '11.00 AM - 12.30 PM', slots: 8},
    { id: 3, name:'Belts and Hoses', time: '01.00 PM - 02.00 PM', slots: 7},
    { id: 4, name:'Air Conditioning', time: '03.00 PM - 05.00 PM', slots: 15},
]