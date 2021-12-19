import React from 'react';
import Banner from '../../Banner/Banner';
import Header from './Header';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services />
        </div>
    );
};

export default Home;