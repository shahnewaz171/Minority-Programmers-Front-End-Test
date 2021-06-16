import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="mb-4 headerBanner">
            <div className="h-100 d-flex align-items-center">
                <div className="col-md-6"></div>
                <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                    <h1 className="text-white">Invest directly into <br /> minority innovations.</h1>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default HeaderBanner;