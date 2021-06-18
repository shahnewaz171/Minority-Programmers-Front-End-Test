import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Courses from './Courses/Courses';
import LearnBanner from './LearnBanner/LearnBanner';

const LearnPage = () => {
    return (
        <>
            <Navbar />
            <LearnBanner />
            <Courses />
        </>
    );
};

export default LearnPage;