import React from 'react';
import Courses from '../Dashboard/Course/Course';
import Navbar from '../shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Courses />
        </>
    );
};

export default Dashboard;