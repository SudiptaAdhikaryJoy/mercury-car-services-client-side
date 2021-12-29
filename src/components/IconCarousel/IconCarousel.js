import React, { Component } from "react";
import Slider from "react-slick";
import 'animate.css';
import 'car-makes-icons/dist/style.css';
import { red, orange, grey } from '@mui/material/colors';
import { Typography } from "@mui/material";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const color = red[500];


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Typography sx={{color: grey[800], marginBottom: '50px'}} variant='h4' gutterBottom component="div" className="overview animate__animated animate__flip animate__faster-800ms animate__repeat-2">Our Partners</Typography> 
        <Slider {...settings}>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color:'silver'}}><i class="car-audi"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '80px', fontWeight: 500, color: red[600] }} ><i class="car-acura"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: {...color}}}><i class="car-bentley"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: 'black'}}><i class="car-bmw"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: red[600]}}><i class="car-dodge"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: 'black'}}><i class="car-jaguar"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: orange[800]}}><i class="car-lamborghini"></i></Typography>
          </div>
          <div>
            <Typography variant="h3" sx={{fontSize: '100px', fontWeight: 500, color: 'goldenRod'}}><i class="car-porsche"></i></Typography>
          </div>
        </Slider>
      </div>
    );
  }
}