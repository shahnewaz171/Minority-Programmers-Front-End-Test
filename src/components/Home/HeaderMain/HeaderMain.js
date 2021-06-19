import React from 'react';
import { Link } from 'react-router-dom';
import investImg from '../../../images/home/invest.png';
import waveImg from '../../../images/home/wave3.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div>
            <div className="container">
                <main className="d-md-flex align-items-center mt-5">
                    <div className="col-12 col-md-6">
                        <h1 className="mb-4 text-white">Invest in the next billion dollar company today</h1>
                        <p className="text-white">Find a featured startups or upcoming startups</p>
                        <Link to="/incubator">
                            <button className="btn px-4 purple-btn mt-3">
                                View Startups
                            </button>
                        </Link>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <img src={investImg} className="img-fluid" alt="" />
                    </div>
                </main>
            </div>
            <img src={waveImg} className="img-fluid" alt="" />
        </div>
    );
};

export default HeaderMain;