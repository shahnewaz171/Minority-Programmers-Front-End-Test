import React from 'react';
import logo from '../../../images/mangoswap-stack-with-corwn.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RelatedStartups.css';

const RelatedStartups = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay:true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-white ms-md-3 px-5">
            <div className="pt-4">
                <h4 className="pb-3">Related startups</h4>
            </div>
            <div className="row related-startup">
                <Slider {...settings}>
                    <div className="">
                        <div className="startup-items px-3 mb-4 mx-2">
                            <div className="d-flex pb-3">
                                <div className="mangoswap-logo">
                                    <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h4 className="ms-3 mt-3">Mongoswap</h4>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% Complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="startup-items px-3 mb-4 mx-2">
                            <div className="d-flex pb-3">
                                <div className="mangoswap-logo">
                                    <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h4 className="ms-3 mt-3">Mongoswap</h4>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% Complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="startup-items px-3 mb-4 mx-2">
                            <div className="d-flex pb-3">
                                <div className="mangoswap-logo">
                                    <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h4 className="ms-3 mt-3">Mongoswap</h4>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% Complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="startup-items px-3 mb-4 mx-2">
                            <div className="d-flex pb-3">
                                <div className="mangoswap-logo">
                                    <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h4 className="ms-3 mt-3">Mongoswap</h4>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% Complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="startup-items px-3 mb-4 mx-2">
                            <div className="d-flex pb-3">
                                <div className="mangoswap-logo">
                                    <img src={logo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h4 className="ms-3 mt-3">Mongoswap</h4>
                            </div>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% Complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default RelatedStartups;