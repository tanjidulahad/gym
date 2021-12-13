import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {
    let navbar = document.getElementsByClassName('navbar-light');
    window.addEventListener("scroll", function () {
        if (this.scrollY > 200) {
            for (var i = 0; i < navbar.length; i++) {
                navbar[i].style.background = 'black';
            }
        }
        else if (this.scrollY < 1) {
            for (i = 0; i < navbar.length; i++) {
                navbar[i].style.background = 'none';
            }
        }
    })
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu-list" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <HashLink className="nav-link" smooth to="#offer">
                                HEADER1
                            </HashLink> */}
                            <a className="nav-link" aria-current="page" href="#header">HEADER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#feature">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#offer">OFFER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;