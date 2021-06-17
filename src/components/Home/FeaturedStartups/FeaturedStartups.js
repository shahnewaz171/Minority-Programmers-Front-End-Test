import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedStartups.css';

const FeaturedStartups = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
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
                <div className="col-md-2 text-white">
                    <h2 className="pt-4">Featured <br /> Startups </h2>
                    <p>Invest in the next <br /> billion dollar <br /> company today</p>
                </div>
                <div className="col-md-10">
                    <Slider {...settings}>
                        <div>
                            <div class="card" style={{width: '18rem'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="card-link">Card link</a>
                                    <a href="/" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{width: '18rem'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="card-link">Card link</a>
                                    <a href="/" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" style={{width: '18rem'}}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="card-link">Card link</a>
                                    <a href="/" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartups;