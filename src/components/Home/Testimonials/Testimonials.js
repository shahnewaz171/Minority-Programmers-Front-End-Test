import React, { useEffect, useState } from 'react';
import memberLogo from '../../../images/home/members-logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsInfo from '../../../dummyData/testimonialsData.json';
import './Testimonials.css';
import settings from '../../IncubatorPage/FeaturedStartups/settings';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        setTestimonials(testimonialsInfo);
    }, [])

    return (
        <div className="testimonials">
            <div className="container">
                <div className="text-center homeSection-title pt-4">
                    <h6 className="pt-5">What Our Members Says</h6>
                    <h1 className="mt-3">Testimonials</h1>
                </div>
                <div className="row mt-5">
                    <Slider {...settings}>
                        {testimonials && testimonials.map(testimonial => (
                            <div key={testimonial.id} className="col-md-4">
                                <div className="mb-md-5 pb-4">
                                    <div className="courses-items px-3 mb-4 mx-2">
                                        <div className="testimonials-img mb-4 pt-4">
                                            <img src={memberLogo} className="img-fluid" alt="" />
                                        </div>
                                        <h4>{testimonial.name}</h4>
                                        <p className="pb-2 text-center">{testimonial.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;