import React, { useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import weeklyActivityData from '../../../dummyData/courseWeeksData.json';
import './ActivityDetails.css';
import demoVideo from '../../../images/video.mp4';
import VideoPlayer from 'react-video-js-player';
 

const ActivityDetails = () => {
    const history = useHistory();
    // const {weekID} = useParams();
    // const [weeklyActivity, setWeeklyActivity] = useState([]);

    // const data = weeklyActivityData;
    // const weeklyActivityInfo = data.find(week => week.id == weekID);
    // const activity = weeklyActivityInfo.activity;

    // useEffect(() => {
    //     setWeeklyActivity(activity);
    // }, [activity])

    const videoSrc = "https://www.youtube.com/watch?v=VZmd8EOj3UA";
    const poster = "https://i.postimg.cc/43S6tzJh/youtube-thumbnail.jpg";

    return (
        <>
            <div  className="row" style={{backgroundColor: "#151371"}}>
                <Navbar />
                <div className="col-12 col-md-3">
                    <CourseSidebar />
                </div>
                <div className="col-12 col-md-9" style={{borderLeft: "5px solid gray"}}>
                    <div className="banner-bg">
                        <VideoPlayer src={demoVideo} poster={poster} height="420">
                        </VideoPlayer>
                    </div>

                    <div className="course-details">
                        <div className="menu-items mt-4">
                            <div className="d-flex justify-content-between mx-5 nextPrev-icons">
                                <Link onClick={() => history.goBack()} to="#">
                                <   p><FontAwesomeIcon icon={faArrowLeft} /></p>
                                </Link>
                                <Link onClick={() => history.push('/learn')} to="#">
                                    <p><FontAwesomeIcon icon={faArrowRight} /></p>
                                </Link>
                            </div>
                            <div className="px-md-5 mx-md-5">
                                        <div className="course-weeks px-3 mb-4 mx-2">
                                            <div className="row">
                                                <div className="col-md-6 d-flex align-items-center ms-3">
                                                    <div className="d-pb-1">
                                                        <h4 className="mt-3 mb-2 text-white">activity.activityName</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-1">
                                                    <div className="course-status ms-auto">
                                                        <span>activity.status</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActivityDetails;