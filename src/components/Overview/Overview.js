import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import {  grey } from '@mui/material/colors';
import 'animate.css';
import './Overview.css';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const Overview = () => {
    return (
        <>
            <Typography sx={{color: grey[800]}} className="overview animate__animated animate__flip animate__faster-800ms animate__repeat-2" variant="h4">Company Overview</Typography> <br /> <br />
            <Typography variant="subtitle1" gutterBottom component="div">      
                <blockquote>We can help you with everything from an oil change to an engine change. <br />We can handle any problem on both foreign and domestic vehicles.</blockquote> 
            </Typography>
            <br />
            <br />
            <Container className="">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">CAR AUDIO SERVICE</Typography>
                        <Box sx={{display: 'flex'}}>
                            <LocalCarWashIcon />
                            <Typography variant="subtitle2" gutterBottom component="div">
                                Vehicle audio is equipment installed in a car or other vehicle to provide in-car entertainment and information for the vehicle occupants.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                            <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">FREE OIL CHANGE</Typography>
                        <Box sx={{display: 'flex'}}>
                            <LocalGasStationIcon />
                            <Typography variant="subtitle2" gutterBottom component="div">Let's start with the “free” oil changes. They are not free. The price of the “free” oil change has been covered within the price of the car (sales price, lower trade in, higher financing charges, or a maintenance package added to your bottom line (loan) with interest).
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">ENGINE DIAGNOSTICS</Typography>
                        <Box sx={{display: 'flex'}}>
                            <IntegrationInstructionsIcon />
                            <Typography variant="subtitle2" gutterBottom component="div">Engine Diagnostics refers to any type of manual or computerized assessment used to identify problems your car may be experiencing. Most cars today have an onboard computer that can interface with electronic diagnostic equipment and identify specific problems that are present.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                            <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">CAR A/C RECHARGE</Typography>
                        <Box sx={{display: 'flex'}}>
                                <AcUnitIcon />
                                <Typography variant="subtitle2" gutterBottom component="div">Simply put, an AC recharge means adding more refrigerant to your vehicle. This process is a very common maintenance requirement for older vehicles that still use Freon as a refrigerant. Most modern cars have started using a refrigerant called R134a instead, which doesn't need to be topped off quite as often.
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">PARKING SENSORS CALIBRATION</Typography>
                        <Box sx={{display: 'flex'}}>
                                <WifiIcon />
                                <Typography variant="subtitle2" gutterBottom component="div">Park assist sensors are ultrasonic sensors that can be found in the front and rear bumper covers.Calibration or aiming may need to be done after removal of the bumper cover, removal of the sensor, or an impact on or near the sensor. Most OEMs do not require a calibration but call for a system test after installation.
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                            <Typography sx={{fontWeight: 600}} variant='h5' gutterBottom component="div">CAR BATTERY REPAIRS</Typography>
                        <Box sx={{display: 'flex'}}>
                                <BatterySaverIcon />
                                <Typography variant="subtitle2" gutterBottom component="div">
                            Service typically includes: Inspecting the battery, battery cables and terminals. Cleaning the battery surface and terminals. Performing an open circuit voltage and load test and treating the battery terminals to help prevent corrosion.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Overview;