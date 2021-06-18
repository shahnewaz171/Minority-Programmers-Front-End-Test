import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import MyCourses from '../MyCourses/MyCourses';
import './Courses.css';

const Courses = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="courses pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="search-items pb-5 pt-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                                <input className="form-control me-2 search-input" {...register("exampleRequired", { required: true })} placeholder="What event are you looking for?" />
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter search
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li>
                                            <Link to="#" className="dropdown-item">My Courses</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="dropdown-item">Featured Courses</Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            {errors.exampleRequired && <p>This field is required</p>}
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="my-courses d-flex pt-2">
                        <h1>My Courses</h1>
                    </div>
                    <div className="mt-3 courses-info">
                        <MyCourses />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;