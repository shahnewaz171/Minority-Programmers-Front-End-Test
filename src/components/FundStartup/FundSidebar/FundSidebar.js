import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './FundSidebar.css';

const FundSidebar = () => {
    return (
        <div className="bg-white fundSidebar-style">
            <h6 className="fw-bold pt-3 pb-1 px-4">Founded 17th May, 2015</h6>
            <hr />
            <div className="px-4">
                <div className="pb-3">
                    <p className="mb-1">Website</p>
                    <div className="d-flex">
                        <a href="https://minorityprogrammers.com" className="text-decoration-none fw-bold">mangoswap.com</a>
                        <div className="ms-3">
                            <a href="https://twitter.com/minorityprogram">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/company/minority-programmers/" className="ms-2">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.facebook.com/MinorityProgrammers" className="ms-2">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pb-3">
                    <p className="mb-1">Location</p>
                    <h5>San Francisco, California</h5>
                    
                </div>
                <div>
                    <p className="mb-1">Team Size</p>
                    <h5>100-500 people</h5>
                </div>
            </div>
            <hr />
            <div className="px-4">
                <h4>Meet the team</h4>
            </div>
        </div>
    );
};

export default FundSidebar;