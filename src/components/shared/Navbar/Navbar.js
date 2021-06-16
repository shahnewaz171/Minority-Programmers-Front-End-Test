import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../images/logo/website-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container">
                    <Link to="#" class="navbar-brand nav-logo">
                        <img src={Logo} className="img-fluid" alt="logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="#" class="nav-link">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Incubator</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link">Learns</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;