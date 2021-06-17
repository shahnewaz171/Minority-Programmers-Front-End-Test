import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MangoswapLogo from "../../../images/mangoswap-stack-with-corwn.png";
import './FeaturedStartups.css';

const FeaturedStartups = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    
    return (
        <div className="pb-5 featuredSection">
            <div className="container d-flex">
                <div className="col-md-2">
                    <h2>Welcome</h2>
                </div>
                <div className="col-md-10">
                    <Slider {...settings}>
                    <div className="featured-item">
                        <div className="single-item">
                            <div className="d-flex">
                                <div className="mangoswap-logo">
                                    <img src={MangoswapLogo} className="img-fluid" alt="mangoswapLogo" />
                                </div>
                                <h3 className="ms-3">Mangoswap</h3>
                            </div>
                            <p>
                                The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.
                            </p>
                            <div className="d-flex justify-content-between mb-1">
                                <h6>Fund raise</h6>
                                <span>50% complete</span>
                            </div>
                            <h5>$200,000/$400,000</h5>
                            <div className="progress mt-3 mb-3">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn p-2 btn-card">Fund Startup</button>
                                <button className="btn p-2 btn-outline-card">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="single-item">
                            <h2 className="reviewStyle">Shahnewaz</h2>
                            <p className="reviewStyle" style={{fontWeight: '500', fontSize: '15px'}}>Hello</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="single-item">
                            <h2 className="reviewStyle">Shahnewaz</h2>
                            <p className="reviewStyle" style={{fontWeight: '500', fontSize: '15px'}}>Hello</p>
                        </div>
                    </div>
                    
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartups;