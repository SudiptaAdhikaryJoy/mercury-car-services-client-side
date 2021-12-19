import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Container, Typography} from '@mui/material';
import Service from '../Service/Service';
import Header from '../Home/Home/Header';
// import oil from '../../images/services/oil.png';
// import repairing from '../../../images/services/repairing';
// import service from '../../../images/services/service';


const services = [
    { id: 1, name: 'Engine Diagnostics', description: 'Engine Diagnostics refers to any type of manual or computerized assessment used to identify problems your car may be experiencing. Most cars today have an onboard computer that can interface with electronic diagnostic equipment and identify specific problems that are present.', image:'https://fulldiag.com/wp-content/uploads/2016/09/car-diagnostic-software-3756x1878.jpg'},
    { id: 2, name: 'Lube, Oil and Filters', description: 'Oil is responsible for lubricating the working components inside your vehicles engine while reducing the amount of friction between them. Together, the oil and oil filter keep your vehicles engine operating at optimal levels of performance.', image: 'https://www.eurocarparts.com/blog/ecp-wp-content/uploads/2016/07/Engine-Oil-Pour.jpg'},
    { id: 3, name: 'Belts and Hoses', description: 'Your vehicles belts and hoses are involved in processes within the cooling system, air conditioning system, charging system, and engine. The heater hose and radiator hose carry liquid coolant to and from the engine, radiator, and heater core.', image: 'https://kingsquicklane.com/wp-content/uploads/2018/12/Belts-and-Hoses-Cincinnati-OH-Belt-System.jpg'},
    { id: 4, name:'Air Conditioning', description: 'Air conditioning, often abbreviated as A/C or AC, is the process of removing heat and controlling the humidity of air in an enclosed space to achieve a more comfortable interior environment by use of powered "air conditioners" or a variety of other methods, including passive cooling and ventilative cooling.', image: 'https://thumbs.dreamstime.com/b/auto-mechanic-diagnosing-car-service-red-uniform-hoist-134182845.jpg'}
]


const Services = () => {
    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
             <Header></Header>
            <Container style={{marginTop: '5px'}}>
                <Typography  variant="h3">Our Services</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
    </Box>
        </>
    );
};

export default Services;