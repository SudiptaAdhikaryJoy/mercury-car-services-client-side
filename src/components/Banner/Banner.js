import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/carousel/slider1.png';
import slider2 from '../../images/carousel/slider2.jpeg';
import slider3 from '../../images/carousel/slider3.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'red', fontWeight: 700, fontSize: '50px'}}>Make Your Engine Dynamic</h3>
                    <p>Come and Explore Us</p>
                    <Link to='/about'><a style={{color: '#fff', fontWeight: 600, fontSize: '30px', textDecoration: 'none' }} href="">Purchase</a></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-75 img-fluid"
                    src={slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="mb-3" style={{color: 'red', fontWeight: 700, fontSize: '50px'}}>Set Your Car Wheel Perfectly</h3>
                    <p>We ensure you to stay with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={slider3}
                    alt="Third slide"
                    />

                <Carousel.Caption>
                <h3 style={{color: 'red', fontWeight: 700, fontSize: '50px'}}>Make your car confindent</h3>
                <p>We believe that we can make your car confindent available</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>   
        </>
    );
};

export default Banner;