import React from 'react';
import Banner from '../../Banner/Banner';
import Header from './Header';
import Services from '../../Services/Services';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services />
            <About></About>
        </div>
    );
};

export default Home;