import React from 'react';
import FundSidebar from './FundSidebar/FundSidebar';
import FundStartupHeader from './FundStartupHeader/FundStartupHeader';

const FundStartup = () => {
    return (
        <div className="container">
            <FundStartupHeader />
            <div className="row mt-3">
                <div className="col-md-4">
                    <FundSidebar />
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default FundStartup;