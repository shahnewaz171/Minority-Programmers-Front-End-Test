import React from 'react';
import FundSidebar from './FundSidebar/FundSidebar';
import FundStartupHeader from './FundStartupHeader/FundStartupHeader';
import FundStartupInfo from './FundStartupInfo/FundStartupInfo';
import RelatedStartups from './RelatedStartups/RelatedStartups';

const FundStartup = () => {
    return (
        <div className="container">
            <FundStartupHeader />
            <div className="row mt-3">
                <div className="col-md-4">
                    <FundSidebar />
                </div>
                <div className="col-md-8">
                    <FundStartupInfo />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-8 mb-5 mt-3">
                    <RelatedStartups />
                </div>
            </div>
        </div>
    );
};

export default FundStartup;