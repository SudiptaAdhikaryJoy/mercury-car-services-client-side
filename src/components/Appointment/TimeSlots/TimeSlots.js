import { Grid, Paper, Typography, Button } from '@mui/material';
import React from 'react';

const TimeSlots = ({timeSlot}) => {
    const {name, slots, time} = timeSlot;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{color: '#203A43', fontWeight: 500}} variant="h5" gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom display="block">
                    {slots} slots available
                </Typography>
                <Button variant='contained'>Book Slots</Button>
            </Paper>
        </Grid>
    );
};

export default TimeSlots;