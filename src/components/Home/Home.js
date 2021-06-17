import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import FeaturedStartups from './FeaturedStartups/FeaturedStartups';
import HeaderBanner from './HeaderBanner/HeaderBanner';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeaderBanner />
            <FeaturedStartups />
        </>
    );
};

export default Home;