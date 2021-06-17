import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../../images/logo/website-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [navbarAnimation, setNavbarAnimation] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbarAnimation(true);
        }
        else{
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbarAnimation ? "sticky-md-top navbar navbar-expand-lg navbar-light bg-white nav-style" : "navbar navbar-expand-lg navbar-light bg-white"}>
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
                                <NavLink to="#"  className="nav-link ps-lg-5 twitter-icon">
                                    <FontAwesomeIcon icon={faTwitter} className="nav-icons" />
                                </NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faFacebookSquare} className="nav-icons" />
                                </NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faLinkedin} className="nav-icons" />
                                </NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faInstagram} className="nav-icons" />
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-3">
                                <NavLink to="/home" exact activeClassName="nav-link-active" className="nav-link fw-bold">Home</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                                <NavLink to="/incubator" exact activeClassName="nav-link-active" className="nav-link fw-bold">Incubator</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                                <NavLink to="/learn" exact activeClassName="nav-link-active" className="nav-link fw-bold">Learn</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="search-btn d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faSearch} />
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