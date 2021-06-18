import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedStartupsList = ({startupsCompany}) => {
    const {name, logo, description, status, fundAverage, amount, id} = startupsCompany;

    return (
        <div className="featured-item">
            <div className="single-item">
                <div className="d-flex">
                    <div className="mangoswap-logo">
                        <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                    </div>
                    <h3 className="ms-3">{name}</h3>
                </div>
                <p>{description}</p>
                <div className="d-flex justify-content-between mb-1">
                    <h6>{status}</h6>
                    <span>{fundAverage}</span>
                </div>
                <h5>{amount}</h5>
                <div className="progress mt-3 mb-3">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to={`/startup/${id}`}>
                        <button className="btn p-2 btn-outline-card">Fund Startup</button>
                    </Link>
                    <button className="btn p-2 btn-outline-card">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartupsList;