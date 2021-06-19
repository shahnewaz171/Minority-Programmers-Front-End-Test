import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../../Home/FeaturedStartups/settings';
import featuredCoursesData from '../../../dummyData/featuredCourses.json';
import { Link } from 'react-router-dom';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
    const [featuredCourses, setFeaturedCourse] = useState([]);

    useEffect(() => {
        setFeaturedCourse(featuredCoursesData);
    }, [])

    return (
        <div className="row">
            <Slider {...settings}>
                {featuredCourses && featuredCourses.map(course => (
                    <div key={course.id}>
                        <div className="courses-items px-3 mb-4 mx-2">
                            <div className="earn-rate ms-auto">
                                <span>Earn {course.earn}</span>
                            </div>
                            <div className="d-pb-1">
                                <h3 className="mt-3 mb-0">{course.name}</h3>
                            </div>
                            <p>{course.description}</p>
                            <div className="text-center mb-4">
                                <Link to={`/course/${course.id}`}>
                                    <button className="btn px-5 banner-btn mt-3">
                                        Learn
                                    </button>
                                </Link>
                            </div>
                            <div className="module-rate">
                                <span>{course.moduleRate}</span>
                            </div>
                            <div className="progress mt-1 mb-1">
                                <div className="progress-bar" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="text-center">{course.averageCompletion}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedCourses;