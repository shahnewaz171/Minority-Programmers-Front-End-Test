import React from 'react';
import './LearnBanner.css';

const LearnBanner = () => {
    return (
        <div className="learnBanner">
            <div className="h-100 d-flex align-items-center">
                <div className="col-md-6">
                    <div className="learnBanner-image">
                       
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-white">Learn high in demand <br /> IT Skills & Get Crypto</h1>
                    <button className="btn px-4 banner-btn mt-3">
                        View Startups
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnBanner;