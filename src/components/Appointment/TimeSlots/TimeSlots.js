import { Grid, Paper, Typography, Button } from '@mui/material';
import React from 'react';
import SlotsModal from '../SlotsModal/SlotsModal';

const TimeSlots = ({timeSlot, date, setBookingSuccess}) => {
    const {name, slots, time} = timeSlot;
    const [openSlots, setOpenSlots] = React.useState(false);
  const handleSlotsOpen = () => setOpenSlots(true);
  const handleSlotsClose = () => setOpenSlots(false);

    return (
        <>
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
                <Button onClick={handleSlotsOpen} variant='contained'>Book Slots</Button>
            </Paper>
        </Grid>
        <SlotsModal
            date={date}
            timeSlot={timeSlot}
            openSlots={openSlots}
            handleSlotsClose={handleSlotsClose}
            setBookingSuccess={setBookingSuccess}
        >

        </SlotsModal>
        </>
    );
};

export default TimeSlots;