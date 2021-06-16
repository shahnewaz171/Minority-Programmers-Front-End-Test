import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../images/logo/website-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="#" className="navbar-brand nav-logo">
                        <img src={Logo} className="img-fluid" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="#" className="nav-link ps-lg-5 twitter-icon">
                                    <FontAwesomeIcon icon={faTwitter} className="nav-icons" />
                                </Link>
                            </li>
                            <li className="nav-item ps-2">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="nav-icons" />
                                </Link>
                            </li>
                            <li className="nav-item ps-2">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faLinkedin} className="nav-icons" />
                                </Link>
                            </li>
                            <li className="nav-item ps-2">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faInstagram} className="nav-icons" />
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-2">
                                <Link to="#" className="nav-link fw-bold">Home</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link to="#" className="nav-link fw-bold">Incubator</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link to="#" className="nav-link fw-bold">Learn</Link>
                            </li>
                            <li className="nav-item search-btn d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSearch} />
                                <div className="togglesearch">
                                    <input type="text" placeholder=""/>
                                    <input type="button" value="Search"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;