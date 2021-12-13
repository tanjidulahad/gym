import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className='header' id='header'>
            
            <div className="title">
                <h3 className="sub-title">STEP UP YOUR</h3>
                <h1><span>FITNESS</span> WITH US</h1>
                <p>Build Your Body And Fitness With Professional Touch</p>
                <button>JOIN US</button>
            </div>
        </div>
    );
};

export default Header;