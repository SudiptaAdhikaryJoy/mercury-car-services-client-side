import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Header from '../Home/Home/Header';


const Service = ({service}) => {
    const {name, image, description } = service;
    return (
      
        
          <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
        <Typography variant="h5" component="div">
            {name}
        </Typography>
        
        <Typography variant="body2">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                        
        </Grid>  
        
    );
};

export default Service;