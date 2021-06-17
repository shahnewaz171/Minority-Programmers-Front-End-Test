import React from 'react';
import logo from '../../../images/mangoswap-stack-with-corwn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './FundStartupHeader.css';

const FundStartupHeader = () => {
    return (
        <div className="mt-4 startup-header bg-white">
            <div className="d-flex align-items-center">
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <div className="arrow-icon">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mangoswap-logo">
                            <img src={logo} className="img-fluid" alt="mangoswapLogo" style={{height: "75%"}} />
                        </div>
                        <h4 className="ms-1 mb-0 fw-bold">Mangoswap</h4>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="d-flex">
                        <h6 className="fund-status">Funds raised</h6>
                        <span className="ms-4">50% complete</span>
                    </div>
                    <h6 className="fw-bold">$200,000/$400,000</h6>
                </div>
                <div className="col-md-3">
                    <div className="progress ms-5">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn px-4 banner-btn ms-4">
                        Fund Startup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FundStartupHeader;