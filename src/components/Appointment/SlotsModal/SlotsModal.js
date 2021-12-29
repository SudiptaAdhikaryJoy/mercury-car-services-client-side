import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const SlotsModal = ({openSlots, handleSlotsClose, timeSlot, date,setBookingSuccess}) => {
    const {name, slots, time, price} = timeSlot;
    const {user} = useAuth();
    const info = {customerName: user.displayName, email: user.email, phone: ''};
    const [slotsInfo, setSlotsInfo] = useState(info);

    const handleOnBlur = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...slotsInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setSlotsInfo(newInfo);
    }

    const handleSlotSubmit = e =>{
      // collect data
      e.preventDefault();
      const service_appointments = {
        ...slotsInfo,
        time,
        price,
        serviceName: name,
        date: date.toLocaleDateString()
      }

      // send data to server
      fetch('https://shrouded-oasis-41830.herokuapp.com/service_appointment',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(service_appointments)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true);
          handleSlotsClose();
        }
      })
      
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSlots}
        onClose={handleSlotsClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSlots}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleSlotSubmit}>
                <TextField
                    disabled
                    sx={{ width: '90%', m:2}}
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                    />
                <TextField
                    sx={{ width: '90%', m:2}}
                    id="outlined-size-small"
                    name='customerName'
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                    />
                <TextField
                    sx={{ width: '90%', m:2}}
                    id="outlined-size-small"
                    name='email'
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                    />
                <TextField
                    sx={{ width: '90%', m:2}}
                    id="outlined-size-small"
                    name='phone'
                    onBlur={handleOnBlur}
                    placeholder="your phone number"
                    size="small"
                    />
                <TextField
                    disabled
                    sx={{ width: '90%', m:2}}
                    id="outlined-size-small"
                    defaultValue={date.toDateString()}
                    size="small"
                    />
            <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default SlotsModal;