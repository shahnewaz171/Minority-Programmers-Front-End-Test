import React from 'react';

const CourseWeeksList = ({courseWeek}) => {
    const { weekName, completionStatus, completionAverage } = courseWeek;

    return (
        <>
            <div className="px-md-5 mx-md-5 mt-4" style={{cursor: "pointer"}}>
                <div className="course-weeks px-3 mb-4 mx-2">
                    <div className="course-status ms-auto">
                        <span>{completionStatus}</span>
                    </div>
                    <div className="d-pb-1">
                        <h4 className="mt-3 mb-2 text-white">{weekName}</h4>
                    </div>
                    <div className="d-flex justify-content-center mb-1">
                        <div className="progress mt-1">
                            <div className="progress-bar w-100" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <p className="text-center text-white">
                        {completionAverage}
                        <span className="ms-1">completionStatus</span>
                    </p>
                </div>
            </div>  
        </>
    );
};

export default CourseWeeksList;