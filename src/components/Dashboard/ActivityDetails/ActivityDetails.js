import React, { useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useParams } from 'react-router-dom';
import weeklyActivityData from '../../../dummyData/courseWeeksData.json';
import './ActivityDetails.css';
import demoVideo from '../../../images/video.mp4';
import VideoPlayer from 'react-video-js-player';
 

const ActivityDetails = () => {
    const history = useHistory();
    const {activityID} = useParams();
    const poster = "https://i.postimg.cc/43S6tzJh/youtube-thumbnail.jpg";
    const [activity, setActivity] = useState([]);

    const data = weeklyActivityData;
    const weeklyActivityInfo = data.find(week => week.id == activityID);

    useEffect(() => {
        const activityInfo = weeklyActivityInfo.activity;
        const findActivity = activityInfo.find(activity => activity.id == activityID);
        setActivity(findActivity);
    }, [weeklyActivityInfo, activityID])

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
                                <Link to="#">
                                    <p><FontAwesomeIcon icon={faArrowRight} /></p>
                                </Link>
                            </div>
                            <div className="px-md-5 mx-md-5">
                                <div className="course-weeks px-3 mb-4 mx-2">
                                    <div className="course-status ms-auto">
                                        <span>{activity.status}</span>
                                    </div>
                                    <div className="ms-4 text-white">
                                        <div className="d-pb-1">
                                            <h3 className="mt-3 mb-2">{activity.activityName}</h3>
                                        </div>
                                        <div className="duration mt-3">
                                            <span><FontAwesomeIcon icon={faClock} /></span>
                                            <span className="ms-2">{activity.duration}</span>
                                        </div>
                                        <div className="mt-5">
                                            <h4>Header</h4>
                                            <p>{activity.description}</p>
                                        </div>
                                        <div className="mt-5 mb-5 pb-3">
                                            <h4>Header</h4>
                                            <p>{activity.description}</p>
                                        </div>
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