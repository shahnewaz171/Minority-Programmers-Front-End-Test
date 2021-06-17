import React from 'react';
import FeaturedStartups from '../FeaturedStartups/FeaturedStartups';
import StartupCardsBanner from '../StartupCardsBanner/StartupCardsBanner';
import './AllStartups.css';

const AllStartups = () => {
    return (
        <>
           <FeaturedStartups /> 
           <StartupCardsBanner />
        </>
    );
};

export default AllStartups;